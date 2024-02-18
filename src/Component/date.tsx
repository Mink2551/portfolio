import React, { useState, useEffect } from 'react';
import './../App.css';
import Name from './Name';

const date = () => {
    const [showLogo, setShowLogo] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [displayText, setDisplayText] = useState('V');
  const [textColorClass, setTextColorClass] = useState('white-text');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimated(true); 
    }, 450); 

    const timer2 = setTimeout(() => {
      setShowLogo(false);
    }, 7000); 

    const timer3 = setTimeout(() => {
      setDisplayText('Ve'); 
      setTextColorClass('white-text');
    }, 2000); 

    const timer4 = setTimeout(() => {
      setDisplayText('Ver'); 
      setTextColorClass('white-text');
    }, 2100); 

    const timer5 = setTimeout(() => {
      setDisplayText('Vers'); 
      setTextColorClass('white-text');
    }, 2200); 

    const timer6 = setTimeout(() => {
      setDisplayText('Versi');
      setTextColorClass('white-text');
    }, 2300); 

    const timer7 = setTimeout(() => {
      setDisplayText('Versio'); 
      setTextColorClass('white-text');
    }, 2400); 

    const timer8 = setTimeout(() => {
      setDisplayText('Version'); 
      setTextColorClass('white-text');
    }, 2500); 

    const timer9 = setTimeout(() => {
      setDisplayText('Version 1'); 
      setTextColorClass('white-text');
    }, 2600); 

    const timer10 = setTimeout(() => {
      setDisplayText('Version 1 Y'); 
      setTextColorClass('white-text');
    }, 2700); 

    const timer11 = setTimeout(() => {
      setDisplayText('Version 1 Ye'); 
      setTextColorClass('white-text');
    }, 2800); 
    const timer12 = setTimeout(() => {
      setDisplayText('Version 1 Yea'); 
      setTextColorClass('white-text');
    }, 2900); 
    const timer13 = setTimeout(() => {
      setDisplayText('Version 1 Year'); 
      setTextColorClass('white-text');
    }, 3000); 
    const timer14 = setTimeout(() => {
      setDisplayText('Version 1 Year 2'); 
      setTextColorClass('white-text');
    }, 3100); 
    const timer15 = setTimeout(() => {
      setDisplayText('Version 1 Year 20'); 
      setTextColorClass('white-text');
    }, 3200); 
    const timer16 = setTimeout(() => {
      setDisplayText('Version 1 Year 202'); 
      setTextColorClass('white-text');
    }, 3300); 
    const timer17 = setTimeout(() => {
      setDisplayText('Version 1 Year 2024'); 
      setTextColorClass('white-text');
    }, 3400); 
    const timer18 = setTimeout(() => {
      setDisplayText('P '); 
      setTextColorClass('white-text');
    }, 4500);
    const timer19 = setTimeout(() => {
      setDisplayText('Pe '); 
      setTextColorClass('white-text');
    }, 4600);
    const timer20 = setTimeout(() => {
      setDisplayText('Pre '); 
      setTextColorClass('white-text');
    }, 4700);
    const timer21 = setTimeout(() => {
      setDisplayText('Pres'); 
      setTextColorClass('white-text');
    }, 4800);
    const timer22 = setTimeout(() => {
      setDisplayText('Prese '); 
      setTextColorClass('white-text');
    }, 4900);
    const timer23 = setTimeout(() => {
      setDisplayText('Presen '); 
      setTextColorClass('white-text');
    }, 5000);
    const timer24 = setTimeout(() => {
      setDisplayText('Present '); 
      setTextColorClass('white-text');
    }, 5100);
    const timer25 = setTimeout(() => {
      setDisplayText('Present '); 
      setTextColorClass('white-text');
    }, 5200);
    const timer26 = setTimeout(() => {
      setDisplayText('Presente '); 
      setTextColorClass('white-text');
    }, 5300);
    const timer27 = setTimeout(() => {
      setDisplayText('Presented '); 
      setTextColorClass('white-text');
    }, 5400);
    const timer28 = setTimeout(() => {
      setDisplayText('Presented B'); 
      setTextColorClass('white-text');
    }, 5500);
    const timer29 = setTimeout(() => {
      setDisplayText('Presented By'); 
      setTextColorClass('white-text');
    }, 5600);



    

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
      clearTimeout(timer17);
      clearTimeout(timer18);
      clearTimeout(timer19);
      clearTimeout(timer20);
      clearTimeout(timer21);
      clearTimeout(timer22);
      clearTimeout(timer23);
      clearTimeout(timer24);
      clearTimeout(timer25);
      clearTimeout(timer26);
      clearTimeout(timer27);
      clearTimeout(timer28);
      clearTimeout(timer29);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ position: 'relative', minHeight: '100vh',  }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {showLogo && (
          <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '0s' : '0s'}`, transform: `scale(${isAnimated ? 1 : 0})` }}>
            <div className={`container ${isAnimated ? 'animated' : ''}`} style={{ transition: `transform 0.5s ${isAnimated ? '5.5s' : '0s'}`, transform: `scale(${isAnimated ? 0 : 1})` }}>
              <div className={`circle2 ${isAnimated ? 'animated' : ''} ${textColorClass}`} style={{ textAlign: 'center', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{displayText}</div>
            </div>
          </div>
        )}
      </div>
      {!showLogo && <div style={{}}><Name /></div>}
    </div>
  );
}

export default date