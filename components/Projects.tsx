'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-28 px-[5%]">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Projects
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-extrabold tracking-[-1px] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          What I&apos;ve <span className="text-[var(--color-green)]">Built</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[14px] text-[var(--color-text3)] mb-8">
          Infrastructure built and defended in real environments.
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
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5 mb-5">
            {featured.map(p => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
            {secondary.map(p => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
