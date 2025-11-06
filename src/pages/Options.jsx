import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Timer_layout from "./timer-provider";
import bg from "../assets/ui/Nafeza app-02.png";
import smartrobotimg from "../assets/ui/Nafeza app-09.png";
import askMeImg from "../assets/ui/Nafeza app-10.png";
import MTSimg from "../assets/ui/Nafeza app-11.png";
import sound from "../assets/sound/Welcome Message.mp3";


const Options= () => {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    
    useEffect(()=>{
      audioRef.current= new Audio(sound)
      audioRef.current.play()
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

    const handleMTSClick = () => {
        // console.log("first")
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        navigate("/mtsvideo");}

        const handleAskClick = () => 
        {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            }
        navigate("/Questions");
        console.log("second")
        }
    const handleRobotClick = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
        navigate("/smartrobotvideo");
        console.log("Third")    
    }
  
return (
        <Timer_layout>
          <div dir="rtl" className="relative w-full h-screen">
          <img src={bg} alt="hero" className="object-cover object-center bg-no-repeat"/>
            {/* <div className="flex flex-col md:flex-row gap-8 mt-12"> */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8">
              <button><img src={smartrobotimg} alt="my image" onClick={handleRobotClick} /></button>
              <button><img src={askMeImg} alt="my image" onClick={handleAskClick} /></button> 
              <button><img src={MTSimg} alt="my image" onClick={handleMTSClick} /></button>
            </div>
          </div>
        </Timer_layout>
    
        );
        };

    export default Options