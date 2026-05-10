'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const CONTACT_LINKS = [
  { icon: 'email', label: 'richard.blea97@gmail.com', href: 'mailto:richard.blea97@gmail.com' },
  { icon: 'LinkedIn', label: 'linkedin.com/in/richard-blea-748914159', href: 'https://www.linkedin.com/in/richard-blea-748914159/' },
  { icon: 'GitHub', label: 'github.com/Rblea97', href: 'https://github.com/Rblea97' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg2)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <motion.div ref={ref} variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.p variants={fadeUpVariant} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // About
        </motion.p>
        <motion.h2 variants={fadeUpVariant} className="text-[32px] font-extrabold tracking-[-1px] mb-10">
          Who I <span className="text-[var(--color-green)]">Am</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div variants={stagger} className="flex flex-col gap-4 text-[var(--color-text2)] text-[15px] leading-[1.8]">
            <motion.p variants={fadeUpVariant}>
              I&apos;m a{' '}
              <strong className="text-[var(--color-text)] font-semibold">CS graduate from CU Denver</strong>
              {' '}(Cybersecurity &amp; Secure Computing, May 2026) focused on IT infrastructure. I&apos;ve
              built the same environments IT teams operate every day — Active Directory domains, Intune MDM
              device management, M365 tenant configuration, and PowerShell automation for user provisioning
              and group policy.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              My degree included a security concentration, which adds real depth:{' '}
              <strong className="text-[var(--color-text)] font-semibold">I understand what attackers do at a technical level</strong>
              {' '}— how they move through networks, what SIEM alerts look like, and why certain
              configurations create risk. That context makes every AD permission and firewall rule more
              deliberate, not just a ticket to close.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              I&apos;m looking for{' '}
              <strong className="text-[var(--color-text)] font-semibold">IT support roles</strong>
              {' '}where hands-on lab experience translates directly. The security depth is a differentiator
              you get for free.
            </motion.p>
          </motion.div>

          {/* Contact links */}
          <motion.div variants={stagger} className="flex flex-col gap-3">
            {CONTACT_LINKS.map(link => (
              <motion.a
                key={link.icon}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={fadeUpVariant}
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
