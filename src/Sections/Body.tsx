import React, { useEffect, useState } from 'react';
import Catminkcatya from "../../public/Catminkya.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Body = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);

    useEffect(() => {
        // Delay the animation to make sure component is mounted before applying animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        // Clear the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`lg:w-2/3 mx-auto grid gap-y-4 my-56 ${isVisible ? 'animate-slide-up' : ''}`}>
                <div className='text-5xl font-bold scroll-m-10 hover:-translate-x-2 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500 ' id='about-sections'>
                    - About.
                </div>

                <div className='grid xl:grid-cols-[60%_40%]'>
                    <div className='text-gray-400 grid gap-y-4 mx-3'>
                        <p>Hello, my name is Pacharapol, but you can call me Mink, which is my nickname. Computers are my passion; it's what I love to do in my free time. Currently, 
                            <a 
                        target='blank' 
                        href="https://minkandyanisaprofile.vercel.app/" 
                        className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredA ? 'neon-text' : ''}`}
                        onMouseEnter={() => setIsHoveredA(true)}
                        onMouseLeave={() => setIsHoveredA(false)}
                        >
                            I am 15 years old, born on 03/24/2008
                        </a>
                        , and I am in grade 10, about to finish in one week.</p>
                        <p>In terms of my coding skills, I began exploring programming nearly a month ago. I've been experimenting with various languages and frameworks, including HTML, CSS, JavaScript, and TypeScript, as well as frameworks like ReactJS and Next.js, to name a few.</p>
                        <p>Here are a few technologies I've used it before:</p>
                        <div className='grid grid-cols-2'>
                            <div>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>React.Js</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Tailwind CSS</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Next.Js</p>

                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>JavaScript</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>TypeScript</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>CSS</p>


                            </div>

                        </div>

                        <p>In terms of software, I've utilized a wide range of programs for basic tasks, and extensively employed Adobe software for school projects. In particular, 
                            <a 
                        target='blank' 
                        href="https://www.facebook.com/sc.satitpm.official?locale=th_TH" 
                        className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredB ? 'neon-text' : ''}`}
                        onMouseEnter={() => setIsHoveredB(true)}
                        onMouseLeave={() => setIsHoveredB(false)}
                        >
                            for my club work
                        </a>
                        , approximately 90% of my editing is done using Lightroom for photo editing, while about 10% involves Premiere Pro for editing videos related to various events.</p>
                        <p>Here are a few technologies I use the most:</p>
                        <div className='grid grid-cols-2'>
                            <div>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>After Effect</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Premiere pro</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Photoshop</p>

                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Lightroom</p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Visual studio </p>
                                <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Excel</p>


                            </div>

                        </div>
                    </div>

                    <div>
                        <img className="rounded-3xl scale-90 grid shadow-2xl" src={Catminkcatya} alt="" />
                    </div>

                </div>
        </div>
    );
}

export default Body;
