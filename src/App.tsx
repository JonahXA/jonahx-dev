import { useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Resume from './Resume'
import Sprout from './Sprout'
import MatrixCover from './MatrixCover'
import './App.css'

function App() {
  const location = useLocation()

  // Always start with the cover on a fresh load/refresh
  const [entered, setEntered] = useState(false)
  const [fading, setFading] = useState(false)

  if (!entered) {
    return (
      <MatrixCover
        fadeOut={fading}
        onEnter={() => {
          setFading(true)
          setTimeout(() => {
            // No localStorage — shows again on every reload
            setEntered(true)
          }, 500)
        }}
      />
    )
  }

  return (
    <div>
      <nav>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
        <NavLink to="/sprout" className={({ isActive }) => (isActive ? 'active' : '')}>Sprout</NavLink>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/sprout" element={<Sprout />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
