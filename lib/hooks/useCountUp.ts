import { useEffect, useState } from 'react'

export function useCountUp(target: number, inView: boolean, duration = 1500): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const steps = 60
    const stepMs = duration / steps
    let step = 0
    const id = setInterval(() => {
      step++
      if (step >= steps) {
        setCount(target)
        clearInterval(id)
      } else {
        const progress = step / steps
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(target * eased)
      }
    }, stepMs)
    return () => clearInterval(id)
  }, [inView, target, duration])

  return count
}
