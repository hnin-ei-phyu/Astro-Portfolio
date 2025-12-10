import { useState } from 'react';
import type { CSSProperties } from 'react';

// Define the structure for a single star's stable data
interface Star {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
}

const CosmicBackground = () => {
    
    // 1. Calculate and store the star positions ONCE using useState initializer.
    // This is a pure operation and prevents Math.random() from running on every re-render.
    const [stars] = useState<Star[]>(() => {
        const starArray: Star[] = [];
        
        for (let i = 0; i < 20; i++) {
            starArray.push({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
            });
        }
        return starArray;
    });

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900" />
            
            {/* Floating stars */}
            {/* 2. Map over the stable 'stars' state instead of creating a new array */}
            {stars.map((star) => (
                <div
                    // Use the stable ID for the key
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                        top: star.top, // Use pre-calculated stable value
                        left: star.left, // Use pre-calculated stable value
                        animationDelay: star.animationDelay, // Use pre-calculated stable value
                        opacity: 0.3
                    } as CSSProperties}
                />
            ))}
            
            {/* Soft orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}

export default CosmicBackground