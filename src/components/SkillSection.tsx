import React, { useState } from 'react'
import SkillChip from './SkillChip'
import { Code, Heart, Palette, Wrench } from 'lucide-react'

const skillCategories = {
  frontend: {
    icon: <Code className="w-4 h-4" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"]
  },
  backend: {
    icon: <Wrench className="w-4 h-4" />,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB"]
  },
  design: {
    icon: <Palette className="w-4 h-4" />,
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing"]
  },
  soft: {
    icon: <Heart className="w-4 h-4" />,
    skills: ["Communication", "Problem Solving", "Adaptability", "Collaboration", "Empathy"]
  }
}

const SkillSection = () => {

    const [activeTab, setActiveTab] = useState<keyof typeof skillCategories>("frontend");

  return (
     <section id='skills' className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl">⚙️</span>
            <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          </div>
          <p className="text-muted-foreground">
            My versatile toolkit — reflecting my Gemini moon's adaptability
          </p>
        </div>

        {/* Tab Navigation - Gemini style */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {Object.entries(skillCategories).map(([key, { icon }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof skillCategories)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? "bg-gradient-to-r from-yellow-100 to-cyan-100 dark:from-yellow-900/40 dark:to-cyan-900/40 shadow-lg scale-105"
                  : "bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80"
              }`}
            >
              {icon}
              <span className="text-gray-700 dark:text-gray-200 capitalize">{key}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={skill}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="animate-fadeIn"
            >
              <SkillChip name={skill} style="gemini" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
