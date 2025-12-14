import { ReactNode, useEffect, useState } from 'react';

interface FlipBookProps {
  children: ReactNode;
  currentPage: number;
  direction: 'next' | 'prev' | null;
}

export default function FlipBook({ children, currentPage, direction }: FlipBookProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayPage, setDisplayPage] = useState(currentPage);

  useEffect(() => {
    if (direction) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setDisplayPage(currentPage);
        setIsFlipping(false);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setDisplayPage(currentPage);
    }
  }, [currentPage, direction]);

  return (
    <div className="relative w-full h-full perspective-[2000px]">
      <div
        className={`w-full h-full transition-all duration-700 ease-in-out transform-style-3d ${
          isFlipping && direction === 'next'
            ? 'animate-flip-next'
            : isFlipping && direction === 'prev'
            ? 'animate-flip-prev'
            : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="w-full h-full backface-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
