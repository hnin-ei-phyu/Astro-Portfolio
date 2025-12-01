import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-40 py-4 px-6 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/30 dark:border-gray-700/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:animate-float transition-transform">✨</span>
          <span className="font-medium text-gray-800 dark:text-gray-100">Portfolio</span>
        </a>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          <a 
            href="#about" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            <span>🧠</span>
            <span>About</span>
          </a>
          <a 
            href="#skills" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-600 transition-colors"
          >
            <span>🛠️</span>
            <span>Skills</span>
          </a>
          <a 
            href="#projects" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            <span>🗂️</span>
            <span>Projects</span>
          </a>
          <a 
            href="#journey" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <span>🌱</span>
            <span>Journey</span>
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <span>📬</span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>  
  )
}

export default Navbar
