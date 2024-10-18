import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { SubscribedData, UserSuspensionData } from "../../types";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [chatBots, setChatBots] = useState();
  const [subscribed, setSubscribed] = useState<SubscribedData[]>([]);
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userSuspension, setUserSuspension] = useState<UserSuspensionData>({
    isSuspended: false,
    date: null,
    duration: null,
  });
  const notifyUser = (message: string) => toast(message);
  const notifyError = (message: string) => toast.error(message);
  const checkSuspended = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      `${BASE_URL}/profile/check-suspension?token=${token}`
    );

    if (response.data.statusCode === 200) {
      setUserSuspension(response.data.suspension);
      if (response.data.suspension.isSuspended) {
        const isEnded = checkSuspensionEnded(response.data.suspension);

        if (isEnded) updateSuspension();
      }
    }
  };

  const getSubscribed = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      `${BASE_URL}/profile/subscribed?token=${token}`
    );

    if (response.data.statusCode === 200) {
      const subscriptions: SubscribedData[] = response.data.subscriptions;
      const expiredSubscriptions: string[] = [];
      subscriptions.forEach((subscription) => {
        const hasEnded = checkSubscriptionEnded(subscription);

        if (hasEnded) expiredSubscriptions.push(subscription.id);
      });

      if (expiredSubscriptions.length > 0)
        removeSubscriptions(expiredSubscriptions);

      setSubscribed(
        subscriptions.filter(
          (subscription) => !expiredSubscriptions.includes(subscription.id)
        )
      );
    }
  };

  const removeSubscriptions = async (expired: string[]) => {
    const token = localStorage.getItem("access_token");
    
    axios.put(
      `${BASE_URL}/chatbot/remove-subscription`,
      { token, expired },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
  };

  const checkSubscriptionEnded = (subscription: SubscribedData) => {
    const DAY = 86400000;
    const WEEK = 604800000;
    const MONTH = 30 * DAY;
    const YEAR = 12 * MONTH;

    if (subscription.duration === "Daily") {
      const dueDate = new Date(
        Date.parse(subscription.subscribedAt ?? "") + DAY
      );

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (subscription.duration === "Weekly") {
      const dueDate = new Date(
        Date.parse(subscription.subscribedAt ?? "") + WEEK
      );

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (subscription.duration === "Monthly") {
      const dueDate = new Date(
        Date.parse(subscription.subscribedAt ?? "") + MONTH
      );

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (subscription.duration === "Yearly") {
      const dueDate = new Date(
        Date.parse(subscription.subscribedAt ?? "") + YEAR
      );

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    return false;
  };

  const checkSuspensionEnded = (suspension: UserSuspensionData) => {
    const DAY = 86400000;
    const WEEK = 604800000;
    const MONTH = 30 * DAY;
    const TWO_MONTHS = 2 * MONTH;

    if (suspension.duration === "1 day") {
      const dueDate = new Date(Date.parse(suspension.date ?? "") + DAY);

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (suspension.duration === "1 week") {
      const dueDate = new Date(Date.parse(suspension.date ?? "") + WEEK);

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (suspension.duration === "1 month") {
      const dueDate = new Date(Date.parse(suspension.date ?? "") + MONTH);

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    if (suspension.duration === "2 month") {
      const dueDate = new Date(Date.parse(suspension.date ?? "") + TWO_MONTHS);

      if (Date.now() > Date.parse(dueDate.toUTCString())) return true;
      else return false;
    }

    return false;
  };

  const updateSuspension = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.put(
      `${BASE_URL}/admin/suspend-user`,
      { token, duration: null, isSuspended: false },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.data.statusCode === 200) {
      setUserSuspension({
        isSuspended: false,
        date: null,
        duration: null,
      });
      notifyUser(response.data.message);
    }
  };

  const fetchChatBots = async () => {
    const response = await axios.get(`${BASE_URL}/chatbot/projects`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.status === 200) {
      setChatBots(response.data);
    }
  };

  useEffect(() => {
    const hasToken = Boolean(localStorage.getItem("access_token"));
    const statusCode = searchParams.get("status");

    if (statusCode) {
      statusCode !== "200"
        ? notifyError("Could not update your subscriptions.")
        : notifyUser("Subscribed to chatbot.");
    }

    if (hasToken) {
      checkSuspended();
      fetchChatBots();
      getSubscribed();
    } else navigate("/signup");
  }, []);

  return (
    <main>
      {userSuspension && userSuspension.isSuspended ? (
        <div className="h-10 bg-orange-600 w-full text-yellow-100 grid items-center justify-center fixed z-50">
          Your account has been suspended for {userSuspension.duration}
        </div>
      ) : (
        <></>
      )}

      <Header />
      <Hero />

      <Feature
        chatBots={chatBots}
        suspension={userSuspension}
        subscribed={subscribed}
      />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

export default Dashboard;
