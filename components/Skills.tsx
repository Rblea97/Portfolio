'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '@/lib/data/skills'

const COLOR_STYLES: Record<string, React.CSSProperties> = {
  green:  { color: 'var(--color-green)' },
  blue:   { color: 'var(--color-blue)' },
  purple: { color: 'var(--color-purple)' },
  amber:  { color: 'var(--color-amber)' },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Skills
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-[32px] font-extrabold tracking-[-1px] mb-10">
          What I <span className="text-[var(--color-green)]">Know</span>
        </motion.h2>

        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
          {skillGroups.map(group => (
            <motion.div
              key={group.id}
              variants={fadeUp}
              className="p-5 rounded-[10px]"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <p
                className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
                style={COLOR_STYLES[group.color]}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-[7px]">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[12px] text-[var(--color-text2)] px-[10px] py-[5px] rounded-[5px]"
                    style={{ background: '#ffffff05', border: '1px solid var(--color-border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
