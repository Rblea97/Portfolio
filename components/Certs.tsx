'use client'
import { motion } from 'framer-motion'
import { certs } from '@/lib/data/certs'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Certs() {
  return (
    <section id="certs" className="py-20 px-[5%]">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20px' }}>
        <motion.p variants={fadeUp} className="font-mono text-[11px] text-[var(--color-text4)] tracking-[3px] uppercase mb-2">
          // Certifications
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-[32px] font-extrabold tracking-[-1px] mb-10">
          In <span className="text-[var(--color-green)]">Progress</span>
        </motion.h2>

        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-4">
          {certs.map(cert => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-[10px]"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div
                className="font-mono text-[18px] font-bold w-12 h-12 rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  color: 'var(--color-amber)',
                  background: '#f59e0b10',
                  border: '1px solid #f59e0b22',
                }}
              >
                {cert.shortName}
              </div>
              <div>
                <p className="text-[15px] font-bold text-[var(--color-text)] mb-1">{cert.fullName}</p>
                <p className="text-[12px] text-[var(--color-text3)] leading-[1.5] mb-2">{cert.description}</p>
                {cert.status === 'in-progress' ? (
                  <span
                    className="inline-block text-[10px] font-semibold px-2 py-[3px] rounded"
                    style={{ background: '#f59e0b12', color: 'var(--color-amber)', border: '1px solid #f59e0b22' }}
                  >
                    ⏳ In Progress
                  </span>
                ) : (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] font-semibold px-2 py-[3px] rounded"
                    style={{ background: '#00ff9f10', color: 'var(--color-green)', border: '1px solid var(--color-green-dim)' }}
                  >
                    ✓ Certified →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
