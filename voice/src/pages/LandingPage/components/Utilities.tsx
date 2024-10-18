import ServiceContent from "../assets/service_content.png";
import BrandAmbassador from "../assets/brand_ambassador.png";
import LearningAssistant from "../assets/learning_assistant.png";
import DigitalTwin from "../assets/digital_twin.png";
import CustomerSupport from "../assets/customer_support.png";

const Utilities = () => {
  return (
    <section className="grid justify-items-center text-white">
      <header className="font-semibold text-3xl md:text-5xl my-16 sm:ml-16">
        U T I L I T I E S
      </header>

      <div className="flex flex-wrap w-[60%] sm:w-[80%] gap-24 items-center justify-center">
        <div className="sm:w-[25%] grid justify-items-center gap-3">
          <img src={ServiceContent} alt="" />
          <h1 className="text-3xl my-1 text-center">Content-as-a-Service</h1>
          <h2 className="text-[17px] opacity-50 text-center">
            Empower viewers to gain valuable insights from your content at the
            right time, in the right way.
          </h2>
        </div>

        <div className="sm:w-[25%] grid justify-items-center gap-3">
          <img src={BrandAmbassador} alt="" />
          <h1 className="text-3xl my-1 text-center">Brand Ambassador</h1>
          <h2 className="text-md opacity-50 text-center">
            Let A.I represent you around the world and improve brand advocacy
          </h2>
        </div>

        <div className="sm:w-[25%] grid justify-items-center gap-3">
          <img src={LearningAssistant} alt="" />
          <h1 className="text-3xl my-1 text-center">Learning Assistant</h1>
          <h2 className="text-md opacity-50 text-center">
            Enable personalized learning for your students.
          </h2>
        </div>

        <div className="sm:w-[25%] grid justify-items-center gap-3">
          <img src={DigitalTwin} alt="" />
          <h1 className="text-3xl my-1 text-center">Digital Twin</h1>
          <h2 className="text-md opacity-50 text-center">
            Replicate your character/Personality through A.I
          </h2>
        </div>

        <div className="sm:w-[25%] grid justify-items-center gap-3">
          <img src={CustomerSupport} alt="" />
          <h1 className="text-3xl my-1 text-center">Customer Support</h1>
          <h2 className="text-md opacity-50 text-center">
            Resolve queries promptly and enhance customer satisfaction
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Utilities;
