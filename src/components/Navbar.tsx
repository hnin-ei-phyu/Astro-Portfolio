import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 py-4 px-6 backdrop-blur-md dark:bg-gray-900/70 border-b border-gray-200/30 dark:border-gray-700/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl group-hover:animate-float transition-transform shadow-lg"><img src="/public/sign.png" alt="" /></span>
          <span className="font-medium text-foreground">Portfolio</span>
        </a>

        {/* Hamburger (Mobile) */}
        <button 
          className="md:hidden text-2xl text-gray-800 dark:text-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖️" : "☰"}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 ">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 space-y-4 px-2 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavLinks mobile />
      </div>
    </nav>
  );
};

export default Navbar;

/* Reusable Navigation Links */
const NavLinks = ({ mobile = false }) => (
  <div className={`flex flex-col ${mobile ? "" : "flex-row gap-6"}`}>
    <a href="#about" className="nav-item flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">🌸 About</a>
    <a href="#skills" className="nav-item flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">🛠️ Skills</a>
    <a href="#projects" className="nav-item flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">🗂️ Projects</a>
    <a href="#journey" className="nav-item flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">🌱 Journey</a>
    <a href="#contact" className="nav-item flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">📬 Contact</a>
  </div>
);
