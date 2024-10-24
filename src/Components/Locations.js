const Locations = ()=>{
    return (
        <div className=" pt-32 pl-40 bg-locationsColor">
            <h1 className="font-PPFragment text-3xl font-semibold flex items-start pb-10">LOCATIONS</h1>
            <p className="font-PPMori text-2xl h-32 w-1/2 text-left">
            Our sustainable apartment-hotels feature fully equipped kitchens and a full hotel experience,
            giving you the space to live and the service to clean up after. Reception, gym and food goodies? 
            We got those too.
            </p>
            <div className="text-left h-60 w-60">
                <ul className="text-sm font-light">
                    <li className="pt-12">
                        ALL LOCATIONS
                    </li>
                    <li className="pt-4">
                        AMSTERDAM
                    </li>
                    <li className="pt-4">
                        LONDON
                    </li>
                    <li className="pt-4">
                        DUBLIN
                    </li>
                    <li className="pt-4">
                        LISBON
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Locations;