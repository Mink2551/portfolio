import React, { useState } from 'react';

import { faAngleDoubleRight, faArrowRight,  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Videoeditor = () => {
    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);

    return(
        <div className="mx-5 md:my-0 my-10">
            <h1 className="font-bold text-4xl hover:-translate-x-1 hover:scale-105 hover:-translate-y-1 hover:text-primaryP2 transition-all duration-500">Video Editor</h1>
            <h1 className="font-bold text-sm mt-2 ml-1 text-gray-400">March 2018 - 2024 Present</h1>
            <div className='text-gray-400 grid gap-y-4 mx-3 mt-4'>
                <div className="grid md:grid-cols-[1fr_25fr] grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                   <p className="">I've been editing videos for quite some time now, initially starting with Sony Vegas for YouTube content. As I delved into more complex projects, such as creating montages for games like Valorant, I began using After Effects. For more refined work, such as music videos or short films, I transitioned to Premiere Pro.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                      <p>I relied on my Sony Vegas skills from 2018 to 2022, primarily for basic video editing tasks. While it may not have been the most advanced tool, it served me well as a newbie during that period.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                   <p>When I conceived the idea for a Valorant Game Montage project, I took the initiative to learn After Effects and embarked on my first project. Although I didn't share it on social media, I feel a sense of pride in my accomplishment.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                   <p className="">This project takes around 5 to 6 hours to complete, and I incorporate 2 to 3 plugins to enhance its effects. It marks 
                        <a 
                        href="https://www.youtube.com/watch?v=ZZCd_CHwRF8" 
                        target="blank" 
                        className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredA ? 'neon-text' : ''}`}
                        onMouseEnter={() => setIsHoveredA(true)}
                        onMouseLeave={() => setIsHoveredA(false)}
                        >
                          my first project
                          </a> 
                          created with After Effectshis project was completed approximately 8 to 9 months ago.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                   <p>I transitioned to using Premiere Pro when tasked with creating music videos (MV) and short films. As I familiarized myself with the basics of Premiere Pro, I collaborated with my team to bring our projects to life.</p>
                </div>
                
                <div className="grid md:grid-cols-[1fr_25fr] grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                      <p>I hold the roles of both director and main editor for the music video (MV), as well as for the short film. This MV project was featured on the Thai PBS Facebook page.
                        <a 
                        href="https://www.facebook.com/watch/live/?ref=search&v=1034573221060252&locale=th_TH" 
                        target="blank" 
                        className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredB ? 'neon-text' : ''}`}
                        onMouseEnter={() => setIsHoveredB(true)}
                        onMouseLeave={() => setIsHoveredB(false)}
                        >
                            this is my MV project.
                            </a>
                            My video starts at 3:09:00. I hope you all enjoy watching the projects!</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                   <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                   <p>That's just a glimpse of my video editing skills. I'm committed to continuous improvement and ongoing training to further enhance my abilities.</p>
                </div>

                <div className="gap-y-2 grid mx-auto grid-cols-2">
                    <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Youtube Video</p>
                    <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Game Montage</p>
                    <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Music Video</p>
                    <p><FontAwesomeIcon icon={faArrowRight} className='mr-2 text-primaryP2 animate-pulse'/>Short Movie</p>
                 </div>

            </div>
        </div>
    )
}

export default Videoeditor