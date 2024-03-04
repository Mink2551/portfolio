import { useState } from "react";
import CircleProgressBar from "../Content/CircleProgressBar";

const Project = () => {
    const [isHoveredA, setIsHoveredA] = useState(false);
    const [isHoveredB, setIsHoveredB] = useState(false);

    return (
        <div className="my-32">
            <div className='text-5xl md:flex grid gap-4 mx-auto max-w-3xl font-bold scroll-m-10' id='project-sections'>
                <h1 className="hover:-translate-x-2 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500">- Project</h1>
                <p className="text-2xl md:mt-4 text-gray-300">Somethings I built before</p>
            </div>

            <div className="grid lg:grid-cols-2 my-20 max-w-5xl mx-auto gap-10 ">
                  <div className="relative p-40 rounded-2xl bg-cover bg-center flex justify-center items-center" style={{backgroundImage: 'url(/Gilbert333.jpg)'}} 
                    onMouseEnter={() => setIsHoveredA(true)} 
                    onMouseLeave={() => setIsHoveredA(false)}
                    >
                      <div className={`absolute inset-0 bg-black bg-opacity-70 ${isHoveredA ? 'fade-opacity' : ''} rounded-2xl`}></div>
                      <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-2xl m-2">
                          <div className="flex justify-center items-center h-full">
                             <h1 className={`font-bold text-3xl ${isHoveredA ? 'fade-opacity2' : 'fade-opacity3'}`}>Student President</h1>
                          </div>
                          <div className={`absolute top-5 left-5 right-5 ${isHoveredA ? '' : 'fade-opacity4'}`}>
                             <h1 className={`text-4xl font-bold neon-text2 ${isHoveredA ? 'fade-opacity3' : 'fade-opacity2'}`}>Website</h1>
                             <h1 className={`text-xl font-medium mt-5 mx-2 ${isHoveredA ? 'fade-opacity3' : 'fade-opacity2'}`}>This project was built on January 21, 2024.</h1>
                             <h1 className={`text-lg font-bold mt-2 mx-3 ${isHoveredA ? 'fade-opacity3' : 'fade-opacity2'}`}>This project using ..</h1>
                             <div className={`mt-5 justify-center gap-x-10 flex ${isHoveredA ? 'fade-opacity3' : 'fade-opacity2'}`}>
                                 <CircleProgressBar progress={98.8} color="#EEF300" textColor="#D0D503" text="JavaScript 98.8%" textSize="8px" size={100} />
                                 <CircleProgressBar progress={1.2} color="#56E100" textColor="#51D002" text="Other 1.2%" textSize="12px" size={100} />
                             </div>
                          </div>
                      </div>
                      {/* Content */}
                  </div>
                  <div className="relative p-40 rounded-2xl bg-cover bg-center" style={{ backgroundImage: 'url(/Catminkya.jpg)' }}
                    onMouseEnter={() => setIsHoveredB(true)}
                    onMouseLeave={() => setIsHoveredB(false)}
                    >
                      <div className={`absolute inset-0 bg-black bg-opacity-70 ${isHoveredB ? 'fade-opacity' : ''} rounded-2xl`}></div>
                      <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-2xl m-2">
                               <div className="flex justify-center items-center h-full">
                                  <h1 className={`font-bold text-3xl ${isHoveredB ? 'fade-opacity2' : 'fade-opacity3'}`}>M.Y. Profile</h1>
                               </div>
                          <div className={`absolute top-5 left-5 right-5 ${isHoveredB ? '' : 'fade-opacity4'}`}>
                             <h1 className={`text-4xl font-bold neon-text2 ${isHoveredB ? 'fade-opacity3' : 'fade-opacity2'}`}>M.Y. Profile</h1>
                             <h1 className={`text-xl font-medium mt-5 mx-2 ${isHoveredB ? 'fade-opacity3' : 'fade-opacity2'}`}>This project was built on February 10, 2024.</h1>
                             <h1 className={`text-lg font-bold mt-2 mx-3 ${isHoveredB ? 'fade-opacity3' : 'fade-opacity2'}`}>This project using ..</h1>
                             <div className={`mt-5 justify-center gap-x-10 flex ${isHoveredB ? 'fade-opacity3' : 'fade-opacity2'}`}>
                                 <CircleProgressBar progress={93.9} color="#EEF300" textColor="#D0D503" text="JavaScript 93.9%" textSize="8px" size={100} />
                                 <CircleProgressBar progress={1.8} color="red" textColor="red" text="HTML 1.8%" textSize="12px" size={100} />
                                 <CircleProgressBar progress={4.3} color="pink" textColor="pink" text="CSS 4.3%" textSize="12px" size={100} />
                             </div>
                          </div>
                      </div>
                      {/* Content */}
                  </div>
            </div>
            
        </div>
    )
}

export default Project;
