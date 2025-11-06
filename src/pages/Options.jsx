import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Timer_layout from "./timer-provider";
import bg from "../assets/ui/Nafeza app-02.png";
import smartrobotimg from "../assets/ui/Nafeza app-09.png";
import askMeImg from "../assets/ui/Nafeza app-10.png";
import MTSimg from "../assets/ui/Nafeza app-11.png";
import sound from "../assets/sound/Welcome Message.mp3";
import btnSound from "../assets/sound/button_sound.mp3";

const Options = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const handleMTSClick = () => {
    audioRef2.current.pause();

    setTimeout(() => {
      audioRef.current.play();
    }, 100);
    setTimeout(() => {
      navigate("/mtsvideo");
    }, 500);
  };

  const handleAskClick = () => {
    audioRef2.current.pause();

    setTimeout(() => {
      audioRef.current.play();
    }, 100);
    setTimeout(() => {
      navigate("/Questions");
    }, 500);
    console.log("second");
  };
  const handleRobotClick = () => {
    audioRef2.current.pause();
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
    setTimeout(() => {
      navigate("/smartrobotvideo");
    }, 500);
    console.log("Third");
  };
  useEffect(() => {
    audioRef2.current.play();
    return () => {
      if (!audioRef2.current) return;
      audioRef2.current.pause();

      audioRef2.current.currentTime = 0;
    };
  }, []);
  return (
    <Timer_layout>
      <audio src={sound} ref={audioRef2} />
      <audio src={btnSound} ref={audioRef} />
      <div dir="rtl" className="relative w-full h-screen">
        <img
          src={bg}
          alt="hero"
          className="object-cover object-center bg-no-repeat"
        />
        {/* <div className="flex flex-col md:flex-row gap-8 mt-12"> */}
        <div className="absolute top-[20%] left-[12%] flex flex-col md:flex-row items-center justify-center gap-8">
          <button>
            <img
              src={smartrobotimg}
              alt="my image"
              onClick={handleRobotClick}
            />
          </button>
          <button>
            <img src={askMeImg} alt="my image" onClick={handleAskClick} />
          </button>
          <button>
            <img src={MTSimg} alt="my image" onClick={handleMTSClick} />
          </button>
        </div>
      </div>
    </Timer_layout>
  );
};

export default Options;
