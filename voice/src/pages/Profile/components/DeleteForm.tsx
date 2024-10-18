import { useState } from "react";
import Delete from "../assets/delete.png";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";

const DeleteForm = ({
  setDeleteFormVisible,
}: {
  setDeleteFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [deleteText, setDeleteText] = useState("");
    const navigate = useNavigate();

  const deleteProfile = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.delete(`${BASE_URL}/profile?token=${token}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.status === 200) {
      setDeleteFormVisible(false);
      localStorage.removeItem("access_token");
      localStorage.removeItem("isVerified");
      navigate('/');
    }
  };

  return (
    <>
      <div
        onClick={() => {
          setDeleteFormVisible(false);
        }}
        className="h-full w-full fixed top-[0px] right-[0px] z-40 bg-black opacity-30"
      />

      <section
        className={`grid justify-items-center w-[70%] sm:w-1/2 fixed left-5 sm:left-[25%] p-5 z-40 top-[10%] my-10 bg-[#2D2D2E] rounded-lg`}
      >
        <div className="flex justify-between w-full mb-10">
          <div />
          <button onClick={() => setDeleteFormVisible(false)}>
            <AiOutlineClose color="white" />
          </button>
        </div>
        <img src={Delete} alt="" className="w-48" />
        <h1 className="text-xl my-5 text-white">Delete Profile</h1>
        <h2 className="text-lg text-white/50">
          Sorry that you have to go. If you are sure that you want delete your
          profile, type <em>delete</em>{" "}
        </h2>
        <input
          placeholder="delete"
          className="bg-transparent border-2 border-gray-400 rounded-lg p-3 my-5 w-[70%] text-white"
          type="text"
          onChange={(event) => {
            setDeleteText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            deleteProfile();
          }}
          disabled={deleteText !== "delete"}
          type="button"
          className={`w-56 lg:mx-6 mt-3 mb-5 border-[1px] border-[rgba(255,255,255,0.12)] ${
            deleteText !== "delete" ? "bg-[#972626]" : "bg-[#e83b3b]"
          }  bg-opacity-[36%] rounded-xl px-[40px] py-[16px] text-white`}
        >
          Delete
        </button>
      </section>
    </>
  );
};

export default DeleteForm;
