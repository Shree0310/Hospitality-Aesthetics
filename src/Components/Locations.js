import Amsterdam from "../Assets/Images/Amsterdam.png";
import Dublin from "../Assets/Images/Dublin.png";
import DublinRoom from "../Assets/Images/DublinRoom.png";
import lisbon from "../Assets/Images/lisbon.png";
import london from "../Assets/Images/london.png";
import AmsterdamRoom from "../Assets/Images/AmsterdamRoom.png";
import London2 from "../Assets/Images/London2.png";
import Lisbon2 from "../Assets/Images/Lisbon2.png";
import ImageSwap from "./ImageSwap";

const Locations = ()=>{
    return (
        <div className=" pt-32 pl-40 bg-locationsColor min-h-screen">
            <h1 className="font-PPFragment text-3xl font-semibold flex items-start pb-10">LOCATIONS</h1>
            <p className="font-PPMori max-w-2xl text-2xl text-left pb-12">
            Our sustainable apartment-hotels feature fully equipped kitchens and a full hotel experience,
            giving you the space to live and the service to clean up after. Reception, gym and food goodies? 
            We got those too.
            </p>
            {/* <div className="h-[600px]"> */}
                <div className="text-left z-10 ">
                    <ul className="text-sm font-light space-y-8 w-60">
                        <li className="pt-12">ALL LOCATIONS</li>
                        <li className="">AMSTERDAM</li>
                        <li className="">LONDON</li>
                        <li className="">DUBLIN</li>
                        <li className="">LISBON</li>
                    </ul>
                </div>
                <div className="-mt-[250px] pl-24 overflow-x-auto bg-locationsColor">
                    <div className="flex gap-8 pb-8">                   
                       <ImageSwap
                        defaultImage={Amsterdam}
                        hoverImage={AmsterdamRoom}
                        alt="Amsterdam location"
                        className="flex-shrink-0 ml-24"/>

                        <ImageSwap
                        defaultImage={Dublin}
                        hoverImage={DublinRoom}
                        alt="Amsterdam location"
                        className="flex-shrink-0"/>

                        <ImageSwap
                        defaultImage={london}
                        hoverImage={London2}
                        alt="Amsterdam location"
                        className="flex-shrink-0"/>

                        <ImageSwap
                        defaultImage={lisbon}
                        hoverImage={Lisbon2}
                        alt="Amsterdam location"
                        className="flex-shrink-0"/> 

                        <ImageSwap
                        defaultImage={lisbon}
                        hoverImage={London2}
                        alt="Amsterdam location"
                        className="flex-shrink-0"/> 
                    </div>
                </div>
            {/* </div> */}
            
        </div>
    )
}

export default Locations;