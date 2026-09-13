import React, { useEffect, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import './Landing.css'
import { headerData } from '../../data/headerData'
import profileImg from '../../assets/png/shubham_profile.png'

const TECH_TAGS = [
  'Node.js', 'React', 'Python', 'GraphQL',
  'PostgreSQL', 'RabbitMQ', 'Redis', 'AI/LLM',
]

function Landing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Hero is always above the fold — trigger reveal animations immediately
    const el = sectionRef.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = prefersReduced ? 0 : 120

    const timer = setTimeout(() => {
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="landing" aria-label="Hero section" ref={sectionRef}>
      {/* Subtle grid background */}
      <div className="landing__grid" aria-hidden="true" />

      <div className="container landing__inner">
        {/* Left: text content */}
        <div className="landing__content">
          {/* Top label */}
          <div className="landing__label section-label reveal">
            Full Stack Engineer · 4 Years Experience
          </div>

          {/* Main heading */}
          <div className="landing__heading-wrap reveal reveal-delay-1">
            <h1 className="landing__name">{headerData.name}</h1>
            <p className="landing__title">
              Building scalable SaaS,{' '}
              <span className="landing__title-accent">AI-powered platforms</span>,
              and real-time systems.
            </p>
          </div>

          {/* Tech tag strip */}
          <div className="landing__tags reveal reveal-delay-2" aria-label="Core technologies">
            {TECH_TAGS.map(tag => (
              <span key={tag} className="landing__tag">{tag}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="landing__ctas reveal reveal-delay-3">
            <a href="#experience" className="btn btn--primary">
              View Experience
            </a>
            <a href="#projects" className="btn btn--secondary">
              View Projects
            </a>
            <a
              href={headerData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              aria-label="GitHub profile"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a
              href={headerData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="btn btn--ghost"
              aria-label="Contact section"
            >
              <FiMail aria-hidden="true" />
              Contact
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="landing__scroll reveal reveal-delay-4" aria-hidden="true">
            <FiArrowDown className="landing__scroll-icon" />
          </div>
        </div>

        {/* Right: profile image */}
        <div className="landing__image-wrap reveal reveal-delay-1">
          <div className="landing__image-ring">
            <img
              src={profileImg}
              alt="Shubham Dubey — Full Stack Engineer"
              className="landing__image"
            />
          </div>
          {/* Decorative accent dots */}
          <div className="landing__image-dot landing__image-dot--1" aria-hidden="true" />
          <div className="landing__image-dot landing__image-dot--2" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default Landing
