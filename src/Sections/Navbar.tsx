import React, { useState, useEffect } from 'react';
import '../App.css'; // Import CSS file for styling

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;
        setIsMenuOpen(isScrollingUp || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [prevScrollPos]);


    return (
        <div className={`bg-primarybg3 flex p-5 shadow-2xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>
            <h1 className="text-2xl font-bold text-primaryP2 animate-name">Pacharapol</h1>
            <div className='sm:hidden absolute right-10'>
                <button className="sm:hidden" onClick={toggleMenu}>
                    <svg
                        className={`w-6 h-6 text-primaryP2 ${isMenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                {/* first nav */}
                <nav
                    className={`${
                        isMenuOpen ? 'block bg-primaryP1 py-10 shadow-2xl px-8 rounded-2xl absolute right-0 animate-menu' : 'hidden'
                    } sm:block absolute sm:relative my-1.5 right-5 flex items-center transition-max-height duration-300 ease-in-out`}
                    style={{ maxHeight: isMenuOpen ? '500px' : '0' }}
                >
                    <ul className="flex flex-col sm:flex-row justify-between text-sm gap-x-3 gap-y-5 cursor-pointer">
                        <div className="flex gap-x-1 font-bold">
                            <div className="text-primaryP2">01.</div>
                            <div className="text-gray-400 hover:text-primaryP2">About</div>
                        </div>
                        <div className="flex gap-x-1 font-bold">
                            <div className="text-primaryP2">02.</div>
                            <div className="text-gray-400 hover:text-primaryP2">Experience</div>
                        </div>
                        <div className="flex gap-x-1 font-bold">
                            <div className="text-primaryP2">03.</div>
                            <div className="text-gray-400 hover:text-primaryP2">Project</div>
                        </div>
                    </ul>
                </nav>
            </div>
            {/* Second nav */}
            <nav className={`hidden sm:flex ml-auto gap-x-5 animate-menu ${isMenuOpen ? 'slide-up' : ''}`}>
                <div className="flex gap-x-1 font-bold">
                    <div className="text-primaryP2">01.</div>
                    <div className="text-gray-400 hover:text-primaryP2">About</div>
                </div>
                <div className="flex gap-x-1 font-bold">
                    <div className="text-primaryP2">02.</div>
                    <div className="text-gray-400 hover:text-primaryP2">Experience</div>
                </div>
                <div className="flex gap-x-1 font-bold">
                    <div className="text-primaryP2">03.</div>
                    <div className="text-gray-400 hover:text-primaryP2">Project</div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
