import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from "react-loader-spinner";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const hasToken = Boolean(localStorage.getItem("access_token"));
    const emailVerified = Boolean(localStorage.getItem("isVerified"));

    setTimeout(()=>{
      if (hasToken && emailVerified) {
        if(localStorage.getItem("isVerified") === "true")
          navigate("/dashboard");
        else{
          localStorage.removeItem('access_token');
          localStorage.removeItem("isVerified");
          navigate("/verification");
        }
          
        return;
      }
      else navigate("/");
    }, 1000)
    
  }, []);

  return (
    <main className="bg-[url('assets/morphline.png')] h-[85vh] grid items-center justify-items-center">
      <div className="grid place-content-start justify-items-center">
        <div className="shadow-[-450px_250px_280px_170px_rgba(7,43,170,0.7),-300px_250px_280px_150px_rgba(90,0,161,0.7)]" />
        <div className="shadow-[450px_100px_280px_170px_rgba(7,43,170,0.7),230px_100px_280px_150px_rgba(90,0,161,0.7)]" />
        <Oval
          height={80}
          width={80}
          color="#8756DF"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#A37EE7"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </main>
  );
};

export default Loading;
