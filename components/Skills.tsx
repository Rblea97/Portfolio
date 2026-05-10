'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { skillGroups } from '@/lib/data/skills'

const COLOR_STYLES: Record<string, React.CSSProperties> = {
  green:  { color: 'var(--color-green)' },
  blue:   { color: 'var(--color-blue)' },
  purple: { color: 'var(--color-purple)' },
  amber:  { color: 'var(--color-amber)' },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-[5%]"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Skills
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-extrabold tracking-[-1px] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          What I <span className="text-[var(--color-green)]">Know</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[14px] text-[var(--color-text3)] mb-8">
          Tools used in production, labs, and deployed projects.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{
            background: '#0f152080',
            border: '1px solid var(--color-border)',
            borderRadius: '20px',
            padding: '40px 36px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            {skillGroups.map(group => (
              <motion.div
                key={group.id}
                variants={fadeUp}
                className="p-5 rounded-[10px]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-[11px] font-bold tracking-[2px] uppercase mb-4" style={COLOR_STYLES[group.color]}>
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
      </motion.div>
    </section>
  )
}
