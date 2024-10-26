const Footer = ()=>{
    return (
    <div className=" flex flex-row justify-center py-24 gap-48 bg-navColor">
        <div className="w-[324px] text-left ">
            <p className="font-light text-lg pb-8">
                Bringing the human touch to the way people travel. One apartment-hotel at a time.
            </p>
            <div className="">
                <button className="bg-white text-black px-8 py-4 rounded-full z-10">
                        Book Your Stay
                </button>
            </div>
        </div>
        
        <ul className="text-left text-light text-lg gap-y-2">
            <li>About</li>
            <li>Locations</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Instagram</li>
        </ul>
        <ul className="text-left text-light text-lg gap-y-2">
            <li>Careers</li>
            <li>Sustainibility</li>
            <li>Booking terms</li>
            <li>Hotel development</li>
            <li>Events</li>
        </ul>

    </div>
    )
}
export default Footer;