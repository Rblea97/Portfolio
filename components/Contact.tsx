'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

const LINKS = [
  { icon: '✉', label: 'richard.blea97@gmail.com', href: 'mailto:richard.blea97@gmail.com' },
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/richard-blea-748914159/' },
  { icon: 'gh', label: 'GitHub', href: 'https://github.com/Rblea97' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-[5%] text-center"
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
          // Contact
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-extrabold tracking-[-1px] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Let&apos;s <span className="text-[var(--color-green)]">Connect</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[14px] text-[var(--color-text3)] mb-6">
          Available immediately for IT support and infrastructure roles.
        </motion.p>
        <motion.p variants={fadeUp} className="text-[15px] text-[var(--color-text2)] leading-[1.7] mb-8 max-w-[520px] mx-auto">
          Security fundamentals are built in — I know what you&apos;re defending against, not just
          how to keep the lights on. If you want someone who contributes from day one, reach out.
        </motion.p>

        <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
          {LINKS.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              variants={fadeUp}
              className="flex items-center gap-2 px-5 py-3 rounded-[8px] text-sm text-[var(--color-text2)] transition-colors hover:text-[var(--color-text)]"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              whileHover={{ borderColor: 'var(--color-border2)' }}
            >
              <span className="font-mono text-[10px]">{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
