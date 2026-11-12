
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { profile } from '../../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const words = profile.headline.split(' ')

  return (
    <section id="home" className="hero">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="bg" aria-hidden="true">
        <div className="grid" />

        <div className="orb o1" />
        <div className="orb o2" />

        <div className="hero-glow" />
      </div>


      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="container hero-inner">

        {/* LEFT SIDE */}

        <div className="hero-copy">

          <p
            className="h-label"
            style={{ '--i': 1 }}
          >
            <span className="dot" />

            {profile.label}
          </p>


          <h1>

            <span className="visually-hidden">
              {profile.headline}
            </span>

            <span aria-hidden="true">
              {words.map((word, index) => (
                <span
                  className="word"
                  key={`${word}-${index}`}
                >
                  <span
                    style={{
                      '--i': index + 2,
                    }}
                  >
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </span>

          </h1>


          <p
            className="h-intro"
            style={{ '--i': 9 }}
          >
            I’m a Software Engineering student passionate about
            building modern software, exploring AI and turning
            ideas into useful digital experiences.
          </p>


          {/* CTA */}

          <div
            className="h-cta"
            style={{ '--i': 10 }}
          >

            <a
              className="btn btn-primary"
              href="#projects"
            >
              Explore my work

              <ArrowRight size={18} />
            </a>

            <a
              className="btn btn-ghost"
              href="#contact"
            >
              Let’s connect

              <Mail size={18} />
            </a>

          </div>


          {/* SMALL FOCUS LINE */}

          <div
            className="hero-focus"
            style={{ '--i': 11 }}
          >
            <Sparkles size={16} />

            <span>
              Software Development · AI · Problem Solving
            </span>
          </div>

        </div>


        {/* RIGHT SIDE */}

        <aside
          className="hero-card"
          aria-label="Profile highlights"
        >

          <div className="card-top">

            <div className="card-icon">
              <GraduationCap size={19} />
            </div>

            <div>
              <span className="card-name">
                {profile.name}
              </span>

              <span className="card-subtitle">
                Software Engineering
              </span>
            </div>

          </div>


          <dl>

            <div>
              <dt>Education</dt>

              <dd>
                BS Software Engineering
              </dd>
            </div>


            <div>
              <dt>University</dt>

              <dd>
                NFC IET Multan
              </dd>
            </div>


            <div>
              <dt>CGPA</dt>

              <dd className="highlight">
                3.83
              </dd>
            </div>


            <div>
              <dt>Based in</dt>

              <dd>
                {profile.location}
              </dd>
            </div>

          </dl>


          {/* CODE STYLE DECORATION */}

          <div
            className="hero-code"
            aria-hidden="true"
          >
            <span>
              <b>const</b> maham = {'{'}
            </span>

            <span>
              &nbsp;&nbsp;focus:
              <em>"software + AI"</em>,
            </span>

            <span>
              &nbsp;&nbsp;building:
              <em>"real-world projects"</em>
            </span>

            <span>
              {'}'}
            </span>
          </div>

        </aside>

      </div>

    </section>
  )
}
