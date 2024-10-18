import { useState } from "react";

//Icons
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

const FAQItem = ({ title, content }: { title: string; content: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex justify-between text-md lg:text-lg mx-5">
      <div className="w-2/3 my-3">
        <h1 className="my-3">{title}</h1>
        <h2
          className={`${
            isExpanded ? "block" : "hidden"
          } text-white/50 transition-all duration-700 ease-in-out`}
        >
          {content}
        </h2>
      </div>

      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <MdOutlineRemoveCircleOutline color="#7F56D9" />
        ) : (
          <MdAddCircleOutline color="#7F56D9" />
        )}
      </button>
    </div>
  );
};

export default FAQItem;
