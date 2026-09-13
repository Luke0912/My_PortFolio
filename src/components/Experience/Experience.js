import React from 'react'
import './Experience.css'
import { experienceData } from '../../data/experienceData'
import useReveal from '../../utils/useReveal'

function Experience() {
  const sectionRef = useReveal()

  return (
    <section id="experience" className="section experience" aria-label="Experience section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Professional Experience</div>
          <h2 className="section-title reveal reveal-delay-1">
            Where I've worked
          </h2>
          <div className="section-divider" />

          <div className="experience__timeline" role="list">
            {experienceData.map((job, idx) => (
              <article
                key={job.id}
                className="experience__item reveal"
                style={{ '--delay': `${idx * 0.12}s` }}
                role="listitem"
              >
                {/* Timeline dot */}
                <div className="experience__dot" aria-hidden="true">
                  {idx === 0 && <span className="experience__dot-pulse" />}
                </div>

                {/* Content */}
                <div className="experience__content">
                  {/* Header */}
                  <div className="experience__header">
                    <div className="experience__meta">
                      <h3 className="experience__role">{job.role}</h3>
                      <p className="experience__company">{job.company}</p>
                    </div>
                    <time className="experience__dates">
                      {job.startDate} — {job.endDate}
                    </time>
                  </div>

                  {/* Project */}
                  <p className="experience__project">
                    <span className="experience__project-label">Project:</span>{' '}
                    {job.project}
                  </p>

                  {/* Responsibilities */}
                  <ul className="experience__bullets">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="experience__bullet">{r}</li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="experience__tags" aria-label="Technologies used">
                    {job.tags.map(tag => (
                      <span key={tag} className="tech-chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
