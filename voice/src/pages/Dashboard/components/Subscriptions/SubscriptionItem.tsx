import { useState } from "react";
import { BASE_URL } from "../../../../constants";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const SubscriptionItem = ({
  chatbotId,
  subscription,
}: {
  chatbotId: string;
  subscription: {
    id: string;
    name: string;
    duration: string;
    price: number;
  };
}) => {
  const [isSending, setIsSending] = useState(false);
  const [id, setId] = useState("");
  const initiateSubscription = async (packageId: string, amount: number) => {
    const token = localStorage.getItem("access_token");
    const response = await axios.post(
      `${BASE_URL}/chatbot/subscribe`,
      {
        amount,
        chatbotId,
        packageId,
        token,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    setIsSending(false);
    if (response.data.statusCode === 200) {
      window.location.replace(response.data.url);
    }
  };

  return (
    <div className="text-white w-[90%] my-[3px] h-14 flex justify-between items-center bg-white/30 px-5 py-1 rounded-lg">
      <div className="grid items-center">
        <h1>{subscription.name}</h1>
        <h2>{subscription.duration}</h2>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-[#a698d1]">₹ {subscription.price}</h1>
        {!isSending ? (
          <button
            disabled={isSending && id != subscription.id}
            onClick={() => {
              setId(subscription.id);
              setIsSending(true);
              initiateSubscription(subscription.id, subscription.price);
            }}
            className="text-[#7757e1] rounded-full p-3"
          >
            Subscribe
          </button>
        ) : (
          <div className="m-3">
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
        )}
      </div>
    </div>
  );
};

export default SubscriptionItem;
