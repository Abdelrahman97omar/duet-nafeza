import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-07.png";
import backimage from "../assets/ui/Nafeza app-16.png";
import sound from "../assets/sound/Q4.mp3";
import Timer_layout from "./timer-provider";

const Q1 = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/Questions");
  };
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
    audio.onended = () => {
      navigate("/thankyou");
    };
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <Timer_layout>
      <div dir="rtl" className="relative w-full h-screen">
        <img
          src={bg}
          alt="hero"
          className="object-cover object-center bg-no-repeat"
        />
        <button className="absolute top-[57%] right-[40%]">
          <img src={backimage} alt="my image" onClick={back} />
        </button>
      </div>
    </Timer_layout>
  );
};

export default Q1;
