import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import './BackToTop.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
