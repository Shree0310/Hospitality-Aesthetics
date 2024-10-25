import Amsterdam from "../Assets/Images/Amsterdam.png";
import Dublin from "../Assets/Images/Dublin.png";
import lisbon from "../Assets/Images/lisbon.png";
import london from "../Assets/Images/london.png";

const Locations = ()=>{
    return (
        <div className="pt-32 pl-40 bg-locationsColor min-h-screen">
            <h1 className="font-PPFragment text-3xl font-semibold pb-10">LOCATIONS</h1>
            <p className="font-PPMori text-2xl h-32 max-w-2xl text-left pb-12">
            Our sustainable apartment-hotels feature fully equipped kitchens and a full hotel experience,
            giving you the space to live and the service to clean up after. Reception, gym and food goodies? 
            We got those too.
            </p>
            <div className="relative bg-locationsColor h-[600px]">
                <div className="text-left relative z-0">
                    <ul className="text-sm font-light space-y-8">
                        <li className="pt-12">ALL LOCATIONS</li>
                        <li>AMSTERDAM</li>
                        <li>LONDON</li>
                        <li>DUBLIN</li>
                        <li>LISBON</li>
                    </ul>
                </div>
                <div className="absolute top-0 right-0 left-24 flex overflow-x-auto gap-8 pt-12 whitespace-nowrap z-10">
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover ml-24" src={Amsterdam} alt="Amsterdam"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={Dublin} alt="Dublin"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={lisbon} alt="lisbon"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={london} alt="london"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={Amsterdam} alt="Amsterdam"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={Amsterdam} alt="Amsterdam"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={Amsterdam} alt="Amsterdam"/>
                    <img className="flex-shrink-0 w-[300px] h-[450px] object-cover" src={Amsterdam} alt="Amsterdam"/>
                </div>
            </div>
            
        </div>
    )
}

export default Locations;