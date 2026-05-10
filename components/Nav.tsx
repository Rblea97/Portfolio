'use client'
import { useState } from 'react'
import { useScrollSpy } from '@/lib/hooks/useScrollSpy'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_SECTIONS = ['about', 'projects', 'skills', 'certs', 'contact'] as const

export default function Nav() {
  const activeId = useScrollSpy([...NAV_SECTIONS])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[54px] flex items-center justify-between px-[5%]"
      style={{
        background: '#080b12ee',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-mono font-bold text-[var(--color-green)] text-sm tracking-wide"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-[var(--color-text4)]">~/</span>rblea97
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_SECTIONS.slice(0, -1).map(id => (
          <a
            key={id}
            href={`#${id}`}
            className="text-xs font-medium tracking-wide capitalize transition-colors duration-200"
            style={{ color: activeId === id ? 'var(--color-green)' : 'var(--color-text3)' }}
          >
            {id}
          </a>
        ))}
        <a
          href="#contact"
          className="font-mono text-[11px] px-3 py-1 rounded border transition-colors duration-200"
          style={{
            color: 'var(--color-green)',
            borderColor: 'var(--color-green-dim)',
          }}
        >
          contact.sh
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className="block h-[1.5px] w-5 bg-[var(--color-text2)] transition-all duration-200"
          style={{ transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }}
        />
        <span
          className="block h-[1.5px] w-5 bg-[var(--color-text2)] transition-all duration-200"
          style={{ opacity: menuOpen ? 0 : 1 }}
        />
        <span
          className="block h-[1.5px] w-5 bg-[var(--color-text2)] transition-all duration-200"
          style={{ transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }}
        />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[54px] z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: '#080b12f5', backdropFilter: 'blur(16px)' }}
          >
            {NAV_SECTIONS.map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-2xl capitalize transition-colors"
                style={{ color: activeId === id ? 'var(--color-green)' : 'var(--color-text2)' }}
              >
                {id === 'contact' ? 'contact.sh' : id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
