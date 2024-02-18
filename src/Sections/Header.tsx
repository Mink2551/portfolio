import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay the animation to make sure component is mounted before applying animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        // Clear the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`lg:w-1/2 lg:ml-20 grid gap-y-4 my-56 ${isVisible ? 'animate-slide-up' : ''}`}>
            <h1 className="text-md font-bold text-primaryP2">Hello, my name is </h1>
            <h1 className="text-5xl font-bold flex">Pacharapol pimpa.</h1>
            <h1 className="text-xl text-gray-300 font-bold flex">I am a student at Wat Phrasrimahadhat Secondary Demonstration School, Phranakhon Rajabhat University.</h1>
            <h1 className=" text-gray-600 font-bold flex">I am a website developer, editor, and photo editor, and this portfolio will showcase my capabilities. Here, you will find examples of my experience and projects, demonstrating the range of my skills.</h1>
        </div>
    );
}

export default Header;
