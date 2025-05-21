
import React from 'react';
import { cn } from '@/lib/utils';

interface NotebookProps {
  children: React.ReactNode;
  className?: string;
}

const Notebook: React.FC<NotebookProps> = ({ children, className }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div 
        className={cn(
          "notebook-paper bg-paper rounded-lg shadow-lg p-8 border border-paperLine",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Notebook;
