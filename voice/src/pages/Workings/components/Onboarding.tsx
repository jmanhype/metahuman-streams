import Path from '../assets/path.svg';
import CatchUp from '../assets/catch_up.png';
import Connect from '../assets/connect.png';
import Deploy from '../assets/deploy.png';
import PhoneRobot from '../assets/phone_robot.png';

const Onboarding = () => {
  return (
    <section className="text-white grid justify-items-center relative left-[12%] w-[80%] lg:mt-36 mt-[250px]">
      <h1 className="text-5xl text-center sm:w-[40%] mb-24">
        Get Your Own Chatbot in No Time
      </h1>

      <div className="justify-items-center sm:flex hidden">
        <article className="grid justify-around">
          <img src={Connect} alt="" className="w-[50%]" />

          <div className="w-[60%]">
            <h1 className="text-3xl my-3">Catch Up</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              Let's catch up over coffee or Zoom to understand how exactly we
              can help you out
            </h2>
          </div>

          <img src={PhoneRobot} alt="" className="w-[50%]" />

          <div className="w-[60%]">
            <h1 className="text-3xl my-3">Deploy</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              We will compile all your content and feed it to the bot
            </h2>
          </div>
        </article>

        <div className="absolute w-full z-10">
          <div className="h-[75px] w-[75px] text-4xl relative left-[43%] top-7 items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            1
          </div>
          <div className="h-[75px] w-[75px] text-4xl relative left-[43%] top-[320px] items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            2
          </div>
          <div className="h-[75px] w-[75px] text-4xl relative left-[45%] top-[550px] items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            3
          </div>
          <div className="h-[75px] w-[75px] text-4xl relative left-[44%] top-[940px] items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            4
          </div>
        </div>
        <img src={Path} alt="" className="h-[80%] relative top-24" />

        <article className="grid justify-around relative left-24">
          <div className="w-[70%]">
            <h1 className="text-3xl my-3">Connect</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              Fill up the Contact Us form available on our website. Our
              executive will reach out to you ASAP
            </h2>
          </div>

          <img src={CatchUp} alt="" className="w-[50%]" />

          <div className="w-[60%]">
            <h1 className="text-3xl my-3">Collection</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              We'll compile all your content and feed it to the bot once we get
              your approval on the same
            </h2>
          </div>

          <img src={Deploy} alt="" className="w-[70%]" />
        </article>
      </div>

      <div className="justify-items-center grid gap-20 sm:hidden">
        <div className="grid justify-items-center">
          <img src={Connect} alt="" className="w-[50%]" />
          <div className="h-[75px] w-[75px] text-4xl my-5 items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            1
          </div>
          <div>
            <h1 className="text-3xl my-3">Connect</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              Fill up the Contact Us form available on our website. Our
              executive will reach out to you ASAP
            </h2>
          </div>
        </div>

        <div className="grid justify-items-center">
          <img src={CatchUp} alt="" className="w-[50%]" />
          <div className="h-[75px] w-[75px] text-4xl my-5 items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            2
          </div>

          <div>
            <h1 className="text-3xl my-3">Catch Up</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              Let's catch up over coffee or Zoom to understand how exactly we
              can help you out
            </h2>
          </div>
        </div>

        <div className="grid justify-items-center">
          <img src={PhoneRobot} alt="" className="w-[50%]" />
          <div className="h-[75px] w-[75px] text-4xl my-5 items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            3
          </div>
          <div>
            <h1 className="text-3xl my-3">Collection</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              We'll compile all your content and feed it to the bot once we get
              your approval on the same
            </h2>
          </div>
        </div>

        <div className="grid justify-items-center">
          <img src={Deploy} alt="" className="w-[50%]" />
          <div className="h-[75px] w-[75px] text-4xl my-5 items-center place-content-center flex border-[1px] border-[rgba(255,255,255,0.12)] bg-[#100843] rounded-full">
            4
          </div>
          <div>
            <h1 className="text-3xl my-3">Connect</h1>
            <h2 className="text-xl text-white/50 font-light text-justify">
              We will compile all your content and feed it to the bot
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Onboarding
