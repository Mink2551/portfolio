import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"; // Import your CSS file where you define the neon-text animation
import { useState } from "react";

const Website = () => {
    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);

    return (
        <div className="mx-5 md:my-0 my-10">
            <h1 className="font-bold text-4xl hover:-translate-x-1 hover:scale-105 hover:-translate-y-1 hover:text-primaryP2 transition-all duration-500">Website</h1>
            <h1 className="font-bold text-sm mt-2 ml-1 text-gray-400">2024 Present</h1>
            <div className='text-gray-400 grid gap-y-4 mx-3 mt-4'>
                
                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>I began developing my first website on January 19, 2024, which served as 
                       <a
                            target="_blank"
                            href="https://3fahprathannmaa.vercel.app/"
                            className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredA ? 'neon-text' : ''}`}
                            onMouseEnter={() => setIsHoveredA(true)}
                            onMouseLeave={() => setIsHoveredA(false)}
                        >
                            the official website for the student presidential elections
                        </a>
                        . Initially, I focused on learning HTML and CSS, dedicating two days to grasp the basics. Subsequently, I delved into React framework and the Tailwind CSS Framework. With this newfound knowledge, I commenced building the student president's website on January 21, 2024. After five days of intensive work, I completed the initial version. Following this, I spent an additional two days resolving any bugs and fine-tuning the website, concluding on January 28, 2024. Remarkably, three days later, our victory in the election was secured.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>During that period, I was pressed for time and couldn't dedicate as much effort to learning new skills. Consequently, the website I developed wasn't as polished as I would have liked. With only 12 days before the election, I had limited time to work on the project. However, once the election concluded, I planned to allocate more time to expanding my knowledge, particularly in JavaScript. This additional learning would enable me to enhance the website further and improve its overall quality.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>After completing my responsibilities with the election website, I shifted my focus to creating a 
                       <a
                            target="_blank"
                            href="https://minkandyanisaprofile.vercel.app/"
                            className={`cursor-pointer text-primaryP2 duration-500 transition-all hover:mx-1 ${isHoveredB ? 'neon-text' : ''}`}
                            onMouseEnter={() => setIsHoveredB(true)}
                            onMouseLeave={() => setIsHoveredB(false)}
                        >
                            profile website
                            </a>
                        . Starting on February 10, 2024, I began learning techniques to improve the frontend design. Drawing from my experience with the first website, I was able to develop the second one more efficiently and effectively. Leveraging JavaScript, I incorporated additional features to enhance functionality. Despite time constraints, I dedicated myself to producing the best possible outcome given my current skill level. This profile website showcases my journey and experiences in detail.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>This project serves as a comprehensive portfolio, demonstrating my capabilities to anyone interested. I began working on it before delving into TypeScript, incorporating what I had learned thus far. Additionally, I have plans to expand my skill set by learning Node.js in the near future.</p>
                </div>

                <div className="grid md:grid-cols-[1fr_25fr] mt-2 grid-cols-[1fr_10fr] hover:bg-gray-200 hover:bg-opacity-20 rounded-xl transition-all p-2">
                       <FontAwesomeIcon icon={faAngleDoubleRight} className="m-1 animate-pulse text-primaryP2"/>
                       <p>I'm progressing rapidly in my learning journey, thanks to the guidance of an exceptional mentor. Despite being only 18 years old, he possesses extensive expertise in the field and has been instrumental in teaching me various concepts with great clarity. His instruction has made grasping the fundamentals a smooth and straightforward process for me.</p>
                </div>
            </div>
        </div>
    );
}

export default Website;
