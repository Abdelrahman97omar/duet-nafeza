import { useNavigate } from "react-router";
import { useRosConnection } from "./connection-provider";
import { useEffect } from "react";
import bg from "../assets/ui/Nafeza app-02.png";
import video from "../assets/MTS.mp4";


const MTSPagse =()=>{
        const navigate = useNavigate();
        useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/thankyou");
        }, 110000); 
    }, [navigate]);
        return (
        <div dir="rtl" className="relative w-full h-screen">
            <img src={bg} alt="hero" className="object-cover object-center bg-no-repeat"/>
            <div>
            <video
                 src={video}
                 autoPlay
                 playsInline
                 className="relative z-10 w-[70%] max-h-[80%] rounded-2xl shadow-2xl border-4 border-white"
            />
            </div>
        </div>
    )}

    export default MTSPagse
