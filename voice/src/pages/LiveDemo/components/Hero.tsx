import Aura from '../assets/aura.png';

const Hero = () => {
  return (
    <section className="grid justify-items-center lg:mt-28 bg-[url('assets/morphline.png')] bg-[50%_0%] text-white">
      <img
        src={Aura}
        alt=""
        className="lg:absolute lg:right-[25%] right-[10%] relative top-28"
      />
      <div className="absolute shadow-[200px_400px_300px_150px_rgba(174,77,198,0.35),450px_150px_300px_150px_rgba(7,43,170,0.35)]" />
      <div className="lg:h-[450px] h-[150px]" />

      <div className="w-full grid justify-items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Ask me anything"
          className="py-[25px] px-[40px] rounded-lg w-[90%] lg:w-[60%] border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-[#020010] relative lg:left-5 z-10"
        />
      </div>
    </section>
  );
}

export default Hero
