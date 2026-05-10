'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

const CONTACT_LINKS = [
  { icon: 'email', label: 'richard.blea97@gmail.com', href: 'mailto:richard.blea97@gmail.com' },
  { icon: 'LinkedIn', label: 'linkedin.com/in/richard-blea-748914159', href: 'https://www.linkedin.com/in/richard-blea-748914159/' },
  { icon: 'GitHub', label: 'github.com/Rblea97', href: 'https://github.com/Rblea97' },
]

const BIO_PARAGRAPHS = [
  <>
    I&apos;m a{' '}
    <strong className="text-[var(--color-text)] font-semibold">CS graduate from CU Denver</strong>
    {' '}(May 2026) focused on IT support and infrastructure. I&apos;ve built the same environments
    IT teams operate every day — Active Directory domains, Intune MDM device management,
    M365 tenant configuration, and PowerShell automation for user provisioning and group policy.
  </>,
  <>
    My training covers security fundamentals, which makes me{' '}
    <strong className="text-[var(--color-text)] font-semibold">better at IT work — not distracted from it.</strong>
    {' '}Patch prioritization, least-privilege access reviews, endpoint hardening, phishing triage —
    these are IT support functions. Understanding the threat side means I do them deliberately,
    not just mechanically.
  </>,
  <>
    I&apos;m looking for{' '}
    <strong className="text-[var(--color-text)] font-semibold">IT support and infrastructure roles</strong>
    {' '}where I can contribute from day one. Security-aware IT professionals handle more
    — faster triage, fewer escalations, configurations that don&apos;t create problems later.
    That&apos;s the value.
  </>,
]

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-[5%]"
      style={{ background: 'rgba(10,13,22,0.72)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        className="max-w-5xl mx-auto"
      >
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // About
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-extrabold tracking-[-1px] mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Who I <span className="text-[var(--color-green)]">Am</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[14px] text-[var(--color-text3)] mb-10">
          The security depth is the differentiator.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={stagger} className="flex flex-col gap-5 text-[var(--color-text2)] text-[15px] leading-[1.8]">
            {BIO_PARAGRAPHS.map((content, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                style={{ borderLeft: '2px solid var(--color-green-dim)', paddingLeft: '16px' }}
              >
                {content}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="flex flex-col gap-3">
            {CONTACT_LINKS.map(link => (
              <motion.a
                key={link.icon}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={fadeUp}
                className="flex items-center gap-3 px-4 py-3 rounded-[8px] text-sm text-[var(--color-text2)] transition-colors duration-200 hover:text-[var(--color-text)]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                whileHover={{ borderColor: 'var(--color-border2)' }}
              >
                <span
                  className="font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap"
                  style={{ background: '#00ff9f0d', color: 'var(--color-green)' }}
                >
                  {link.icon}
                </span>
                <span className="truncate">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
