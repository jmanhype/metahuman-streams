const Hero = () => {
  return (
    <section className="flex place-content-center mt-28 h-[350px] bg-[url('assets/morphline.png')] bg-[50%_0%]">
      <h1 className="text-5xl sm:text-7xl text-white m-5 relative lg:left-[17%] lg:top-[70px] z-10 font-semibold lg:w-1/2">
        Dashboard
      </h1>

      <div className="absolute right-[35%] shadow-[0px_300px_300px_150px_rgba(174,77,198,0.65),150px_150px_300px_150px_rgba(7,43,170,0.65)]" />
    </section>
  );
};

export default Hero;
