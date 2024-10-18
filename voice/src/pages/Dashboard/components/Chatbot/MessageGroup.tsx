import { useEffect, useState } from "react";
import ChatbotPlaceholder from "../../assets/chatbot_icon.png";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import axios from "axios";
import { BASE_URL } from "../../../../constants";
import { MdContentCopy } from "react-icons/md";

const MessageGroup = ({
  index,
  projectId,
  query,
  response,
  avatar,
  citations,
  isCitationVisible,
}: {
  index: number;
  projectId: string;
  query: string;
  response: string;
  audioBase64: string | undefined;
  avatar: string | undefined;
  voiceId: string;
  citations: string[];
  isCitationVisible: boolean;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [urlCitations, setUrlCitations] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  const fetchCitations = async () => {
    for (let citation in citations) {
      const response = await axios.get(
        `${BASE_URL}/chatbot/citations?citationId=${citations[citation]}&projectId=${projectId}`
      );

      if (response.data.statusCode === 200) {
        const url = response.data.url;
        if (!urlCitations.includes(url))
          setUrlCitations([...urlCitations, response.data.url]);
      }
    }
  };

  useEffect(() => {
    fetchCitations();
  }, []);

  return (
    <div key={index} className="overflow-auto">
      <span key={`user-query-${index}`} className="flex justify-between">
        <p />
        <span className="w-[60%]">
          <p className="p-3 bg-[#8756DF] text-white rounded-xl m-5 sm:w-max float-right">
            {query}
          </p>
        </span>
      </span>

      <div
        key={`open-ai-response-${index}`}
        className="p-3 bg-white text-black rounded-xl m-5 w-[80%]"
      >
        <span className="flex justify-between px-3">
          <img
            src={avatar ?? ChatbotPlaceholder}
            alt=""
            className="rounded-full h-5 w-5 mt-3 mb-5"
          />

          <span className="flex justify-items-end gap-2 smgap-5 items-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(response);
                setIsCopied(true);
              }}
            >
              <p
                className={`transition-all duration-1000 ease-in-out text-[#8756DF] ${
                  isCopied ? "block" : "hidden"
                }`}
              >
                Copied
              </p>

              <MdContentCopy
                className={`transition-all duration-1000 ease-in-out ${
                  isCopied ? "hidden" : "block"
                }`}
                color="#8756DF"
                size={20}
              />
            </button>
          </span>
        </span>

        {response
          .split("\n")
          .map((res, index) => (
            <span key={`res-${index}`} className="mb-5 block">
              {res.split(" ").map((phrase, phraseIndex) =>
                phrase.startsWith("https://") ? (
                  <a
                    key={`link-${phraseIndex}`}
                    href={phrase}
                    className="underline text-blue-700"
                  >
                    {" "}
                    {phrase}
                  </a>
                ) : (
                  <span key={`phrase-${phraseIndex}`}>{" " + phrase}</span>
                )
              )}
            </span>
          ))}

        <div className="flex flex-wrap gap-5 p-3">
          {isCitationVisible && urlCitations.length > 0 ? (
            urlCitations.map((url, index) => (
              <a
                key={`citation-${index}`}
                href={url}
                className="rounded-full bg-gray-200 p-1 text-gray-700"
              >
                <HiOutlineInformationCircle size={25} />
              </a>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageGroup;
