import React from 'react'
import "./App.css"
import Navbar from './components/common/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import SkillSection from './components/SkillSection'
import ContactForm from './components/common/ContactForm'
import Footer from './components/common/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div id='wrapper'>
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
      <ProjectsSection />
      <SkillSection />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App