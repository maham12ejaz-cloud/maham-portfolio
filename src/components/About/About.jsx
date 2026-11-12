import {
  Code2,
  Database,
  Brain,
  Lightbulb,
} from 'lucide-react'
import { profile } from '../../data/portfolioData'
import './About.css'

export default function About() {
  const focusAreas = [
    {
      icon: Code2,
      title: 'Software Development',
      text: 'Building practical and user-focused applications.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      text: 'Exploring AI, machine learning and data-driven solutions.',
    },
    {
      icon: Database,
      title: 'Databases',
      text: 'Learning how applications store, manage and work with data.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      text: 'Improving logical thinking through programming and projects.',
    },
  ]

  return (
    <section id="about" className="section light">
      <div className="container about-layout">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="about-content reveal left">

          <span className="about-label">
            About Me
          </span>

          <h2>
            Turning curiosity into
            <span> practical skills.</span>
          </h2>

          <p className="lead about-lead">
            {profile.summary}
          </p>

          <p className="about-description">
            I am a Software Engineering undergraduate with a strong
            interest in software development and modern technology. I
            enjoy building practical projects and understanding how
            real-world applications work.
          </p>

          <p className="about-description">
            My interests include web development, databases, software
            engineering, Artificial Intelligence and Machine Learning.
            I am continuously improving my technical skills through
            hands-on projects and learning.
          </p>

          <div className="about-mini-info">

            <div>
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </div>

            <div>
              <span>Currently</span>
              <strong>BS Software Engineering</strong>
            </div>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="about-focus reveal right">

          <div className="focus-header">

            <span className="focus-label">
              What I'm Focused On
            </span>

            <h3>
              Learning. Building.
              <br />
              Improving.
            </h3>

          </div>


          <div className="focus-list">

            {focusAreas.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="focus-item"
                  style={{ '--d': index }}
                >

                  <div className="focus-icon">
                    <Icon size={19} />
                  </div>

                  <div className="focus-text">
                    <h4>{item.title}</h4>

                    <p>
                      {item.text}
                    </p>
                  </div>

                </article>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}