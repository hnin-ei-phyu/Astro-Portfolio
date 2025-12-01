import React from 'react';
import AstroCard from './AstroCard'; // Import the new component

const About = () => {
    // NOTE: Changed icon values from string literals to ReactNode compatible strings for consistency
    const cards = [
        {name: "⚖️ Libra Sun", description: "I seek harmony and beauty in everything I create. Balance, elegance, and thoughtful design are at my core. I believe in creating interfaces that feel effortless and refined.", icon: "☀️", color: "libra" as const, hoverEffect: "hover:shadow-libra-pink"},
        {name: "🌜 Gemini Moon", description: "Curiosity drives me. I love learning new technologies, experimenting with interactions, and adapting quickly. My mind thrives on variety and clever solutions.", icon: "🌙", color: "gemini" as const, hoverEffect: "hover:shadow-gemini-turquoise"},
        {name: "🦀 Cancer Rising", description: "I approach the world with warmth and intuition. I create experiences that feel safe, comfortable, and emotionally resonant. User empathy guides my design decisions.", icon: "🌊", color: "cancer" as const, hoverEffect: "hover:shadow-cancer-lavender"}
    ];

  return (
    <section id='about' className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            ☀ My Cosmic Blueprint
          </h2>
          <p className="text-muted-foreground">
            Three energies that shape who I am and how I create
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Loop through the cards array and render the AstroCard component for each item */}
          {cards.map((card, index) => (
            <AstroCard 
              key={index}
              name={card.name}
              description={card.description}
              icon={card.icon}
              color={card.color}
              // Added a dynamic style to make the cards appear one after another
              hoverEffect={card.hoverEffect}
              style={{ animationDelay: `${index * 0.15}s` }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;