'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-28 px-[5%]"
      style={{ background: 'rgba(10,13,22,0.72)', borderTop: '1px solid var(--color-border)' }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Resume
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-extrabold tracking-[-1px] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          My <span className="text-[var(--color-green)]">Resume</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[14px] text-[var(--color-text3)] mb-8">
          Available for IT support and infrastructure roles immediately.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-end mb-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-[8px] text-sm font-medium text-[var(--color-green)]"
            style={{ background: '#00ff9f0d', border: '1px solid var(--color-green-dim)' }}
          >
            <span className="font-mono text-[10px]">↓</span>
            Download PDF
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-[12px] overflow-hidden"
          style={{ border: '1px solid var(--color-border)' }}
        >
          <iframe
            src="/resume.pdf"
            className="w-full"
            style={{ height: '900px', border: 'none', background: '#fff' }}
            title="Richard Blea Resume"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
