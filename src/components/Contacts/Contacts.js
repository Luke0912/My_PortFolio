import React from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contacts.css'
import { contactsData } from '../../data/contactsData'
import useReveal from '../../utils/useReveal'

function Contacts() {
  const sectionRef = useReveal()

  return (
    <section id="contact" className="section contacts" aria-label="Contact section">
      <div className="container">
        <div ref={sectionRef}>
          <div className="section-label reveal">Get In Touch</div>
          <h2 className="section-title reveal reveal-delay-1">
            Let's build something useful.
          </h2>
          <div className="section-divider" />

          <div className="contacts__inner">
            <p className="contacts__intro reveal reveal-delay-2">
              I'm open to discussing new opportunities, interesting technical problems,
              or SaaS/AI engineering work. Reach out directly.
            </p>

            <div className="contacts__links reveal reveal-delay-3">
              <a
                href={`mailto:${contactsData.email}`}
                className="contacts__link"
                aria-label="Send email"
              >
                <div className="contacts__link-icon">
                  <FiMail aria-hidden="true" />
                </div>
                <div className="contacts__link-body">
                  <span className="contacts__link-label">Email</span>
                  <span className="contacts__link-value">{contactsData.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactsData.phone.replace(/-/g, '')}`}
                className="contacts__link"
                aria-label="Call phone number"
              >
                <div className="contacts__link-icon">
                  <FiPhone aria-hidden="true" />
                </div>
                <div className="contacts__link-body">
                  <span className="contacts__link-label">Phone</span>
                  <span className="contacts__link-value">{contactsData.phone}</span>
                </div>
              </a>

              <a
                href={contactsData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contacts__link"
                aria-label="LinkedIn profile"
              >
                <div className="contacts__link-icon">
                  <FiLinkedin aria-hidden="true" />
                </div>
                <div className="contacts__link-body">
                  <span className="contacts__link-label">LinkedIn</span>
                  <span className="contacts__link-value">shubhamluke09</span>
                </div>
              </a>

              <a
                href={contactsData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contacts__link"
                aria-label="GitHub profile"
              >
                <div className="contacts__link-icon">
                  <FiGithub aria-hidden="true" />
                </div>
                <div className="contacts__link-body">
                  <span className="contacts__link-label">GitHub</span>
                  <span className="contacts__link-value">Luke0912</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
