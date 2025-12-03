import { Moon, Scale, WandSparkles } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    
    <footer className='relative z-10 py-12 border-t border-gray-200/30 dark:border-gray-700/30'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-2 animate-float'>
            <Scale className='w-8 h-8 text-pink-400' />
            <Moon className='w-8 h-8 text-indigo-400' />
            <WandSparkles className='w-8 h-8 text-blue-400' />
          </div>

          <div className='text-center'>
            <p className='text-gray-600 dark:text-gray-400 mb-2'>
              © 2025 . Designed with balance, built with curiosity, shared with care
            </p>
          </div>

          <div className='flex gap-2'>
            <div className='w-2 h-2 rounded-full bg-pink-400 animate-twinkle' style={{ animationDelay: '0s'}} />
            <div className='w-2 h-2 rounded-full bg-purple-400 animate-twinkle' style={{ animationDelay: '0.5s'}} />
            <div className='w-2 h-2 rounded-full bg-blue-400 animate-twinkle' style={{ animationDelay: '1s'}} />
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
