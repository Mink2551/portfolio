import React from 'react';

interface CircleProgressBarProps {
  progress: number; // Progress value between 0 and 100
  color: string; // Color of the progress bar
  textColor: string; // Text color
  text: string; // Text content
  textSize: string; // Text size
  size: number; // Overall size of the progress bar
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ progress, color, textColor, text, textSize, size }) => {
  const strokeWidth = 8; // Change this value to adjust the thickness of the progress bar
  const radius = size / 2 - strokeWidth; // Adjust the radius based on the size
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={size} width={size}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize={textSize}
      >
        {text}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
