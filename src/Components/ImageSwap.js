import { useState } from "react";
import Amsterdam from "../Assets/Images/Amsterdam.png";
import Dublin from "../Assets/Images/Dublin.png";

const ImageSwap = ({defaultImage, hoverImage, alt, className=""})=>{
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        className={`relative w-[300px] h-[450px] ${className}`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
        <img
        src={defaultImage}
        alt={`${alt} - default view`}
        className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Second image (shows on hover) */}
      <img
        src={hoverImage}
        alt={`${alt} - hover view`}
        className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

        </div>
    )
}

export default ImageSwap;