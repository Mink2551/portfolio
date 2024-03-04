import React, { useState, useEffect } from "react";
import Header from "../Sections/Header";
import Navbar from "../Sections/Navbar";
import "../App.css"; // Import CSS file for styling
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from "../Sections/Body";
import Experience from "../Sections/Experience";
import Project from "../Sections/Project";

const Content = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [isHoveredA, setIsHoveredA] = useState(false);
  const [isHoveredB, setIsHoveredB] = useState(false);
  const [isHoveredC, setIsHoveredC] = useState(false);
  const [isHoveredD, setIsHoveredD] = useState(false);

  useEffect(() => {
    // Set showNavbar to true after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 200); // Adjust the delay time as needed

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the social icons and name when scrolling down
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-primarybg1 to-primarybg2 relative"> {/* Add relative positioning */}
      <div className={`sticky top-0 navbar z-10 ${showNavbar ? "show" : ""}`}> {/* Ensure the navbar has higher z-index */}
        <Navbar />
      </div>

      <div className={`text-white flex flex-col relative z-1 transition-opacity duration-500`}> {/* Add relative positioning and lower z-index */}
          <div className="grid sm:grid-cols-[10%_80%_10%] mx-7 relative">
              {/* social */}
              <div className={` sm:flex flex-col duration-500 `}>
                  <div className='flex sticky top-44 flex-col gap-10 text-xl w-1/12 '>
                      <a target="blank" href="https://github.com/Mink2551"><FontAwesomeIcon className={`cursor-pointer text-white duration-500 transition-all rounded-full hover:-translate-y-1 ${isHoveredA ? 'neon-background' : ''}`}
                      onMouseEnter={() => setIsHoveredA(true)}
                      onMouseLeave={() => setIsHoveredA(false)} icon={faGithub}/></a>
                      <a target="blank" href="https://www.instagram.com/zeaek_/"><FontAwesomeIcon className={`cursor-pointer text-white duration-500 transition-all rounded-full hover:-translate-y-1 ${isHoveredB ? 'neon-background' : ''}`}
                      onMouseEnter={() => setIsHoveredB(true)}
                      onMouseLeave={() => setIsHoveredB(false)} icon={faInstagram}/></a>
                      <a target="blank" href="https://www.facebook.com/mink.ponka/?locale=th_TH"><FontAwesomeIcon className={`cursor-pointer text-white duration-500 transition-all rounded-full hover:-translate-y-1 ${isHoveredC ? 'neon-background' : ''}`}
                      onMouseEnter={() => setIsHoveredC(true)}
                      onMouseLeave={() => setIsHoveredC(false)} icon={faFacebook}/></a>
                  </div>
              </div>
      
              {/* Header content */}
              <div>
                  <Header />   
                  <Body/>    
                  <Experience/>
                  <Project/>
                  <div className="pb-96"></div>  
              </div>
         
              {/* Name */}
              <div>
                 <div className={` sm:flex flex-col sticky top-3/4 transition-opacity duration-500 `}>
                     <a target="blank" href="https://minkandyanisaprofile.vercel.app/">
                       <div className={`flex rotate-90 text-xl gap-2 cursor-pointer text-white duration-500 transition-all rounded-full hover:-translate-y-1 ${isHoveredD ? 'neon-text' : ''}`}
                      onMouseEnter={() => setIsHoveredD(true)}
                      onMouseLeave={() => setIsHoveredD(false)}>
                           <p>-</p>
                           <p>Pacharapol</p>
                           <p>Pimpa</p>
                           <p>-</p>
                       </div>
                     </a>
                 </div>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Content;
