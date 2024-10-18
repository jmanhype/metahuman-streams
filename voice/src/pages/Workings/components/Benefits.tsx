import Influencers from "../assets/influencers.png";
import Businesses from "../assets/businesses.png";
import Educators from "../assets/educators.png";
import { useEffect, useRef } from "react";

const Benefits = () => {
  const influencer = useRef<any>();
  const business = useRef<any>();
  const educator = useRef<any>();
  const benefits = useRef<any>();

  useEffect(() => {
    if (window.location.href.includes("educator"))
      educator.current?.scrollIntoView({ behavior: "smooth" });

    if (window.location.href.includes("influencer"))
      influencer.current?.scrollIntoView({ behavior: "smooth" });

    if (window.location.href.includes("business"))
      business.current?.scrollIntoView({ behavior: "smooth" });

    if (window.location.href.includes("benefits"))
      benefits.current?.scrollIntoView({ behavior: "smooth" });

  }, []);

  return (
    <section className="text-white grid justify-items-center relative left-[12%] w-[80%] lg:mt-14 mt-[200px]">
      <span ref={benefits} />
      <h1 className="text-5xl text-center sm:w-[40%] mb-24">Benefits to you</h1>

      <article className="grid gap-7">
        <span ref={influencer} />
        <div className="mx-6 my-10 grid justify-items-center text-center border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]">
          <img src={Influencers} alt="" className="my-3" />
          <h1 className="text-xl my-3">Influencers</h1>

          <ul>
            <li className="text-white/50 my-5">
              Deliver tailored content and responses, making users feel heard
              and valued.
            </li>
            <li className="text-white/50 my-5">
              Leverage the chatbot to promote merchandise, courses, or affiliate
              products effortlessly.
            </li>
            <li className="text-white/50 my-5">
              Enhance user experience by offering instant help and guidance,
              creating a loyal fanbase.
            </li>
          </ul>
        </div>

        <span ref={business} />
        <div className="mx-6 my-10 grid justify-items-center text-center border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]">
          <img src={Businesses} alt="" className="my-3" />
          <h1 className="text-xl my-3">Businesses</h1>

          <ul>
            <li className="text-white/50 my-5">
              The chatbot's custom persona can act as a brand ambassador
              enabling consistent representation of your brand and creating a
              lasting impression on your audience.
            </li>
            <li className="text-white/50 my-5">
              Improve customer support with 24/7 availability, resolving queries
              promptly and enhancing customer satisfaction.
            </li>
            <li className="text-white/50 my-5">
              Handle a higher volume of inquiries efficiently, without
              compromising on quality.
            </li>
            <li className="text-white/50 my-5">
              This bot can then be embedded into your website, used as LiveChat
              or integrated into your systems via APIs.
            </li>
          </ul>
        </div>

        <span ref={educator} />
        <div className="mx-6 my-10 grid justify-items-center text-center border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]">
          <img src={Educators} alt="" className="my-3" />
          <h1 className="text-xl my-3">Educators</h1>
          <ul>
            <li className="text-white/50 my-5">
              Provide instant answers to student queries, reducing response time
              and improving learning experiences.
            </li>
            <li className="text-white/50 my-5">
              Summarize assignments and course information, streamlining your
              teaching process.
            </li>
            <li className="text-white/50 my-5">
              Recommend relevant videos, resources, or courses to your students
              based on their queries.
            </li>
          </ul>
        </div>
      </article>

      <footer className="w-[70%] grid justify-items-center mt-24">
        <h1 className="text-5xl font-semibold my-8">Pricing</h1>
        <h2 className="text-[25px] text-white/50 text-center">
          Our prices vary invariably depending upon your needs. To get a
          detailed quote, please fill out the 'Contact Us' form here.
        </h2>
      </footer>
    </section>
  );
};

export default Benefits;
