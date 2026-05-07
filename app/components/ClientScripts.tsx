'use client'

import { useEffect, useState } from 'react'

export default function ClientScripts() {
  const [showTop, setShowTop] = useState(false)

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-anchor${showTop ? ' visible' : ''}`}
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 1L13 7H10V13H4V7H1L7 1Z" />
      </svg>
    </button>
  )
}
