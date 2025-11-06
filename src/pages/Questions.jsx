import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-03.png";
import Q1 from "../assets/ui/Nafeza app-12.png";
import Q2 from "../assets/ui/Nafeza app-13.png";
import Q3 from "../assets/ui/Nafeza app-14.png";
import Q4 from "../assets/ui/Nafeza app-15.png";
import Timer_layout from "./timer-provider";
import btnSound from "../assets/sound/button_sound.mp3";

const Questions = () => {
  const navigate = useNavigate();

  const handleQ1 = () => {
    navigate("/Q1");
  };
  const handleQ2 = () => {
    navigate("/Q2");
  };
  const handleQ3 = () => {
    navigate("/Q3");
  };
  const handleQ4 = () => {
    navigate("/Q4");
  };

  return (
    <Timer_layout>
      <div dir="rtl" className="relative w-full h-screen overflow-hidden">
        <button
          onClick={() => navigate("/")}
          className="w-[400px] h-[100px] absolute bg-red-500 bottom-0  right-[20%] z-20"
        >
          back home
        </button>
        <img
          src={bg}
          alt="hero"
          className="object-cover object-center bg-no-repeat"
        />
        <div className="absolute flex flex-col justify-center items-center top-[20%] left-[8%] ">
          <button>
            <img src={Q1} alt="my image" onClick={handleQ1} />
          </button>
          <button>
            <img src={Q2} alt="my image" onClick={handleQ2} />
          </button>
          <button>
            <img src={Q3} alt="my image" onClick={handleQ3} />
          </button>
          <button>
            <img src={Q4} alt="my image" onClick={handleQ4} />
          </button>
        </div>
      </div>
    </Timer_layout>
  );
};

export default Questions;
