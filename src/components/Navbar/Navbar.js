import React, { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Stack',        href: '#stack' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Contact',      href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeSection, setActive]    = useState('home')

  /* Scroll-based nav shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section tracking */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* Close menu on route change */
  const handleLinkClick = useCallback(() => setMenuOpen(false), [])

  /* Trap scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        {/* Logo / Name */}
        <a href="#home" className="navbar__logo" aria-label="Shubham Dubey — home">
          <span className="navbar__logo-name">SD</span>
          <span className="navbar__logo-dot" aria-hidden="true">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link${activeSection === link.href.replace('#', '') ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__mobile-link${activeSection === link.href.replace('#', '') ? ' navbar__mobile-link--active' : ''}`}
                onClick={handleLinkClick}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Navbar
