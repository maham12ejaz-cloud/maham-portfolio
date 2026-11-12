import {
  ArrowUpRight,
  Github,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  featuredProject as f,
  projects,
} from '../../data/portfolioData'
import './Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const allProjects = [
    {
      ...f,
      featured: true,
    },
    ...projects,
  ]

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseDetails = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <section id="projects" className="section light">
      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <h2 className="reveal">
          Projects
        </h2>

        <p
          className="lead reveal"
          style={{ '--d': 1 }}
        >
          A collection of personal, academic and web development projects.
        </p>

        {/* =========================
            PROJECT GRID
        ========================= */}

        <div className="p-grid">

          {allProjects.map((project, index) => (
            <article
              key={project.name}
              className="p-card reveal"
              style={{ '--d': index }}
            >

              {/* =========================
                  PROJECT PREVIEW
              ========================= */}

              <div className="p-browser">

                <div className="p-bar">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="p-screen">

                  <span>
                    {project.name}
                  </span>

                  <small>
                    {project.type.split(' · ')[0]}
                  </small>

                </div>

              </div>

              {/* =========================
                  PROJECT CONTENT
              ========================= */}

              <div className="p-content">

                <p className="meta">
                  {project.type}
                </p>

                <h3>
                  {project.name}
                </h3>

                <p className="p-description">
                  {project.shortDescription || project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================= */}

                {project.tech?.length > 0 && (
                  <div className="chips">

                    {project.tech
                      .slice(0, 4)
                      .map((technology) => (
                        <span
                          className="tag"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}

                    {project.tech.length > 4 && (
                      <span className="tag tag-more">
                        +{project.tech.length - 4}
                      </span>
                    )}

                  </div>
                )}

                {/* =========================
                    PROJECT ACTIONS
                ========================= */}

                <div className="project-links">

                  {/* VIEW DETAILS */}

                  <button
                    type="button"
                    className="project-link primary"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                    <ArrowUpRight size={16} />
                  </button>

                  {/* GITHUB */}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {/* LIVE DEMO */}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      aria-label={`View live demo of ${project.name}`}
                    >
                      <ArrowUpRight size={16} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* ==================================================
          PROJECT DETAILS MODAL
      ================================================== */}

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={handleCloseDetails}
        >

          <div
            className="project-detail-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* =========================
                MODAL HEADER
            ========================= */}

            <div className="detail-panel-header">

              <div>

                <span className="detail-panel-label">
                  Project Details
                </span>

                <h3>
                  {selectedProject.name}
                </h3>

                <p>
                  {selectedProject.type}
                </p>

              </div>

              <button
                type="button"
                className="detail-close-btn"
                onClick={handleCloseDetails}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

            </div>

            {/* =========================
                PROJECT OVERVIEW
            ========================= */}

            <div className="detail-panel-section">

              <span className="detail-panel-heading">
                Project Overview
              </span>

              <p>
                {selectedProject.description}
              </p>

            </div>

            {/* =========================
                PURPOSE
            ========================= */}

            {selectedProject.purpose && (
              <div className="detail-panel-section">

                <span className="detail-panel-heading">
                  Why I Built This
                </span>

                <p>
                  {selectedProject.purpose}
                </p>

              </div>
            )}

            {/* =========================
                KEY FEATURES
            ========================= */}

            {selectedProject.features?.length > 0 && (
              <div className="detail-panel-section">

                <span className="detail-panel-heading">
                  Key Features
                </span>

                <div className="detail-panel-features">

                  {selectedProject.features.map(
                    (feature, index) => (
                      <div
                        className="detail-panel-feature"
                        key={feature}
                      >

                        <span>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <p>
                          {feature}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>
            )}

            {/* =========================
                WHAT I LEARNED
            ========================= */}

            {selectedProject.learning && (
              <div className="detail-panel-section">

                <span className="detail-panel-heading">
                  What I Learned
                </span>

                <p>
                  {selectedProject.learning}
                </p>

              </div>
            )}

            {/* =========================
                TECHNOLOGIES
            ========================= */}

            {selectedProject.tech?.length > 0 && (
              <div className="detail-panel-section">

                <span className="detail-panel-heading">
                  Technologies
                </span>

                <div className="detail-panel-tech">

                  {selectedProject.tech.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>
            )}

            {/* =========================
                LIVE DEMO + GITHUB
            ========================= */}

            {(selectedProject.demo ||
              selectedProject.repo) && (
              <div className="detail-panel-actions">

                {/* LIVE DEMO */}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-panel-link primary"
                  >
                    <ArrowUpRight size={17} />
                    Live Demo
                  </a>
                )}

                {/* GITHUB */}

                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-panel-link"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                )}

              </div>
            )}

          </div>

        </div>
      )}

    </section>
  )
}