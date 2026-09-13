import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'
import { projectsData } from '../../data/projectsData'
import useReveal from '../../utils/useReveal'

function Projects() {
  const sectionRef = useReveal()

  return (
    <section id="projects" className="section projects" aria-label="Projects section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Independent Work</div>
          <h2 className="section-title reveal reveal-delay-1">Projects</h2>
          <div className="section-divider" />

          <div className="projects__grid">
            {projectsData.map((project, idx) => (
              <article
                key={project.id}
                className="project-card reveal"
                style={{ '--delay': `${idx * 0.15}s` }}
              >
                {/* Header */}
                <div className="project-card__header">
                  <span className="project-card__number" aria-hidden="true">
                    0{project.id}
                  </span>
                  <div className="project-card__links">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`${project.projectName} — GitHub repository`}
                      >
                        <FiGithub aria-hidden="true" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`${project.projectName} — live demo`}
                      >
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="project-card__title">{project.projectName}</h3>

                {/* Description */}
                <p className="project-card__desc">{project.projectDesc}</p>

                {/* Capabilities */}
                <div className="project-card__caps">
                  <h4 className="project-card__caps-label">Capabilities</h4>
                  <ul className="project-card__caps-list">
                    {project.capabilities.map((cap, i) => (
                      <li key={i} className="project-card__cap-item">{cap}</li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="project-card__tags" aria-label="Technologies">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="projects__github-cta reveal reveal-delay-4">
            <p className="projects__github-text">
              More work available on GitHub
            </p>
            <a
              href="https://github.com/Luke0912"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              aria-label="View GitHub profile"
            >
              <FiGithub aria-hidden="true" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
