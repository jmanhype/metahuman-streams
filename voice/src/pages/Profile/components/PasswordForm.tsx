import { useState } from "react";
import Password from "../assets/password.png";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { toast } from "react-toastify";

const PasswordForm = ({
  setIsEditing,
  setPasswordFormVisible,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [password, setPassword] = useState("");
  const notifyError = (error: string) => toast.error(error);
  const verifyProfile = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      `${BASE_URL}/profile/verify?token=${token}&password=${password}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 200) {
      setIsEditing(true);
      setPasswordFormVisible(false);
      return;
    }

    notifyError(response.data.message);
  };

  return (
    <>
      <div
        onClick={() => {
          setPasswordFormVisible(false);
        }}
        className="h-full w-full fixed top-[0px] right-[0px] z-40 bg-black opacity-30"
      />

      <section
        className={`grid justify-items-center w-[70%] sm:w-1/2 fixed left-5 sm:left-[25%] p-5 z-40 top-[10%] my-10 bg-[#2D2D2E] rounded-lg`}
      >
        <div className="flex justify-between w-full mb-10">
          <div />
          <button onClick={() => setPasswordFormVisible(false)}>
            <AiOutlineClose color="white" />
          </button>
        </div>
        <img src={Password} alt="" className="w-48" />
        <h1 className="text-xl my-5 text-white">Enter Password</h1>
        <h2 className="text-lg text-white/50">
          Before you can edit your profile, verify that you are who you say you
          are.
        </h2>
        <input
          placeholder="Password"
          value={password}
          className="bg-transparent border-2 border-gray-400 rounded-lg p-3 my-5 w-[70%] text-white"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          onClick={() => {
            verifyProfile();
          }}
          type="button"
          className={`w-56 lg:mx-6 mt-3 mb-5 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#8756DF] bg-opacity-[36%] rounded-xl px-[40px] py-[16px] text-white`}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export default PasswordForm;
