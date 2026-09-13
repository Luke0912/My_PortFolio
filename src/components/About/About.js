import React from 'react'
import './About.css'
import { aboutData } from '../../data/aboutData'
import useReveal from '../../utils/useReveal'

function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="section about" aria-label="About section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Engineering Profile</div>
          <h2 className="section-title reveal reveal-delay-1">
            What kind of engineer am I?
          </h2>
          <div className="section-divider" />

          <div className="about__content">
            {/* Paragraphs */}
            <div className="about__text reveal reveal-delay-2">
              <p className="about__intro">{aboutData.intro}</p>
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="about__para">{p}</p>
              ))}
            </div>

            {/* Areas sidebar */}
            <div className="about__areas reveal reveal-delay-3">
              <h3 className="about__areas-title">Engineering Areas</h3>
              <ul className="about__areas-list">
                {aboutData.areas.map(area => (
                  <li key={area} className="about__area-item">
                    <span className="about__area-dot" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
