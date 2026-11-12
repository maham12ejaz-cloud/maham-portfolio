import { experience } from '../../data/portfolioData'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section dark">
      <div className="container">
        <h2 className="reveal">Experience</h2>
        <div className="timeline">
          <div className="line reveal" aria-hidden="true" />
          {experience.map((e, i) => (
            <article key={e.role} className="t-item reveal" style={{ '--d': i }}>
              <span className="marker" aria-hidden="true" />
              <p className="meta">{e.date}</p>
              <h3>{e.role}</h3>
              <p className="company">{e.company}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
