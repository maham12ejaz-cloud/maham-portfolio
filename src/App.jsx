import { Routes, Route } from 'react-router-dom'
import useReveal from './hooks/useReveal'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}