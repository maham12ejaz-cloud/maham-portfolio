
import { GraduationCap, Award } from 'lucide-react'
import { education, interests } from '../../data/portfolioData'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section light">
      <div className="container">

        {/* =========================
            EDUCATION HEADER
        ========================= */}

        <div className="education-heading reveal">
          <span className="education-label">
            Academic Journey
          </span>

          <h2>Education</h2>

          <p className="lead">
            My academic journey in software engineering, programming,
            and technical learning.
          </p>
        </div>


        {/* =========================
            EDUCATION TIMELINE
        ========================= */}

        <div className="education-timeline">

          {education.map((item, index) => (
            <article
              key={item.degree}
              className="education-item reveal"
              style={{ '--d': index }}
            >

              <div className="education-line">
                <div className="education-dot">
                  <GraduationCap size={18} />
                </div>
              </div>

              <div className="education-date">
                <span>{item.date}</span>
              </div>

              <div className="education-card">

                <div className="education-card-top">
                  <span className="education-type">
                    Academic Education
                  </span>

                  <span className="education-place">
                    {item.place}
                  </span>
                </div>

                <h3>
                  {item.degree}
                </h3>

                <p className="education-school">
                  {item.school}
                </p>

                <div className="education-result">
                  <Award size={16} />

                  <strong>
                    {item.result}
                  </strong>
                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            INTERESTS
        ========================= */}

        <div className="interests-section">

          {/* LEFT SIDE */}
          <div className="interests-intro reveal">

            <span className="interests-small-title">
              Beyond Academics
            </span>

            <h2>
              What I Enjoy
            </h2>

            <p>
              I enjoy exploring new technologies, building software
              projects, solving problems and continuously improving
              my technical skills.
            </p>

          </div>


          {/* RIGHT SIDE */}
          <div className="interests-card reveal">

            <div className="interests-card-header">
              <span>My Interests</span>
            </div>

            <div className="int-chips">
              {interests.map((interest, index) => (
                <span
                  key={interest}
                  className="int reveal scale"
                  style={{ '--d': index }}
                >
                  {interest}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
