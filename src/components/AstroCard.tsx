import React, { type ReactNode } from 'react';
import type { CSSProperties } from 'react';

// Define the mapping of color names to Tailwind classes using your custom variables
const colorStyles: Record<AstroCardProps['color'], string> = {
  libra: "bg-libra-pink/30 dark:bg-libra-blue/10 border-libra-pink dark:border-libra-blue",
  gemini: "bg-gemini-yellow/30 dark:bg-gemini-turquoise/10 border-gemini-yellow dark:border-gemini-turquoise",
  cancer: "bg-cancer-lavender/30 dark:bg-cancer-navy/10 border-cancer-lavender dark:border-cancer-navy",
};

interface AstroCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  color: "libra" | "gemini" | "cancer";
  hoverEffect?: string;
  style?: CSSProperties;
}

const AstroCard: React.FC<AstroCardProps> = ({ name, description, icon, color, hoverEffect }) => {
  return (
    <div 
      className={`${colorStyles[color]} ${hoverEffect || 'hover:scale-[1.03]'} rounded-2xl p-8 shadow-xl transition-all duration-300 ease-out border dark:border-opacity-40 animate-fadeIn`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl animate-float">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground dark:text-gray-100">
          {name}
        </h3>
      </div>
      <p className="text-sm text-foreground/80 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AstroCard;