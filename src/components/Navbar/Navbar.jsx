import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  Linkedin,
  Github,
  Download,
} from 'lucide-react'

import { navLinks, profile } from '../../data/portfolioData'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -50% 0px',
      }
    )

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id)

      if (section) {
        io.observe(section)
      }
    })

    return () => {
      io.disconnect()
    }
  }, [])

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          aria-label={`${profile.name} – home`}
          onClick={handleNavClick}
        >
          <span className="logo-name">
            {profile.name}
          </span>

          <span className="logo-role">
            Software Engineering
          </span>
        </a>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className={`nav-links ${open ? 'open' : ''}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                active === link.id
                  ? 'active'
                  : ''
              }
              aria-current={
                active === link.id
                  ? 'true'
                  : undefined
              }
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}

          {/* Social Links */}
          <div className="nav-social">

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
                onClick={handleNavClick}
              >
                <Linkedin size={17} />
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-icon"
                aria-label="GitHub"
                title="GitHub"
                onClick={handleNavClick}
              >
                <Github size={17} />
              </a>
            )}

          </div>

          {/* Download CV */}
          <a
            href="/Maham-Ejaz-CV.pdf"
            download="Maham-Ejaz-CV.pdf"
            className="nav-cv"
            onClick={handleNavClick}
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          type="button"
          className="burger"
          aria-label={
            open
              ? 'Close menu'
              : 'Open menu'
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>
    </header>
  )
}