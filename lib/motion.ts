import type { Variants, Transition } from 'framer-motion'

export const springFast: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

export const springMedium: Transition = {
  type: 'spring',
  stiffness: 180,
  damping: 22,
}

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: springMedium },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: springMedium },
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export const cardHover = {
  y: -6,
  borderColor: 'var(--color-border2)',
  transition: springFast,
}
