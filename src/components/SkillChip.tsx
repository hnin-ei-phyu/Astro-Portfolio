import React, { type ReactNode } from 'react'

const styleClasses = {
    libra: "bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30 border-pink-200/50 dark:border-pink-700/50 hover:shadow-md hover:scale-105",
    gemini: "bg-gradient-to-r from-yellow-50 to-cyan-50 dark:from-yellow-900/30 dark:to-cyan-900/30 border-yellow-200/50 dark:border-yellow-700/50 hover:rotate-2 hover:scale-105",
    cancer: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-indigo-200/40 dark:hover:shadow-indigo-800/40 hover:shadow-lg"
  };

interface SkillChipProps {
  name: string;
  icon?: ReactNode;
  style?: "libra" | "gemini" | "cancer";
}

const SkillChip: React.FC<SkillChipProps> = ({ name, icon, style= "libra" }) => {
  return (
    <div 
      className={`${styleClasses[style]} inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-gray-700 dark:text-gray-200">{name}</span>
    </div>
  )
}

export default SkillChip
