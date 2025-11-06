import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-02.png";
import video from "../assets/Smart.mp4";

const SmartRobotpagse = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       navigate("/thankyou");
  //     }, 75000);
  //   }, [navigate]);
  return (
    <div className="relative w-full h-screen">
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

export default SmartRobotpagse;
