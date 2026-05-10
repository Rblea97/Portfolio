'use client'
import { motion } from 'framer-motion'
import { useTypewriter } from '@/lib/hooks/useTypewriter'

const ROLE_TEXT = '// CYBERSECURITY & SECURE COMPUTING · CU DENVER · MAY 2026'

const BADGES = [
  { label: 'IT Support', color: 'blue' as const },
  { label: 'Security-Aware', color: 'green' as const },
  { label: 'Full-Stack Dev', color: 'purple' as const },
  { label: 'CompTIA A+  in progress', color: 'amber' as const },
  { label: 'Security+  in progress', color: 'amber' as const },
]

const BADGE_STYLES: Record<string, React.CSSProperties> = {
  green:  { background: '#00ff9f0c', color: '#4ade80', border: '1px solid #00ff9f22' },
  purple: { background: 'var(--color-purple-dim)', color: 'var(--color-purple)', border: '1px solid #a78bfa22' },
  blue:   { background: '#60a5fa0c', color: 'var(--color-blue)', border: '1px solid #60a5fa22' },
  amber:  { background: '#f59e0b0c', color: 'var(--color-amber)', border: '1px solid #f59e0b22' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay } }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
}

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Hero() {
  const { displayed, done } = useTypewriter(ROLE_TEXT, 38, 600)

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center px-[5%] overflow-hidden"
    >
      {/* Radial gradient glows */}
      <div
        className="pointer-events-none absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, #7c3aed14 0%, transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-[5%] w-[320px] h-[320px] rounded-full"
        style={{ background: 'radial-gradient(circle, #00ff9f08 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[680px]">
        {/* Terminal crumb */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="font-mono text-[11px] text-[var(--color-text4)] mb-6 flex items-center gap-2"
        >
          <span className="text-[var(--color-green)] opacity-50">❯</span>
          <span>~/portfolio</span>
          <span className="text-[var(--color-text3)]">cat about.md</span>
          <span
            className="inline-block w-[6px] h-[11px] bg-[var(--color-green)] opacity-70 cursor-blink"
            aria-hidden="true"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
          className="text-[clamp(40px,8vw,64px)] font-extrabold tracking-[-3px] leading-[0.95] mb-2"
        >
          Richard{' '}
          <span className="text-[var(--color-green)]">Blea</span>
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="font-mono text-[11px] text-[var(--color-purple)] tracking-[2.5px] uppercase mb-6"
          aria-label={ROLE_TEXT}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[6px] h-[11px] bg-[var(--color-purple)] opacity-70 cursor-blink align-middle ml-[2px]"
              aria-hidden="true"
            />
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="text-[15px] text-[var(--color-text2)] max-w-[520px] leading-[1.7] mb-7"
        >
          CS graduate with hands-on{' '}
          <strong className="text-[var(--color-text)] font-semibold">IT experience</strong>
          {' '}— Active Directory, Intune MDM, M365, and PowerShell automation. Security fundamentals
          built in: I&apos;ve run real attack scenarios in a Wazuh SIEM lab to understand what IT
          teams are defending against.{' '}
          <strong className="text-[var(--color-text)] font-semibold">
            Available for IT support and infrastructure roles.
          </strong>
        </motion.p>

        {/* Badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-8"
        >
          {BADGES.map(badge => (
            <motion.span
              key={badge.label}
              variants={badgeVariant}
              className="px-[10px] py-1 rounded text-[11px] font-medium"
              style={BADGE_STYLES[badge.color]}
            >
              {badge.color === 'blue' && (
                <span
                  className="inline-block w-[5px] h-[5px] rounded-full bg-[var(--color-blue)] mr-[5px] align-middle"
                  style={{ boxShadow: '0 0 5px var(--color-blue)' }}
                />
              )}
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 items-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
          >
            View Projects
          </a>
          <a
            href="https://github.com/Rblea97"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-md font-mono text-[11px] transition-colors hover:border-[var(--color-green)]"
            style={{
              color: 'var(--color-green)',
              border: '1px solid var(--color-green-dim)',
            }}
          >
            <span className="text-[var(--color-text4)]">$ </span>open_github.sh
          </a>
          <a
            href="/resume.pdf"
            download
            className="hidden sm:block px-5 py-3 rounded-md text-sm text-[var(--color-text3)] transition-colors hover:text-[var(--color-text2)]"
            style={{ border: '1px solid var(--color-border)' }}
          >
            Resume ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
