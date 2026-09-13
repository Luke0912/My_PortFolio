import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to the returned ref's element.
 * When the element enters the viewport, it adds the `visible` class
 * to all descendant elements with the `reveal` class.
 */
function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'))
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

export default useReveal
