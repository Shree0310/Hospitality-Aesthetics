import { useEffect, useRef } from "react";
import MainVideo from "./../Assets/Videos/MainVideo.mp4"

const VideoPlayer = () =>{
    const videoRef = useRef(null);

    useEffect(()=>{
        //Play the video whenever the component mounts
        if(videoRef.current){
            const playVideo = async ()=>{
                try{
                    await videoRef.current.play();
                }
                catch(err){
                    console.log("Autoplay of the video failed because"+ err);
                }
            };
            playVideo();
        }
    })

    return (
        <div className="relative">
            <video 
                autoPlay
                muted
                playsInline
                loop 
                className="w-full"
                ref={videoRef}>
                <source src={MainVideo} type="video/mp4"/>
            </video>
            <div className="absolute  inset-0">
                <div className=" flex flex-col top-4 right-4 items-end ">
                    <div className="pt-20 pr-48">
                        <p className="text-white h-8 w-72  pb-28 text-left">
                            The Aesthetics is a series of laid-back apartment-hotels. 
                            Settle in, find focus, be yourself. Every stay has a story.
                        </p>
                    </div>
                    
                    <div className="pr-72">
                        <button className="bg-white text-black px-8 py-4 rounded-full z-10">
                                Book Your Stay
                        </button>
                    </div>
                </div>                    
                <div className="flex flex-col justify-center items-center pt-64">  
                    <h1 className="text-white text-[150px] z-10 font-normal">
                        The Aesthetics
                    </h1>               
                </div>
            </div>      
            
            
        </div>
    )
}

export default VideoPlayer;