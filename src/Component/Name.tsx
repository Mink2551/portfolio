import React, { useState, useEffect } from 'react';
import './../App.css';
import Content from './Content';

const Name = () => {
    const [showLogo, setShowLogo] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [displayText, setDisplayText] = useState('P');
  const [textColorClass, setTextColorClass] = useState('neon-text');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimated(true); 
    }, 150); 

    const timer2 = setTimeout(() => {
      setShowLogo(false);
    }, 5000); 

    const timer3 = setTimeout(() => {
      setDisplayText('Pa'); 
      setTextColorClass('neon-text');
    }, 2000); 

    const timer4 = setTimeout(() => {
      setDisplayText('Pac'); 
      setTextColorClass('neon-text');
    }, 2100); 

    const timer5 = setTimeout(() => {
      setDisplayText('Pach'); 
      setTextColorClass('neon-text');
    }, 2200); 

    const timer6 = setTimeout(() => {
      setDisplayText('Pacha');
      setTextColorClass('neon-text');
    }, 2300); 

    const timer7 = setTimeout(() => {
      setDisplayText('Pachar'); 
      setTextColorClass('neon-text');
    }, 2400); 

    const timer8 = setTimeout(() => {
      setDisplayText('Pachara'); 
      setTextColorClass('neon-text');
    }, 2500); 

    const timer9 = setTimeout(() => {
      setDisplayText('Pacharap'); 
      setTextColorClass('neon-text');
    }, 2600); 

    const timer10 = setTimeout(() => {
      setDisplayText('Pacharapo'); 
      setTextColorClass('neon-text');
    }, 2700); 

    const timer11 = setTimeout(() => {
      setDisplayText('Pacharapol'); 
      setTextColorClass('neon-text');
    }, 2800); 
    const timer12 = setTimeout(() => {
      setDisplayText('Pacharapol P'); 
      setTextColorClass('neon-text');
    }, 2900); 
    const timer13 = setTimeout(() => {
      setDisplayText('Pacharapol Pi'); 
      setTextColorClass('neon-text');
    }, 3000); 
    const timer14 = setTimeout(() => {
      setDisplayText('Pacharapol Pim'); 
      setTextColorClass('neon-text');
    }, 3100); 
    const timer15 = setTimeout(() => {
      setDisplayText('Pacharapol Pimp'); 
      setTextColorClass('neon-text');
    }, 3200); 
    const timer16 = setTimeout(() => {
      setDisplayText('Pacharapol Pimpa'); 
      setTextColorClass('neon-text');
    }, 3300); 
    



    

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
      clearTimeout(timer12);
      clearTimeout(timer13);
      clearTimeout(timer14);
      clearTimeout(timer15);
      clearTimeout(timer16);
      
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ position: 'relative', minHeight: '100vh',  }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {showLogo && (
          <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '0s' : '0s'}`, transform: `scale(${isAnimated ? 1 : 0})` }}>
            <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '4.5s' : '0s'}`, transform: `scale(${isAnimated ? 0 : 1})` }}>
              <div className={`circle2 ${isAnimated ? 'animated' : ''} ${textColorClass}`} style={{ textAlign: 'center', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{displayText}</div>
            </div>
          </div>
        )}
      </div>
      {!showLogo && <div style={{}}><Content /></div>}
    </div>
  );
}

export default Name