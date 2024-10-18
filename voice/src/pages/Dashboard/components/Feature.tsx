import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import ChatbotPlaceholder from "../assets/chatbot_icon.png";
import GetInTouch from "../assets/get_in_touch.png";
import GetInTouchBtn from "../assets/get_in_touch_btn.png";
import { BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { SubscribedData, UserSuspensionData } from "../../../types";
import { toast } from "react-toastify";
import { FaCrown } from "react-icons/fa";
import Subscriptions from "./Subscriptions";
import { CiMail } from "react-icons/ci";

const Feature = ({
  chatBots,
  suspension,
  subscribed,
}: {
  chatBots: any;
  suspension: UserSuspensionData;
  subscribed: SubscribedData[];
}) => {
  const [projectId, setProjectId] = useState<string>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubscriptionsExpanded, setIsSubscriptionsExpanded] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [chatbotId, setChatbotId] = useState<string>("");
  const [voiceId, setVoiceId] = useState<string>();
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [isCitationVisible, setIsCitationVisible] = useState(false);
  const [conversationAvatar, setConversationAvatar] = useState();
  const notifyWarn = (message: string) => toast.warn(message);

  const populateData = () => {
    return chatBots.map((chatBot: any, index: number) =>
      chatBot
        ? {
            id: chatBot["_id"],
            name: chatBot["project"]["project_name"],
            categories: chatBot["tags"],
            content: (
              <div
                key={index}
                className="lg:mx-6 sm:mx-4 my-5 w-full sm:w-[95%] h-auto border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl "
              >
                <div
                  key={`${index}-1`}
                  className="flex justify-between lg:justify-start gap-5 w-full sm:px-1 relative mt-2"
                >
                  {chatBot["subscriptions"] &&
                  chatBot["subscriptions"].length > 0 ? (
                    <FaCrown className="absolute right-3" color="#7255D0" />
                  ) : (
                    <></>
                  )}
                  <div className="grid w-full justify-items-center">
                    <img
                      src={
                        chatBot["project"]["settings"]
                          ? chatBot["project"]["settings"]["chatbot_avatar"]
                          : ChatbotPlaceholder
                      }
                      alt=""
                      className="w-[130px] h-[130px] p-2 rounded-2xl"
                    />

                    <div className="flex gap-3 text-white/50 text-3xl mb-2">
                      {chatBot["social"]["instagram"] ? (
                        <a href={chatBot ? chatBot["social"]["instagram"] : ""}>
                          <BiLogoInstagram size={15} />
                        </a>
                      ) : (
                        <></>
                      )}

                      {chatBot["social"]["twitter"] ? (
                        <a href={chatBot ? chatBot["social"]["twitter"] : ""}>
                          <FaXTwitter size={15} />
                        </a>
                      ) : (
                        <></>
                      )}

                      {chatBot["social"]["youtube"] ? (
                        <a href={chatBot ? chatBot["social"]["youtube"] : ""}>
                          <BiLogoYoutube size={15} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div className="h-[150px] grid justify-between py-3 w-full">
                    <div>
                      <h1 className="text-md">
                        {chatBot["project"]["project_name"]}
                      </h1>
                      <h2 className="text-white/50 text-[11px] font-thin">
                        {chatBot["label"] ?? "Label"}
                      </h2>
                    </div>

                    <div className="flex gap-5">
                      <button
                        className="border-[1px] py-[2px] w-[100px] relative bottom-[-30px] h-7 border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[48%] rounded-full px-5"
                        onClick={() => {
                          if (!suspension.isSuspended) {
                            if (
                              chatBot["subscriptions"] &&
                              chatBot["_id"] &&
                              (subscribed.filter(
                                (s) => s.chatbotId === chatBot["_id"]
                              ).length !== 0 ||
                                chatBot["subscriptions"].length === 0)
                            ) {
                              setIsExpanded(true);
                              setConversationAvatar(
                                chatBot["project"]["settings"]
                                  ? chatBot["project"]["settings"][
                                      "chatbot_avatar"
                                    ]
                                  : ChatbotPlaceholder
                              );
                              setIsCitationVisible(
                                chatBot["isCitationsViewable"]
                              );
                              setChatbotId(chatBot["_id"]);
                              setVoiceId(chatBot["voice"].id);
                              setProjectId(chatBot["project"]["id"]);
                            } else {
                              setChatbotId(chatBot["_id"]);
                              setSubscriptions(chatBot["subscriptions"]);
                              setIsSubscriptionsExpanded(true);
                            }
                          } else notifyWarn("Account has been suspended");
                        }}
                      >
                        {chatBot["subscriptions"] &&
                        chatBot["subscriptions"].length > 0 &&
                        subscribed.filter((s) => s.chatbotId === chatBot["_id"])
                          .length === 0 ? (
                          <h1 className="text-[10px] w-full">Subscribe</h1>
                        ) : (
                          <h1 className="text-[10px] w-full">Let's Talk</h1>
                        )}
                      </button>

                      {chatBot["email"] && chatBot["email"] != "" ? (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${chatBot["email"]}`}
                          className="relative bottom-[-35px]"
                        >
                          <CiMail />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ),
          }
        : { id: "", name: "", categories: [], content: <></> }
    );
  };
  const chatbotData: {
    name: string;
    categories: string[];
    content: React.ReactNode;
  }[] = chatBots ? populateData() : [];
  const displayedChatbots = chatbotData.map((chatbot) => {
    if (
      (chatbot.name.toLowerCase().includes(searchText.toLowerCase()) ||
        searchText === "") &&
      (selectedCategory === "Featured" ||
        chatbot.categories.includes(selectedCategory))
    )
      return chatbot.content;
  });

  useEffect(() => {
    if (chatBots) {
      const categ: string[] = [];
      chatBots.forEach((chatBot: any) => {
        for (let i = 0; i < chatBot["tags"].length; i++) {
          if (!categ.includes(chatBot["tags"][i]))
            categ.push(chatBot["tags"][i]);
        }
      });
      setCategories(categ);
    }
  }, [chatBots]);

  return (
    <section className="">
      <header className="text-white sm:flex lg:mx-28 justify-between">
        <div className="sm:flex grid gap-5">
          <input
            placeholder="Search"
            type="text"
            className="rounded-full border-[1px] bg-transparent focus:border-[#8756DF] px-8 py-3 sm:py-0"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>

        <div className="mt-5 sm:mt-0 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-full py-2 px-5">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent px-5 z-10 relative"
          >
            <option
              key="default-option"
              value="Featured"
              className="bg-[#6354b8]"
            >
              Featured
            </option>
            {categories.map((category, index) => (
              <option
                key={`option-${index}`}
                className="bg-[#6354b8]"
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </header>

      <article className="grid items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-20 text-white">
        {displayedChatbots ? displayedChatbots : <></>}
      </article>

      {projectId && voiceId ? (
        <Chatbot
          avatar={conversationAvatar}
          projectId={projectId}
          chatbotId={chatbotId}
          isCitationVisible={isCitationVisible}
          voiceId={voiceId}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      ) : (
        <></>
      )}

      <Subscriptions
        chatbotId={chatbotId}
        subscriptions={subscriptions}
        isExpanded={isSubscriptionsExpanded}
        setIsExpanded={setIsSubscriptionsExpanded}
      />

      <div className="w-full relative flex justify-center items-center mt-16">
        <img
          src={GetInTouch}
          alt=""
          className="sm:block hidden absolute mt-16"
        />
        <div className="flex justify-between sm:w-[1200px]">
          <h1 className="text-white text-lg md:text-4xl sm:block hidden z-20 font-semibold mt-16">
            Get an AI chatbot of your own
          </h1>
          <a href="/contact-us">
            <img
              src={GetInTouchBtn}
              alt=""
              className="relative right-0 sm:right-7 top-[45%] w-[300px] hover:scale-105 transition-all duration-500 ease-in-out "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;
