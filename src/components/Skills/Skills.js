import React from 'react'
import './Skills.css'
import { skillsData } from '../../data/skillsData'
import useReveal from '../../utils/useReveal'

function Skills() {
  const sectionRef = useReveal()

  return (
    <section id="stack" className="section skills" aria-label="Technical stack section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Technology</div>
          <h2 className="section-title reveal reveal-delay-1">Technical Stack</h2>
          <div className="section-divider" />

          <div className="skills__grid">
            {Object.entries(skillsData).map(([category, technologies], idx) => (
              <div
                key={category}
                className="skills__group reveal"
                style={{ '--delay': `${idx * 0.06}s` }}
              >
                <h3 className="skills__group-title">{category}</h3>
                <div className="skills__chips" role="list" aria-label={category}>
                  {technologies.map(tech => (
                    <span key={tech} className="skills__chip" role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
