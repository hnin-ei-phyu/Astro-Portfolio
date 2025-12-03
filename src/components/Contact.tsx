import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-12 shadow-2xl backdrop-blur-sm border border-white/40 dark:border-gray-700/40">
          <div className="text-center mb-8">
            <h2 className="text-gray-800 dark:text-gray-100 mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I'd love to hear from you! Whether you want to collaborate on a project, 
              discuss design, or just chat about the cosmos — reach out.
            </p>
          </div>

          <div className="flex gap-6 justify-center flex-wrap mb-8">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span className="text-gray-700 dark:text-gray-200">Email</span>
            </a>
            
            <a
              href="https://github.com/hnin-ei-phyu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/hnin-ei-phyu-029647254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-200">LinkedIn</span>
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Twitter className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-gray-700 dark:text-gray-200">Twitter</span>
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              ✨ Crafted with cosmic intention ✨
            </p>
          </div>

          {/* Scroll to Top Button */}
          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
