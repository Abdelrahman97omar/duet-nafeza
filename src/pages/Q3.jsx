import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-06.png";
import backimage from "../assets/ui/Nafeza app-16.png";
import sound from "../assets/sound/Q3.mp3"



const Q1 = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/Questions");
  };
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play()
    const timeout = setTimeout(() => {
      navigate("/thankyou");
    }, 5000); 

    return () => {
      clearTimeout(timeout);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [navigate]);
  return (

          <div
            dir="rtl" className="relative w-full h-screen">
        <img
          src={bg}
          alt="hero"
          className="object-cover object-center bg-no-repeat"
        />
        <button><img src={backimage} alt="my image" onClick={back} /></button>
        </div>

  );
};

export default Q1;


