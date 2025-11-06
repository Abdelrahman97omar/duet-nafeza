import { useNavigate } from "react-router";
// import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
// import bg from "../assets/ui/Nafeza app-04.png";
import Thankyouimage from "../assets/ui/Nafeza app-08.png";
import sound from "../assets/sound/Thank you.mp3";

const Thankyou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div dir="rtl" className="relative w-full h-screen">
      <img
        src={Thankyouimage}
        alt="hero"
        className="object-cover object-center bg-no-repeat"
      />
    </div>
  );
};

export default Thankyou;
