import Stay1 from '../Assets/Images/Stay1.png';
import Stay2 from '../Assets/Images/Stay2.png';
import Stay3 from '../Assets/Images/Stay3.png';
import Stay4 from '../Assets/Images/Stay4.png'

const Stay = () => {
    return (
        <div className="bg-stayColor pl-24" >
            <div className="flex gap-16">
                <img
                 src={Stay1}
                 className='h-[436px] w-[436px]'/>
                 <img
                 src={Stay2}
                 className='h-[436px] w-[436px]'/>
                 <img
                 src={Stay3}
                 className='h-[278px] w-[436px]'/>
            </div>
            <div className='flex flex-row pt-16 gap-16'>
                <img
                src={Stay4}
                className='h-[500px] w-[417px]'/>
                <div className='text-left'>
                    <h1 className='pb-8'> Stay with Aesthetics</h1>
                    <p className='text-left text-[40px] font-PPFragment pr-44'>
                        We design our experience around how people truly live. The result? Style that soothes and relaxes. 
                        Space to rest up, go out,work, work out. Seamlessly transition between your worlds. 
                        You’re in the right place.
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default Stay;