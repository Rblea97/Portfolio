'use client'
import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], rootMargin = '-80px 0px -50% 0px'): string {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveId(id)
        },
        { rootMargin },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(obs => obs.disconnect())
  }, [sectionIds, rootMargin])

  return activeId
}
