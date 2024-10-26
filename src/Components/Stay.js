import { useEffect, useRef, useState } from 'react';
import Stay1 from '../Assets/Images/Stay1.png';
import Stay2 from '../Assets/Images/Stay2.png';
import Stay3 from '../Assets/Images/Stay3.png';
import Stay4 from '../Assets/Images/Stay4.png'

const Stay = () => {
    //A state variable to set when the component items are visible
    const [isVisible, setIsVisible] = useState(false);

    //To get the reference of the section container
    const sectionRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([Entry]) =>{
                //When section comes in view
                setIsVisible(Entry.isIntersecting);
            },
            {
                //section will be visible when it is 20% visible
                threshold: 0.1, 
                //Adds a margin to trigger slightly before the section comes to view
                rootMargin: "20px"
            }
        );

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        }

        //Cleanup observer on component unmount
        return () =>{
            if(sectionRef.current){
                observer.unobserve(sectionRef.current);
            }
        }

        return () =>observer.disconnect();
    }, [])
    return (
        <div 
        ref={sectionRef}
        className={`bg-stayColor pl-24 transition-all duration-1000 transform
                    ${isVisible
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-20'}`} >
            <div className={`flex gap-16 duration-1000 delay-300 transform
                            ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-20'}`}>
                <img
                 src={Stay1}
                 loading='lazy'
                 className={`h-[436px] w-[436px] object-cover transition-all duration-1000 delay-200 transform
                             ${isVisible
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'}`}/>
                 <img
                 src={Stay2}
                 loading='lazy'
                 className={`h-[436px] w-[436px] object-cover transition-all duration-1000 delay-200 transform
                            ${isVisible
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'}`}/>
                 <img
                 src={Stay3}
                 loading='lazy'
                 className={`h-[436px] w-[436px] object-cover transition-all duration-1000 delay-200 transform
                            ${isVisible
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'}`}/>
            </div>
            <div className={`flex flex-row pt-16 gap-16 transition-all duration-1000 delay-500 transform
                            ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-20'}`}>
                <img
                src={Stay4}
                loading='lazy'
                className={`h-[436px] w-[436px] object-cover transition-all duration-1000 delay-200 transform
                           ${isVisible
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'}`}/>
                <div className={`text-left transition-all duration-1000 delay-200 transform
                                ${isVisible
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-20'}`}>
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