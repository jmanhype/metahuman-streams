import ManRobot from '../assets/man-and-robot.png';
import Radar from '../assets/radar.png';

const About = () => {
  return (
    <section className='text-white grid justify-items-center my-28'>
      <img src={ManRobot} />
      <h1 className='text-5xl lg:text-7xl text-center sm:ml-10 my-24'>LEVERAGE CONTENT THROUGH A.I.</h1>
      <img src={Radar} />
    </section>
  )
}

export default About
