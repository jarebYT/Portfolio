import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ color: "rgb(158, 158, 158)" }}
    >
      <span
        className={`absolute inset-0 bg-clip-text text-transparent ${disabled ? '' : 'animate-shine'}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(0,0,0,0) 40%, rgb(255, 255, 255) 50%, rgba(0,0,0,0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration,
        }}
      >
        {text}
      </span>
      {text}
    </div>
  );
};



export default ShinyText;
