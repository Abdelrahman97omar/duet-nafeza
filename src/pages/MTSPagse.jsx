import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-02.png";
import video from "../assets/MTS.mp4";

const MTSPagse = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <button
        onClick={() => navigate("/")}
        className="w-[400px] h-[100px] opacity-0 absolute bg-red-500 bottom-0  right-[20%] z-20"
      >
        back home
      </button>
      <img
        src={bg}
        alt="hero"
        className="object-cover object-center bg-no-repeat"
      />

      <div>
        <video
          onEnded={() => {
            navigate("/thankyou");
          }}
          src={video}
          autoPlay
          playsInline
          className="absolute top-[29%]    z-10 w-screen max-h-[80%]  "
        />
      </div>
    </div>
  );
};

export default MTSPagse;
