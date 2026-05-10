import { describe, it, expect } from 'vitest'
import { springFast, springMedium, springGentle, fadeUp, fadeIn, stagger, cardHover } from '@/lib/motion'

describe('motion config', () => {
  it('spring presets have type spring', () => {
    expect(springFast.type).toBe('spring')
    expect(springMedium.type).toBe('spring')
    expect(springGentle.type).toBe('spring')
  })

  it('springFast is stiffer than springMedium', () => {
    expect((springFast as { stiffness: number }).stiffness).toBeGreaterThan(
      (springMedium as { stiffness: number }).stiffness
    )
  })

  it('fadeUp has hidden and visible keys with opacity 0 hidden', () => {
    expect(fadeUp.hidden).toBeDefined()
    expect(fadeUp.visible).toBeDefined()
    expect((fadeUp.hidden as { opacity: number }).opacity).toBe(0)
  })

  it('fadeIn hidden has opacity 0', () => {
    expect(fadeIn.hidden).toBeDefined()
    expect(fadeIn.visible).toBeDefined()
    expect((fadeIn.hidden as { opacity: number }).opacity).toBe(0)
  })

  it('stagger visible has staggerChildren 0.08', () => {
    const vis = stagger.visible as { transition: { staggerChildren: number } }
    expect(vis.transition.staggerChildren).toBe(0.08)
  })

  it('stagger visible has delayChildren 0.1', () => {
    const vis = stagger.visible as { transition: { delayChildren: number } }
    expect(vis.transition.delayChildren).toBe(0.1)
  })

  it('cardHover lifts by -6', () => {
    expect(cardHover.y).toBe(-6)
  })
})
