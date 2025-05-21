
import React from 'react';
import { cn } from '@/lib/utils';

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
}

const Highlighter: React.FC<HighlighterProps> = ({ children, className }) => {
  return (
    <span className={cn("highlight bg-highlight px-1 py-0.5 rounded", className)}>
      {children}
    </span>
  );
};

export default Highlighter;
