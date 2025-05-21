
import React from 'react';
import { cn } from '@/lib/utils';

interface NotebookSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const NotebookSection: React.FC<NotebookSectionProps> = ({ title, children, className }) => {
  return (
    <div className={cn("mb-6", className)}>
      {title && (
        <h3 className="text-xl font-handwritten font-bold text-noteRed mb-2 flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-noteRed mr-2"></span>
          {title}
        </h3>
      )}
      <div className="font-handwritten text-ink leading-relaxed pl-5">
        {children}
      </div>
    </div>
  );
};

export default NotebookSection;
