
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
} from 'lucide-react'
import { profile } from '../../data/portfolioData'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section dark contact">
      <div className="c-glow" aria-hidden="true" />

      <div className="container contact-container">
        <div className="contact-layout">

          {/* Left Content */}
          <div className="contact-content reveal">
            <span className="contact-label">
              <Mail size={15} />
              Get in touch
            </span>

            <h2>
              Let’s build something
              <span> great together.</span>
            </h2>

            <p>
              I’m currently looking for a software developer internship where
              I can learn, contribute, and build meaningful software. If you
              have an opportunity or simply want to connect, feel free to
              reach out.
            </p>

            <div className="contact-socials">
              <a
                href={`mailto:${profile.email}`}
                className="social-link"
              >
                <Mail size={19} />
                <span>{profile.email}</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={19} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={19} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card reveal" style={{ '--d': 1 }}>
            <div className="form-header">
              <span>Start a conversation</span>
              <h3>Send me a message</h3>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your idea or opportunity..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <Send size={17} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
