import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CosmicBackground from './components/CosmicBackground'
import ThemeSwitcher from './components/ThemeSwitcher'
import HeroSection from './components/HeroSection'
import About from './components/About'
import SkillSection from './components/SkillSection'
import Project from './components/Project'
import Myjourney from './components/Myjourney'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='bg-background text-foreground min-h-screen'>
       <HeroSection />
      <div className=' mx-4 sm:mx-[10%]'>
        <ToastContainer />
        <ThemeSwitcher />
        <CosmicBackground />
        <Navbar />
        <Footer />
        <About />
        <SkillSection />
        <Project />
        <Myjourney />
        <Contact />
      </div>
    </div>
  )
}

export default App
