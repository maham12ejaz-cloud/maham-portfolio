import {
  Code2,
  Globe,
  Server,
  Database,
  Brain,
  Cpu,
  Wrench,
  Sparkles,
} from 'lucide-react'
import { skills } from '../../data/portfolioData'
import './Skills.css'

const ICONS = {
  Code2,
  Globe,
  Server,
  Database,
  Brain,
  Cpu,
  Wrench,
  Sparkles,
}

export default function Skills() {
  return (
    <section id="skills" className="section dark">
      <div className="container">

        <div className="skills-heading reveal">
          <span className="skills-label">My Toolkit</span>

          <h2>Skills & Technologies</h2>

          <p className="lead">
            Technologies, concepts and AI tools I use while learning,
            building projects and improving my software engineering skills.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => {
            const Icon = ICONS[skill.icon] || Code2

            return (
              <article
                key={skill.group}
                className="skill reveal"
                style={{ '--d': index }}
              >
                <div className="s-icon">
                  <Icon size={21} />
                </div>

                <div className="skill-content">
                  <h3>{skill.group}</h3>

                  <div className="chips">
                    {skill.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}