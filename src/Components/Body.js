import Locations from "./Locations";
import VideoPlayer from "./VideoPlayer";

const Body = ()=>{
    return (
        <div>
            <div>
                <VideoPlayer/>
            </div>
            <div className="bg-locationsColor">
                <Locations/>
            </div>
            
        </div>
    )
}

export default Body;