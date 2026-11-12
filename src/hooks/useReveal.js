import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          } else {
            entry.target.classList.remove('in')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}