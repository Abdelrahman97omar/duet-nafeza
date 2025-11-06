import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-07.png";
import backimage from "../assets/ui/Nafeza app-16.png";
import sound from "../assets/sound/Q4.mp3";
import Timer_layout from "./timer-provider";

const Q1 = () => {
  const navigate = useNavigate();
    const { publishTopic } = useRosConnection();

  const back = () => {
    navigate("/Questions");
  };
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
        publishTopic("/emoji", "std_msgs/Int32", {
      data: 2,
    });
    console.log("emoji 2");
    audio.onended = () => {
      navigate("/thankyou");
    };
    return () => {
           publishTopic("/emoji", "std_msgs/Int32", { data: 1 });
      console.log("emoji 1");
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <Timer_layout>
      <button
        onClick={() => navigate("/")}
        className="w-[400px] h-[100px] absolute bg-red-500 bottom-0  right-[20%] z-20"
      >
        back home
      </button> 
      <div dir="rtl" className="relative w-full h-screen overflow-hidden">
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
