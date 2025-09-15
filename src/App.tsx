// src/App.tsx
import { useState, useEffect } from 'react'
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

  // 1) Read persisted "entered" once on load
  const [entered, setEntered] = useState<boolean>(() => {
    return localStorage.getItem('entered') === '1'
  })
  const [fading, setFading] = useState(false)

  // 3) OPTIONAL: if user opens directly to /resume, auto-enter
  useEffect(() => {
    const path = location.pathname || window.location.hash
    if (!entered && (path.includes('/resume') || path.includes('#/resume'))) {
      // skip the cover for deep-links to resume
      localStorage.setItem('entered', '1')
      setEntered(true)
    }
  }, [entered, location])

  if (!entered) {
    return (
      <MatrixCover
        fadeOut={fading}
        onEnter={() => {
          setFading(true)                       // start fade
          setTimeout(() => {
            localStorage.setItem('entered', '1') // 2) persist
            setEntered(true)                     // unmount the cover
          }, 500)
        }}
      />
    )
  }

  return (
    <div>
      <nav>
        <NavLink to="/about"     className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
        <NavLink to="/projects"   className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
        <NavLink to="/resume"     className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
        <NavLink to="/sprout"     className={({ isActive }) => (isActive ? 'active' : '')}>Sprout</NavLink>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"           element={<About />} />
            <Route path="/about"      element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/resume"     element={<Resume />} />
            <Route path="/sprout"     element={<Sprout />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
