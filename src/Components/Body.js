import Locations from "./Locations";
import Stay from "./Stay";
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
            <div>
                <Stay/>
            </div>
            
        </div>
    )
}

export default Body;