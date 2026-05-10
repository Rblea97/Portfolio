'use client'
import { useState, useEffect } from 'react'

interface UseTypewriterResult {
  displayed: string
  done: boolean
}

export function useTypewriter(
  text: string,
  speed = 40,
  delay = 800,
): UseTypewriterResult {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay])

  return { displayed, done }
}
