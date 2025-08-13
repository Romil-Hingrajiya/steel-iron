import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  className = '',
  as,
}) => {
  const Tag = as || `h${level}`;
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };
  
  const baseClasses = 'text-[#2A4734] leading-tight';
  const classes = `${baseClasses} ${sizeClasses[level]} ${className}`;
  
  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
