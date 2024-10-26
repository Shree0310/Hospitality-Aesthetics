import StoryTime1 from '../Assets/Images/StoryTime1.png'
import { useEffect, useRef, useState } from 'react';


const StoryTime =() =>{

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([Entry])=>{
                setIsVisible(Entry.isIntersecting);
            },
            {
                threshold: 0.3,
                rootMargin: '20px'
            }
        );

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        }

        return ()=>{
            if(sectionRef.current){
                observer.unobserve(sectionRef.current);
            }
        }


    
    })
    
    return (
        <div 
        ref={sectionRef}
        className="flex bg-storyColor">
            <form className='flex flex-col pl-[300px] pr-40 text-left gap-y-2 pt-52'>
                <h1 className='font-PPFragment text-3xl pb-8'>STORY TIME</h1>
                <p className='font-PPMori text-lg pb-8'>The July is where great stories begin. 
                Whether you’re staying with us or signed up to our newsletter…
                </p>
                <label className='font-light'>Name</label>
                <input 
                type='text'
                className="border-b-2 border-gray-600 focus:border-black transition-colors duration-300 outline-none px-2 py-1 w-[500px] bg-transparent"
                />
                <label className='font-light'>Email</label>
                <input 
                type='text'
                className="border-b-2 border-gray-600 focus:border-black transition-colors duration-300 outline-none px-2 py-3 w-[500px] bg-transparent"
                />
                <div className="flex h-6 items-center">
                    <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-gray-400 focus:ring-gray-900 mr-2"
                        />
                    <label htmlFor="comments" className="font-light text-gray-900 text-sm leading-6">
                      I agree to the terms & conditions.
                    </label>
                </div>
                <div className=''>
                    <button
                    type="button"
                    className="rounded-3xl bg-transparent px-2 py-3 w-36 h-12 text-sm font-light text-gray-900  border-gray-800 ring-1 ring-inset ring-gray-800 hover:bg-black hover:text-white"
                    >
                    Send me stories
                    </button> 
                </div>

            </form>
            
            <img
            src={StoryTime1}
            className={`w-[693px] h-[615px] transition-all delay-200 duration-1000 transform mr-24 pt-24
                        ${isVisible
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95' }`}/>
            

        </div>
    )
}

export default StoryTime;