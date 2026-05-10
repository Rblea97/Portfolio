'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/ProjectCard'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const featured = projects.filter(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-[5%]">
      <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Projects
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-[32px] font-extrabold tracking-[-1px] mb-10">
          What I&apos;ve <span className="text-[var(--color-green)]">Built</span>
        </motion.h2>

        {/* Featured: 2-col */}
        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map(p => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary: 3-col */}
        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-4">
          {secondary.map(p => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
