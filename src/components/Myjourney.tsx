import React from 'react'
import JourneyItem from './JourneyItem'
import { Code, Palette, Rocket, Sparkles } from 'lucide-react'

const Myjourney = () => {
  return (
    <section id='journey' className="py-20 relative z-10">
      
      <div className="max-w-4xl mx-auto px-6">
         <div className="text-center mb-16">
          <h2  className="text-2xl font-bold text-foreground mb-4">
            🚀 My Journey
          </h2>
          <p className="text-muted-foreground">
            The path that led me to where I am today
          </p>
        </div>

        <div className="space-y-4">
          <JourneyItem
            year="2020"
            title="The Spark 🌊"
            body="Discovered my passion for creating beautiful digital experiences. Started learning HTML, CSS, and the fundamentals of design."
            icon={<Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
          />

          <JourneyItem
             year="2021"
            title="Learning & Growing 🧠"
            body="Dove deep into React and modern JavaScript. Built countless side projects and experimented with different design styles and interactions."
            icon={<Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
          />

          <JourneyItem
            year="2022"
            title="Finding My Style 🎨"
            body="Developed my signature aesthetic - blending cosmic themes with minimalist design. Started incorporating astrology into my creative process."
            icon={<Palette className="w-5 h-5 text-pink-600 dark:text-pink-400" />}
          />

          <JourneyItem
            year="2023-2025"
            title="Building & Evolving 🚀"
            body="Creating meaningful projects that combine technical excellence with emotional resonance. Continuously refining my craft and embracing new technologies."
            icon={<Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
          />
          
        </div>

      </div>

    </section>
  )
}

export default Myjourney
