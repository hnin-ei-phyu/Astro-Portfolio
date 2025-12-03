import React, { useState, useEffect } from 'react'
import { Sun, Moon } from "lucide-react"

const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(() => {
        // Initial state determination for SSR/Hydration safety
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("theme")
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            return savedTheme === "dark" || (!savedTheme && prefersDark)
        }
        return false // Default for server side or initial render
    })

    // EFFECT 1: Sync local state to the DOM/localStorage
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDark]) // Runs only when isDark state changes

    // EFFECT 2 (Optional but Recommended): Listen to OS changes while running
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handler = (e) => {
            // Only update if no explicit theme is saved in localStorage
            if (!localStorage.getItem("theme")) {
                setIsDark(e.matches)
            }
        }
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])


    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <button
          onClick={toggleTheme}
          // The utility classes here look correct
          className="fixed top-12 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200/30 dark:border-gray-700/30 hover:scale-110 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-indigo-400 animate-twinkle" />
          ) : (
            <Sun className="w-5 h-5 text-amber-500" />
          )}
        </button>
    )
}

export default ThemeSwitcher