import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Shubham Dubey</span>
          <span className="footer__title">Full Stack Engineer</span>
        </div>

        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/shubhamluke09"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Luke0912"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub profile"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>

        <p className="footer__copy">
          © {year} Shubham Dubey
        </p>
      </div>
    </footer>
  )
}

export default Footer
