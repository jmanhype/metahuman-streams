import { Oval, ThreeDots } from "react-loader-spinner";
import MessageGroup from "./MessageGroup";
import ChatbotPlaceholder from "../../assets/chatbot_icon.png";
import { ConversationData, MessageData } from "../../../../types";

const Messages = ({
  avatar,
  isSending,
  isCitationsVisible,
  messages,
  projectId,
  voiceId,
  conversation,
  conversations,
  sentPrompt,
  scrollToBottomRef,
}: {
  avatar: string | undefined;
  conversation: ConversationData | undefined;
  conversations: ConversationData[];
  isCitationsVisible: boolean;
  isSending: boolean;
  messages: MessageData[] | undefined;
  projectId: string;
  sentPrompt: string | undefined;
  scrollToBottomRef: React.MutableRefObject<any>;
  voiceId: string;
}) => {
  return (
    <article className="overflow-auto w-full h-[85%]">
      {messages ? (
        <>
          {messages.map((message, index) => (
            <MessageGroup
              isCitationVisible={isCitationsVisible}
              key={`message-${index}`}
              voiceId={voiceId}
              projectId={projectId}
              index={index}
              query={message.user_query}
              audioBase64={message.audioBase64}
              response={message.openai_response}
              avatar={avatar}
              citations={message.citations}
            />
          ))}
          <span ref={scrollToBottomRef} />
        </>
      ) : conversations && conversations.length !== 0 ? (
        <div className="h-full grid justify-center">
          {conversation ? (
            <Oval
              height={80}
              width={80}
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
            <></>
          )}
        </div>
      ) : (
        <p className="text-white">
          You have no conversations yet. Go ahead and create a new one.
        </p>
      )}

      {isSending ? (
        <div>
          <p className="p-3 bg-[#8756DF] text-white rounded-xl m-5">
            {sentPrompt}
          </p>
          <p className="p-3 w-[20%] bg-white text-black rounded-xl m-5">
            <div className="flex justify-between items-center px-3">
              <img
                src={avatar ?? ChatbotPlaceholder}
                alt=""
                className="rounded-full h-12 w-12 mt-3 mb-5"
              />

              <ThreeDots
                height="70"
                width="70"
                radius="9"
                color="#8756DF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            </div>
          </p>
          <span ref={scrollToBottomRef} />
        </div>
      ) : (
        <></>
      )}
    </article>
  );
};

export default Messages;
