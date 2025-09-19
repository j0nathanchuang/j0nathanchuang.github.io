'use client';

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  speed = 100,
  delay = 500,
  className = '',
  onComplete,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (!isComplete) {
          setIsComplete(true);
          onComplete?.();
        }
      },
      currentIndex === 0 ? delay : speed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}
