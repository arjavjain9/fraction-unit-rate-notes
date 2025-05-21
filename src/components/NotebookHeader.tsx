
import React from 'react';

interface NotebookHeaderProps {
  title: string;
  subtitle?: string;
}

const NotebookHeader: React.FC<NotebookHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-title font-bold text-ink">{title}</h1>
      {subtitle && <h2 className="text-xl font-handwritten text-noteRed mt-2">{subtitle}</h2>}
    </div>
  );
};

export default NotebookHeader;
