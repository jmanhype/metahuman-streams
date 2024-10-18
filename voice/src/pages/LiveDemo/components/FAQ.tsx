import { LuSettings } from "react-icons/lu";
import InfluencerIcon from "../assets/influencer_icon.png";
import { BiSupport } from "react-icons/bi";
import { TbSettings2 } from "react-icons/tb";
import FAQItem from "./FAQItem";
import Influencer from "../assets/Influencer.png";
import Business from "../assets/Business.png";
import Educator from "../assets/Educator.png";
import { useEffect, useRef, useState } from "react";

const FAQ = () => {
  const faq = useRef<any>();
  const [tabIndex, setTabIndex] = useState(0);
  const brand = localStorage.getItem('brand');

  const data = [
    [
      {
        title: `What is ${
          brand ?? "One2One AI"
        } and what services does it offer?`,
        content: `${
          brand ?? "One2One AI"
        } offers A.I powered chatbot development services to its clients from multiple domains. It provides a way to build and host, ChatGPT-like A.I chatbots using custom datasets.`,
      },
      {
        title: "What is the cost of building a chatbot?",
        content:
          "The charges for building a chatbot vary invariably depending upon your requirements. Please get in touch with us to get a detailed quote.",
      },
      {
        title: "Which business operations can I use the chatbot for?",
        content:
          "The chatbot can be used for various operations like customer engagement, lead generation, as a sales assistant, marketing, etc.",
      },
      {
        title: "How do I get my own chatbot built?",
        content:
          "To get your own chatbot built and integrated on the platform of your choice, please fill out the contact form present at the bottom of this page.",
      },
    ],
    [
      {
        title: `What support does ${
          brand ?? "One2One AI"
        } provide to its customers and users?`,
        content:
          "We have a dedicated customer support team working 24/7 to cater to your needs. Additionally, we have a chatbot of ourselves which you can try asking your questions to.",
      },
      {
        title: "How do I connect with the support team?",
        content:
          "You can reach out to the support team by sending an email on support@one2one.ai",
      },
      {
        title: `Is my data/content safe with ${brand ?? "One2One AI"}?`,
        content:
          "We use the industry standard encryption algorithm to secure your data i.e 256-bit AES encryption.",
      },
      {
        title:
          "Is my data or chats used to training other A.I models or chatgpt itself?",
        content:
          "No. Your data is stored in complete isolation. Our chatbots are fully self-contained and don't share any data even within themselves.",
      },
      {
        title: "Can I remove/delete data uploaded earlier to the chatbot?",
        content:
          "Of course you can but not by yourself. To remove data indexed by the chatbot, you need to raise a query to the support team.",
      },
    ],
    [
      {
        title: "Which file formats are supported by the chatbot?",
        content:
          "Our chatbots support multiple data formats like documents (word/PDF/excel), media (audio/video), compressed files (zip/archive).",
      },
      {
        title: "How do I limit the access of users to my chatbot?",
        content:
          "By default, your chatbot is private, which means only authorized users can query your chatbot. You can choose to make it public or keep it private whenever needed.",
      },
      {
        title: "How long does it take for the chatbot to ingest data?",
        content:
          "The chatbot takes around 2 mins to ingest a 10 mins video content. Ingesting documents is a lot quicker than that.",
      },
      {
        title: "Does the chatbot remember previous conversations?",
        content:
          "Yes. All your conversations are saved as chat history. You can access them anytime you like.",
      },
    ],
    [
      {
        title: `How does ${
          brand ?? "One2One AI"
        } use my data to build a chatbot?`,
        content:
          "Your data is compiled together into what we call an embedded database to create a knowledge base for the chatbot.",
      },
      {
        title: `How do I provide my content/data to ${brand ?? "One2One AI"}?`,
        content:
          "You can share your content/data through google drive or any other convenient way possible.",
      },
      {
        title: "Can I add content to the chatbot on-the-go?",
        content:
          "Yes you can. You just need to upload your content/data on the google drive and it will be automatically fed to the chatbot.",
      },
      {
        title: "How do I update my billing information?",
        content:
          "Go to your Profile > Payments > Choose a method of payment > Add required details. You will be billed on a monthly basis for your chatbot.",
      },
      {
        title: "What are the payment options available for my subscription?",
        content:
          "Currently, we have two options available for payment. You can make the payments through UPI or using a credit/debit card.",
      },
    ],
  ];

  useEffect(() => {
    if (window.location.href.includes("faq"))
      faq.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  return (
    <section className="text-white mt-36 lg:mx-20 ml-5">
      <span ref={faq}/>
      <header className="lg:flex justify-between items-center">
        <h1 className="text-4xl lg:text-6xl w-[50%] font-semibold">
          Frequently asked questions
        </h1>
        <h2 className="text-lg text-white/50 mt-16 lg:mr-24 ">
          Everything you need to know about the product and billing.
        </h2>
      </header>

      <article className="lg:flex lg:gap-14">
        <nav className="grid gap-5 lg:mx-5 mt-14">
          <button
            onClick={() => {
              setTabIndex(0);
            }}
            className={`text-2xl flex items-center ${
              tabIndex === 0
                ? "bg-gradient-to-t from-[#120F47] to-[#0C082C]"
                : ""
            } rounded-xl gap-3 pl-[25px] lg:pr-[80px] py-[20px]`}
          >
            <LuSettings />
            General
          </button>
          <button
            onClick={() => {
              setTabIndex(1);
            }}
            className={`text-2xl flex items-center ${
              tabIndex === 1
                ? "bg-gradient-to-t from-[#120F47] to-[#0C082C]"
                : ""
            } rounded-xl gap-3 pl-[25px] lg:pr-[80px] py-[20px]`}
          >
            <BiSupport />
            Support
          </button>
          <button
            onClick={() => {
              setTabIndex(2);
            }}
            className={`text-2xl flex items-center ${
              tabIndex === 2
                ? "bg-gradient-to-t from-[#120F47] to-[#0C082C]"
                : ""
            } rounded-xl gap-3 pl-[25px] lg:pr-[80px] py-[20px]`}
          >
            <TbSettings2 />
            Chat Bot
          </button>
          <button
            onClick={() => {
              setTabIndex(3);
            }}
            className={`text-2xl flex items-center ${
              tabIndex === 3
                ? "bg-gradient-to-t from-[#120F47] to-[#0C082C]"
                : ""
            } rounded-xl gap-3 pl-[25px] lg:pr-[80px] py-[20px]`}
          >
            <img src={InfluencerIcon} alt="" />
            Influencer
          </button>
        </nav>

        <aside className="mt-14 lg:w-[60%] w-full lg:absolute lg:left-[25%]">
          {data[tabIndex].map((value: { title: string; content: string }) => (
            <FAQItem title={value.title} content={value.content} />
          ))}
        </aside>
      </article>

      <footer className="my-24 lg:mt-48 lg:flex grid">
        <div className="grid gap-5 place-content-start lg:mt-16 my-16 relative lg:left-16">
          <h1 className="text-5xl font-semibold">Engage.</h1>
          <h1 className="text-5xl font-semibold">Interact.</h1>
          <h1 className="text-5xl font-semibold">Excel.</h1>
        </div>

        <article className="lg:flex grid gap-10">
          <img src={Influencer} alt="" />

          <img src={Business} alt="" />

          <img src={Educator} alt="" />
        </article>
      </footer>
    </section>
  );
};

export default FAQ;
