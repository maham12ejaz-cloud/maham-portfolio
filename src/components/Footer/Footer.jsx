
import {
  Linkedin,
  Github,
  Mail,
} from 'lucide-react'

import { navLinks, profile } from '../../data/portfolioData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container f-inner">

        {/* BRAND */}
        <div className="f-brand">
          <strong className="f-name">
            {profile.name}
          </strong>

          <p className="muted">
            Software Engineering student passionate about
            software development, AI and building practical
            digital solutions.
          </p>
        </div>

        {/* NAVIGATION */}
        <nav
          aria-label="Footer navigation"
          className="f-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="ulink"
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* SOCIAL LINKS */}
        <div className="f-social">

          {profile.linkedin && (
            <a
              className="social-icon"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          )}

          {profile.github && (
            <a
              className="social-icon"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={19} />
            </a>
          )}

          <a
            className="social-icon"
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
          >
            <Mail size={19} />
          </a>

        </div>

      </div>

      <div className="container footer-bottom">
        <p className="copy muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
