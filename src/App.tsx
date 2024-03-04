import React, { useState, useEffect } from 'react';
import './App.css';
import CustomCursor from './Customcursor';
import Date from "./Component/date"

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [displayText, setDisplayText] = useState('P');
  const [textColorClass, setTextColorClass] = useState('white-text');
  

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimated(true); 
    }, 350); 

    const timer2 = setTimeout(() => {
      setShowLogo(false);
    }, 4500); 

    const timer3 = setTimeout(() => {
      setDisplayText('Po'); 
      setTextColorClass('white-text');
    }, 3000); 

    const timer4 = setTimeout(() => {
      setDisplayText('Por'); 
      setTextColorClass('white-text');
    }, 3100); 

    const timer5 = setTimeout(() => {
      setDisplayText('Port'); 
      setTextColorClass('white-text');
    }, 3200); 

    const timer6 = setTimeout(() => {
      setDisplayText('Port');
      setTextColorClass('white-text');
    }, 3300); 

    const timer7 = setTimeout(() => {
      setDisplayText('Portf'); 
      setTextColorClass('white-text');
    }, 3400); 

    const timer8 = setTimeout(() => {
      setDisplayText('Portfo'); 
      setTextColorClass('white-text');
    }, 3500); 

    const timer9 = setTimeout(() => {
      setDisplayText('Portfol'); 
      setTextColorClass('white-text');
    }, 3600); 

    const timer10 = setTimeout(() => {
      setDisplayText('Portfoli'); 
      setTextColorClass('white-text');
    }, 3700); 

    const timer11 = setTimeout(() => {
      setDisplayText('Portfolio'); 
      setTextColorClass('white-text');
    }, 3800); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
      clearTimeout(timer11);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ position: 'relative', minHeight: '100vh',  }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {showLogo && (
          <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '0s' : '0s'}`, transform: `scale(${isAnimated ? 1 : 0})` }}>
            <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '4s' : '0s'}`, transform: `scale(${isAnimated ? 0 : 1})` }}>
              <div className={`circle ${isAnimated ? 'animated' : ''} ${textColorClass}`} style={{ textAlign: 'center', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{displayText}</div>
            </div>
          </div>
        )}
      </div>
      {!showLogo && <div style={{}}><Date /></div>}
      <CustomCursor />
    </div>
  );
    
}

export default App;