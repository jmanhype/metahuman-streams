import { Link, useParams } from "react-router-dom";
import Success from './assets/success.gif';

const Status = () => {
  const { message } = useParams();

  return (
    <main className="bg-[url('assets/morphline.png')] h-[85vh] grid items-center justify-items-center">
      <div className="grid place-content-start justify-items-center">
        <div className="shadow-[-450px_250px_280px_170px_rgba(7,43,170,0.7),-300px_250px_280px_150px_rgba(90,0,161,0.7)]" />
        <div className="shadow-[450px_100px_280px_170px_rgba(7,43,170,0.7),230px_100px_280px_150px_rgba(90,0,161,0.7)]" />
        <img src={Success} alt="" className="rounded-full h-48 mt-24" />
        <h1 className="text-6xl text-white font-bold mt-12"> {message} </h1>
        <Link
          to="/login"
          className="my-10 border-[1px] border-[rgba(255,255,255,0.12)] text-white bg-[#AEA0FF] bg-opacity-[48%] rounded-full px-[50px] py-[16px]"
        >
          Login 
        </Link>
      </div>
    </main>
  );
};

export default Status;
