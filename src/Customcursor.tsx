import React, { useEffect, useState } from 'react';
import './App.css'; // Import your Tailwind CSS styles

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="customCursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div className="cursorHighlight"></div>
    </div>
  );
};

export default CustomCursor;
