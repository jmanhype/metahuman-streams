import Header from "../../components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Workings from "./components/Workings";
import Utilities from "./components/Utilities";
import Features from "./components/Features";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Workings />
      <Utilities />
      <Features />
      <Footer />
    </main>
  );
};

export default LandingPage;
