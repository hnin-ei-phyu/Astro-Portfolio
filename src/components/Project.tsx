import React from 'react'
import { assets } from '../assets/assets';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Astro Design System",
    description: "A comprehensive design system inspired by celestial aesthetics, featuring reusable components with smooth animations and cosmic gradients.",
    image: assets.pj1_img,
    tags: ["React", "Tailwind", "TypeScript"],
    link: 'https://github.com/hnin-ei-phyu/HostelRent'
  },
  {
    title: "Online Hospital Booking Website",
    description: "A dual-theme chat application with adaptive layouts and real-time message animations. Features light/dark modes that transform the entire experience.",
    image: assets.pj2_img,
    tags: ["NodeJS/Express", "React", "Mongodb"],
    link: 'https://github.com/hnin-ei-phyu/HKcareFrontend'
  },
  {
    title: "E-commerce Platform",
    description: "A personal portfolio website with emotional storytelling, timeline visualization, and interactive cosmic elements that respond to user interaction.",
    image: assets.pj3_img,
    tags: ["PHP", "Laravel", "MySQL"],
    link: 'https://github.com/hnin-ei-phyu/E-commerce'
  }
];


const Project = () => {
  return (
    
    <section id='projects' className='py-2- relative z-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              📦 Projects
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Work that tells a story — crafted with care and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            projects.map((project, index) => (
              <div
                key={project.title}
                style={{ animationDelay: `${index * 0.1}s`}}
              >
                <ProjectCard {...project} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
    
  )
}

export default Project
