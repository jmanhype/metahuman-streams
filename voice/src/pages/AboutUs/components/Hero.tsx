import RobotChip from '../assets/robot_chip.png';

const Hero = () => {
  return (
    <section className="lg:flex grid justify-center lg:justify-around mt-28 bg-[url('assets/morphline.png')] bg-[50%_0%]">
      <article className="text-white lg:w-1/2 lg:mx-32 z-10">
        <h1 className="text-3xl lg:text-7xl sm:m-5 font-semibold">
          Who We Are
        </h1>
      </article>

      <aside className="w-full lg:w-1/3 relative mt-36 lg:mt-0">
        <div className="absolute shadow-[150px_100px_300px_150px_rgba(7,43,170,0.35),270px_250px_300px_150px_rgba(174,77,198,0.35),300px_150px_300px_250px_rgba(34,17,128,0.35)]" />

        <img src={RobotChip} alt="" className="absolute z-10 w-full lg:w-[70%]" />
      </aside>
    </section>
  );
}

export default Hero
