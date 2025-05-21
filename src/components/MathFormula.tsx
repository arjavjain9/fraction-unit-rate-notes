
import React from 'react';
import { cn } from '@/lib/utils';

interface FractionProps {
  numerator: string | number;
  denominator: string | number;
  className?: string;
}

export const Fraction: React.FC<FractionProps> = ({ numerator, denominator, className }) => {
  return (
    <span className={cn("fraction inline-block align-middle text-center", className)}>
      <span className="numerator block border-b border-ink">{numerator}</span>
      <span className="denominator block">{denominator}</span>
    </span>
  );
};

interface MathFormulaProps {
  children: React.ReactNode;
  className?: string;
}

export const MathFormula: React.FC<MathFormulaProps> = ({ children, className }) => {
  return (
    <span className={cn("math-formula bg-white/50 mx-1 font-handwritten", className)}>
      {children}
    </span>
  );
};
