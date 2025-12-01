import React from 'react'

interface ProjectCardProps {
  title: string;
  description: string,
  image: string,
  tags: string[];
  link?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, tags, link}) => {
  return (
    <a href={link}>
         <div className="group rounded-xl overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-indigo-200/40 dark:hover:shadow-indigo-800/40 transition-all duration-300 hover:shadow-2xl border border-gray-200/30 dark:border-gray-700/30 animate-glow">
            <div className="relative overflow-hidden h-48">
                <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {description}
                </p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span 
                    key={index}
                    className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            </div>  
    </a>
  )
}

export default ProjectCard
