import Header from "../../components/Header"
import Footer from "./components/Footer"
import ContactUs from "../../components/ContactUs"

const ContactUsPage = () => {
  return (
    <main>
      <Header />
      <div className="bg-[url('assets/morphline.png')] bg-[50%_0%]">
        <h1 className="text-7xl text-white font-bold lg:w-[40%] text-center relative top-24 lg:left-[30%] mb-48">
          Get in touch
        </h1>
        <div className="shadow-[-600px_150px_280px_150px_rgba(7,43,170,0.2),0px_150px_280px_150px_rgba(90,0,161,0.7)]" />
        <ContactUs
          cssProps="grid justify-items-center mt-24 bg-cover w-[85%] lg:w-[90%] bg-gradient-to-r from-[#0C0735]/70 to-[#0C0735] lg:mx-24"
          inputCssProps="w-[100%] lg:w-[90%] relative"
          textAreaCssProps="w-[50%] sm:w-[80%] relative"
        />
      </div>

      <Footer />
    </main>
  );
}

export default ContactUsPage
