import Header from "../../components/Header"
import Form from "./components/Form"
import Footer from "./components/Footer"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const hasToken = Boolean(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  if (hasToken) navigate("/dashboard");
  return (
    <main>
        <Header />
        <Form />
        <Footer />
    </main>
  )
}

export default Login
