import React, { useState, useEffect } from "react";
import Header from "../Sections/Header";
import Navbar from "../Sections/Navbar";
import "../App.css"; // Import CSS file for styling
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from "../Sections/Body";

const Content = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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
              <div className={` sm:flex flex-col items-centertransition-opacity duration-500 `}>
                  <div className='flex sticky top-44 flex-col gap-10 text-xl '>
                      <a target="blank" href="https://github.com/Mink2551"><FontAwesomeIcon className="hover:text-primaryP2 hover:-translate-y-1 duration-300 text-white" icon={faGithub}/></a>
                      <a target="blank" href="https://www.instagram.com/zeaek_/"><FontAwesomeIcon className="hover:text-primaryP2 hover:-translate-y-1 duration-300 text-white" icon={faInstagram}/></a>
                      <a target="blank" href="https://www.facebook.com/mink.ponka/?locale=th_TH"><FontAwesomeIcon className="hover:text-primaryP2 hover:-translate-y-1 duration-300 text-white" icon={faFacebook}/></a>
                  </div>
              </div>
      
              {/* Header content */}
              <div>
                  <Header />   
                  <Body/>    
                  <div className="pb-96"></div>  
                  <div className="pb-96"></div>  
                  <div className="pb-96"></div>  
                  <div className="pb-96"></div>  
              </div>
         
              {/* Name */}
              <div>
                 <div className={` sm:flex flex-col sticky top-3/4 transition-opacity duration-500 `}>
                     <a target="blank" href="https://minkandyanisaprofile.vercel.app/">
                       <div className='flex  rotate-90 text-xl gap-2 hover:text-primaryP2 hover:-translate-y-1 duration-300 text-white'>
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
