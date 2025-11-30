import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Sparkle } from 'lucide-react'



const HeroSection = () => {

    const [displayedText, setDisplayedText] = useState("")
    const fullText = "Hello, I'm a creative developer who is also into astrology ✨"

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 50)

        return () => clearInterval(timer)
    }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.hero_img} 
          alt="Zodiac background" 
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 dark:from-gray-900/60 dark:via-gray-900/40 dark:to-gray-900/80" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8 animate-fadeIn">
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 shadow-xl mb-6 animate-float backdrop-blur-sm">
                <Sparkle className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            
            <h1 className="text-gray-800 dark:text-gray-100 mb-6 drop-shadow-lg">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Libra Sun · Gemini Moon · Cancer Rising
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12 drop-shadow-md">
              I blend elegant design with dynamic functionality, creating digital experiences 
              that are both beautiful and meaningful. My work is guided by balance, curiosity, 
              and emotional intelligence.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Side - Girl Image */}
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30 dark:from-pink-800/20 dark:via-purple-800/20 dark:to-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src={assets.girl_img} 
                alt="Creative developer" 
                className="relative z-10 w-full max-w-lg lg:max-w-xl animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
