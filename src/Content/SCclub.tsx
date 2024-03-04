import React, { useState } from 'react';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; // Import your CSS file where you define the neon-text animation

const SCclub = () => {
    const [isHoveredA, setIsHoveredA] = useState(false);

    return (
        <div className="mx-5 md:my-0 my-10">
            <h1 className="font-bold text-4xl hover:-translate-x-1 hover:scale-105 hover:-translate-y-1 hover:text-primaryP2 transition-all duration-500">SC club</h1>
            <h1 className="font-bold text-sm mt-2 ml-1 text-gray-400">2023 - 2024 Present</h1>
            <div className='text-gray-400 grid gap-y-4 mx-3 mt-4'>
                <div className="grid md:grid-cols-[1fr_25fr] grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                    <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2" />
                    <p className="">
                        During my time in grade 10, I was involved in the
                        <a
                            target="_blank"
                            href="https://www.facebook.com/sc.satitpm.official?locale=th_TH"
                            className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredA ? 'neon-text' : ''}`}
                            onMouseEnter={() => setIsHoveredA(true)}
                            onMouseLeave={() => setIsHoveredA(false)}
                        >
                             Satit Communication Club
                        </a>
                        , which focuses on news, media, and related activities. This club comprises five departments, and I was part of the technical department. In this role, I handled various technical tasks such as video editing, photo editing, and monitor control, among other responsibilities.
                    </p>
                </div>
                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>My initial role at the SC Club was as a photo editor. I was tasked with editing photos for the photography department, which typically provided me with 200 to 300 pictures per person, with each job involving 2 to 3 individuals. While the task itself was relatively straightforward, I encountered challenges such as dealing with blurry images captured by the photographers. Despite these hurdles, the end result often comprised excellent photos, albeit requiring meticulous editing to address any issues.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>In my second role, I took on video editing responsibilities, particularly for interview videos. These videos typically ran for about 3 to 4 minutes each and were produced specifically for significant events hosted by my school.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>Additionally, for larger projects such as music videos (MV) or short films, I took on the role of the primary video editor. Together with my team in the technical department, we collaborated to bring these projects to life.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>For my third role, I was responsible for controlling the monitor near the stage and ensuring that the content was streamed to all the TV monitors in the hall.</p>
                </div>
                
                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>This SC club has been a significant part of my school experience, and I have a deep appreciation for it. I am fully committed to remaining involved with this club until I complete grade 12.</p>
                </div>
            </div>
        </div>
    );
}

export default SCclub;
