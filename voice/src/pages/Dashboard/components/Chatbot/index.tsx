import { IoIosSend, IoMdMenu } from "react-icons/io";
import { Oval } from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { ConversationData, MessageData } from "../../../../types";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../constants";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Messages from "./Messages";
import Avatar from "./Avatar";
import useDetectKeyboardOpen from "use-detect-keyboard-open";

const Chatbot = ({
  avatar,
  chatbotId,
  projectId,
  voiceId,
  isCitationVisible,
  isExpanded,
  setIsExpanded,
}: {
  avatar: string | undefined;
  chatbotId: string;
  projectId: string;
  voiceId: string;
  isCitationVisible: boolean;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [messages, setMessages] = useState<MessageData[]>();
  const [conversations, setConversations] = useState<ConversationData[]>([]);
  const [conversation, setConversation] = useState<ConversationData>();
  const [textPrompt, setPrompt] = useState("");
  const [sentPrompt, setSentPrompt] = useState<string>();
  const [isSending, setIsSending] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const notifyError = (message: string) => toast.error(message);
  const notifyWarning = (message: string) => toast.warning(message);
  const notifyMessage = (message: string) =>
    toast(message, { autoClose: 2000 });
  const scrollToBottomRef = useRef<any>(null);

  const fetchMessages = async () => {
    const response = await axios.get(
      `${BASE_URL}/chatbot/messages?projectId=${conversation?.project_id}&sessionId=${conversation?.session_id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 200) {
      setMessages(response.data.messages);
    }
  };

  const sendPrompt = async () => {
    const response = await axios.post(
      `${BASE_URL}/chatbot/prompt`,
      {
        chatbotId,
        sentPrompt,
        voiceId,
        projectId: conversation?.project_id,
        sessionId: conversation?.session_id,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data["statusCode"] === 200) {
      if (messages)
        setMessages([
          ...messages,
          { ...response.data.message, audioBase64: response.data.audio },
        ]);
      else
        setMessages([
          { ...response.data.response, audioBase64: response.data.audio },
        ]);

      setIsSending(false);
    } else {
      setIsSending(false);
      notifyError(response.data["message"]);
    }

    setSentPrompt(undefined);
    scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchConversations = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      `${BASE_URL}/chatbot/conversations?projectId=${projectId}&token=${token}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 200) {
      const date = new Date();
      setIsCreating(true);
      createConversation(
        `Chat ${response.data.conversations.length + 1} ${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`,
        response.data.conversations
      );
    }
  };

  const deleteConversation = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.delete(
      `${BASE_URL}/chatbot/conversation?projectId=${conversation?.project_id}&sessionId=${conversation?.session_id}&token=${token}`
    );
    if (response.data["statusCode"] === 200) {
      const updatedConversations = conversations.filter(
        (prev_conversation) => prev_conversation.id !== conversation?.id
      );
      setConversations(updatedConversations);
      setConversation(updatedConversations[updatedConversations.length - 1]);
      notifyMessage(response.data["message"]);
    } else notifyError(response.data["message"]);
    setIsDeleting(false);
  };

  const createConversation = async (
    name: string,
    initialConversations?: []
  ) => {
    const token = localStorage.getItem("access_token");
    const response = await axios.post(`${BASE_URL}/chatbot/conversation`, {
      projectId,
      name,
      token,
    });

    if (response.data["statusCode"] === 200) {
      if (!initialConversations)
        setConversations([...conversations, response.data["conversation"]]);
      else
        setConversations([
          ...initialConversations,
          response.data["conversation"],
        ]);
      setConversation(response.data["conversation"]);
      notifyMessage(response.data["message"]);
    } else notifyError(response.data["message"]);
    setIsCreating(false);
  };

  useEffect(() => {
    fetchConversations();
  }, [projectId]);

  useEffect(() => {
    if (conversation) fetchMessages();
  }, [conversation]);

  useEffect(() => {
    scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    if (sentPrompt) sendPrompt();
  }, [sentPrompt]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [messages]);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <aside
      className={`fixed z-50 ${
        isExpanded ? "scale-[1.05]" : "scale-0"
      } transition-all duration-500 ease-in-out w-[90%] ${isKeyboardOpen ? 'top-[-80px]' : 'top-20'} sm:left-10 md:left-17 lg:left-[5%] left-5 grid content-between bg-[url('assets/chatbot_bg.png')] bg-cover border-2 border-[#8756DF]/70 rounded-xl`}
    >
      <section
        className={`w-[98%] m-1 rounded-xl h-[70vh] top-0 backdrop-blur-sm ${
          isExpanded ? "grid" : "hidden"
        }`}
      >
        <div
          className={`h-10 w-full px-5 mb-10 ${
            isExpanded ? "flex" : "hidden"
          } justify-between rounded-b-md`}
        >
          <button
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            <AiOutlineClose color="white" />
          </button>

          {isCreating ? (
            <div className="flex gap-5 items-center">
              <h1 className="text-white">Loading Chatbot</h1>
              <Oval
                height={20}
                width={20}
                color="#8756DF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#A37EE7"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <></>
          )}

          <div
            id="message-panel"
            className={`${
              chatExpanded ? "absolute" : "hidden"
            } rounded-lg h-[102%] right-[-25px] top-[-5px] z-50 w-[90%] sm:w-2/3 lg:w-1/3 border-2 border-[#8756DF] backdrop-blur-xl bg-purple-500/5`}
          >
            <div className="flex justify-between px-5 mb-5">
              <button
                onClick={() => {
                  setChatExpanded(false);
                }}
              >
                <AiOutlineClose color="white" className="sm:mx-5 my-5" />
              </button>
              {conversations && conversations.length > 0 ? (
                <select
                  className="w-20 bg-transparent text-white"
                  value={conversation ? conversation.name : undefined}
                  onChange={(event) => {
                    setMessages(undefined);
                    const name = event.target.value;
                    const selectedConversation = conversations.filter(
                      (conversation) => conversation.name === name
                    )[0];

                    setConversation(selectedConversation);
                  }}
                >
                  {conversations.map((conversation, index) => (
                    <option
                      key={index}
                      value={conversation.name}
                      className="bg-transparent backdrop-blur-xl text-[#8756DF]"
                    >
                      {conversation.name}
                    </option>
                  ))}
                </select>
              ) : (
                <></>
              )}
              <div className="flex gap-5">
                {isCreating ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#8756DF"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#A37EE7"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  <button
                    onClick={() => {
                      const date = new Date();
                      setIsCreating(true);
                      createConversation(
                        `Chat ${conversations ? conversations.length + 1 : 1} ${
                          date.getMonth() + 1
                        }/${date.getDate()}/${date.getFullYear()}`
                      );
                    }}
                  >
                    <BiCommentAdd color="white" size={25} className="mt-2" />
                  </button>
                )}

                {conversations && conversations.length > 0 ? (
                  isDeleting ? (
                    <Oval
                      height={20}
                      width={20}
                      color="#8756DF"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#A37EE7"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  ) : (
                    <button
                      onClick={() => {
                        setIsDeleting(true);
                        deleteConversation();
                      }}
                    >
                      <MdDelete color="#C70000" size={25} />
                    </button>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>

            <Messages
              avatar={avatar}
              isSending={isSending}
              isCitationsVisible={isCitationVisible}
              sentPrompt={sentPrompt}
              scrollToBottomRef={scrollToBottomRef}
              conversation={conversation}
              conversations={conversations}
              messages={messages}
              projectId={projectId}
              voiceId={voiceId}
            />
          </div>

          <button
            onClick={() => {
              setChatExpanded(true);
            }}
          >
            <IoMdMenu
              color="white"
              className={`sm:mx-5 my-5 ${
                chatExpanded ? "invisible" : "visible"
              }`}
            />
          </button>
        </div>

        <Avatar
          avatar={avatar}
          audioBase64={
            messages &&
            messages.length > 0 &&
            messages[messages.length == 0 ? 0 : messages.length - 1].audioBase64
              ? messages[messages.length == 0 ? 0 : messages.length - 1]
                  .audioBase64
              : ""
          }
          isSending={isSending}
        />
      </section>

      <footer
        className={`rounded-lg bg-white/30 backdrop-blur-xl h-20 w-full ${
          isExpanded ? "grid" : "hidden"
        }`}
      >
        <input
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              if (textPrompt) {
                setIsSending(true);
                scrollToBottomRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                setSentPrompt(textPrompt);
                setPrompt("");
              } else notifyWarning("Enter a prompt before sending.");
            }
          }}
          disabled={conversations && conversations.length === 0}
          value={textPrompt}
          type="text"
          placeholder="Enter Prompt"
          className="rounded-xl m-2 p-3 bg-gray-200 shadow-lg shadow-[#44365f] w-[93%] sm:w-[99%] h-12"
        />
        <button
          disabled={conversations && conversations.length === 0}
          onClick={() => {
            if (textPrompt) {
              setIsSending(true);
              scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" });
              setSentPrompt(textPrompt);
              setPrompt("");
            } else notifyWarning("Enter a prompt before sending.");
          }}
          className="relative sm:left-[95%] left-[80%] bottom-11"
        >
          <IoIosSend size={25} color="#8756DF" />
        </button>
      </footer>
    </aside>
  );
};

export default Chatbot;
