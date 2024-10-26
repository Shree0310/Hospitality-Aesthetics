import LongStay1 from '../Assets/Images/LongStay1.png';
import LongStay2 from "../Assets/Images/LongStay2.png";
import LongStay3 from "../Assets/Images/LongStay3.png";
import LongStay4 from "../Assets/Images/LongStay4.png";
import LongStay5 from "../Assets/Images/LongStay5.png";
import LongStay6 from "../Assets/Images/LongStay6.png";

const LongStay = () =>{

    return (
        <div className="bg-longStayColor w-full pt-16">
            <h1 className="font-PPFragment text-3xl pb-8">STAY A LITTLE LONGER</h1>
            <p className="font-PPMori text-2xl text-center ml-[400px] mr-[400px] font-light pb-32">
            Become a true local. Your place, plus the sparkle of a hotel. Cook dinner or go out,
            host a meeting in your spacious room. Unwind in the wellness area. Your stay, your way.
            </p>
            <div className="flex flex-row overflow-x-auto pt-8 gap-8 pl-[400px]">
                <img
                className='w-[285px] h-[400px]'
                src={LongStay1}/>
                <div>
                    <p className='w-[200px] h-[400px] text-sm text-center'>
                    Extended Stay in Amsterdam? Look no further. 
                    Select from our range of premium apartment-hotels and become a true local. 
                    Giving you the space to live and the service to clean up after. 
                    Whether your visit is driven by business, home renovations, or simply a desire to experience the city, we have you covered. 
                    </p>
                </div>
                <img
                src={LongStay2}
                className='w-[600px] h-[400px]'/>
                <img/>
                <div>
                    <p className='w-[200px] h-[400px] text-sm text-end pt-[350px]'>
                    Spacious, high quality rooms with kitchens and living areas.
                    </p>
                </div>
                <img
                className='w-[266px] h-[400px] text-sm text-end'
                src={LongStay3}/>
                <p className=' text-sm pt-[350px]'>
                Treat yourself.
                </p>
                <img
                src={LongStay4}
                className='w-[266px] h-[400px] text-sm text-end'/>
                <img
                src={LongStay5}
                className='w-[266px] h-[400px] text-sm text-end'/>
                <img
                src={LongStay6}
                className='w-[266px] h-[400px] text-sm text-end'/>
                <div>
                    <p className='w-[200px] h-[400px] text-sm text-center'>
                    What day is today? Tuesday? Friday? Sunday? 
                    Hard to say for sure, but no matter what day it is, it can be turned into a spa day. 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LongStay;