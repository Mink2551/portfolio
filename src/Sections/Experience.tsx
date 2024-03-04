import React, { useState, } from 'react';
import Videoeditor from '../Content/Videoeditor';
import SCclub from '../Content/SCclub';
import Website from '../Content/Website';

const Experience: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState('a');
  const [isVideoEditorVisible, setIsVideoEditorVisible] = useState(true);
  const [isContentBVisible, setIsContentBVisible] = useState(false);
  const [isContentCVisible, setIsContentCVisible] = useState(false);

  const handleMenuClick = (content: string) => {
    setSelectedContent(content);
    setIsVideoEditorVisible(content === 'a');
    setIsContentBVisible(content === 'b');
    setIsContentCVisible(content === 'c');
  };

  

  return (
    <div>
      <div className='my-10 hover:-translate-x-2 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500  mx-2 text-5xl font-bold flex gap-x-2 scroll-m-12' id='experience-sections'>
        <h1>-</h1>
        <h1>Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Menu Box */}
        <div className="px-2 md:p-4 md:border-r border-r-0 border-b md:border-b-0 mx-auto gap-x-5 gap-y-1 flex font-bold flex-wrap md:flex-col">
          <div
            className={`cursor-pointer p-2  hover:scale-110 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500  ${
              selectedContent === 'a' ? '-translate-y-2 scale-110 transition-all duration-500 text-primaryP2' : ''
            }`}
            onClick={() => handleMenuClick('a')}
          >
            Video editor
          </div>
          <div
            className={`cursor-pointer p-2  hover:scale-110 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500 ${
              selectedContent === 'b' ? '-translate-y-2 scale-110 transition-all duration-500 lg text-primaryP2' : ''
            }`}
            onClick={() => handleMenuClick('b')}
          >
            SC club
          </div>
          <div
            className={`cursor-pointer p-2  hover:scale-110 hover:-translate-y-2 hover:text-primaryP2 transition-all duration-500 ${
              selectedContent === 'c' ? '-translate-y-2 scale-110 transition-all duration-500 lg text-primaryP2' : ''
            }`}
            onClick={() => handleMenuClick('c')}
          >
            Website
          </div>
        </div>
        {/* Content Box */}
        <div className="md:w-3/5 mx-auto p-4">
          <div style={{ transform: isVideoEditorVisible ? "translateY(0)" : "translateY(50px)", opacity: isVideoEditorVisible ? 1 : 0, transition: "transform 0.5s ease-out, opacity 0.5s ease-out" }}>
            {selectedContent === 'a' && <Videoeditor />}
          </div>
          <div style={{ transform: isContentBVisible ? "translateY(0)" : "translateY(50px)", opacity: isContentBVisible ? 1 : 0, transition: "transform 0.5s ease-out, opacity 0.5s ease-out" }}>
            {selectedContent === 'b' && <SCclub />}
          </div>
          <div style={{ transform: isContentCVisible ? "translateY(0)" : "translateY(50px)", opacity: isContentCVisible ? 1 : 0, transition: "transform 0.5s ease-out, opacity 0.5s ease-out" }}>
            {selectedContent === 'c' && <Website />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
