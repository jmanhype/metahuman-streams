import { AiOutlineClose } from "react-icons/ai";
import PhonePe from "../../assets/phonepe.png";
import GPay from "../../assets/gpay.png";
import Paytm from "../../assets/paytm.png";
import MasterCard from "../../assets/mastercard.png";
import Visa from "../../assets/visa.png";
import SubscriptionItem from "./SubscriptionItem";

const Subscriptions = ({
  chatbotId,
  subscriptions,
  isExpanded,
  setIsExpanded,
}: {
  chatbotId: string;
  subscriptions: {
    id: string;
    name: string;
    duration: string;
    price: number;
  }[];
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 bg-black/50 z-50 ${
          isExpanded ? "grid" : "hidden"
        }`}
        onClick={() => setIsExpanded(false)}
      />
      <aside
        className={`fixed z-50 ${
          isExpanded ? "scale-[1.05]" : "scale-0"
        } transition-all duration-500 ease-in-out top-20 w-[30%] left-[37%] bg-[url('assets/chatbot_bg.png')] bg-cover border-2 border-[#8756DF]/70 rounded-xl`}
      >
        <section
          className={`m-1 rounded-xl top-0  ${
            isExpanded ? "grid content-start" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center h-20 px-5">
            <div />
            <h1 className="text-2xl text-white">Subscription List</h1>
            <button
              onClick={() => {
                setIsExpanded(false);
              }}
            >
              <AiOutlineClose color="white" />
            </button>
          </div>

          <div className="h-[63vh] w-full grid content-start overflow-auto my-3 justify-items-center">
            {subscriptions.map((subscription, index) => (
              <SubscriptionItem
                key={`subscription-${index}`}
                subscription={subscription}
                chatbotId={chatbotId}
              />
            ))}
          </div>

          <footer className="flex gap-3 px-5 my-1">
            <img src={PhonePe} alt="" className="h-6 w-7 rounded-md" />
            <img src={GPay} alt="" className="h-5" />
            <img src={Paytm} alt="" className="h-5" />
            <img src={MasterCard} alt="" className="h-5" />
            <img src={Visa} alt="" className="h-5" />
          </footer>
        </section>
      </aside>
    </>
  );
};

export default Subscriptions;
