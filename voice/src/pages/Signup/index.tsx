import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"

const Signup = () => {
  const hasToken = Boolean(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  if(hasToken)
    navigate('/dashboard')

  return (
    <main>
      <Header />
      <Form />
      <Footer />
    </main>
  );
}

export default Signup
