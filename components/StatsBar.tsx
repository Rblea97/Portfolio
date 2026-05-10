'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/lib/hooks/useCountUp'

interface StatDef {
  value: number
  label: string
  decimals?: number
  suffix?: string
}

const STATS: StatDef[] = [
  { value: 12,    label: 'IT Policies Deployed' },
  { value: 36,    label: 'SIEM Alerts Triaged' },
  { value: 5,     label: 'MITRE ATT&CK Scenarios' },
  { value: 98.82, decimals: 2, suffix: '%', label: 'ML Classifier Accuracy' },
]

function StatItem({ stat, inView }: { stat: StatDef; inView: boolean }) {
  const raw = useCountUp(stat.value, inView)
  const display =
    stat.decimals !== undefined
      ? raw.toFixed(stat.decimals)
      : Math.round(raw).toString()

  return (
    <div className="flex flex-col items-center text-center px-4">
      <span
        className="font-mono font-bold leading-none tabular-nums"
        style={{
          fontSize: 'clamp(28px,4vw,40px)',
          color: 'var(--color-green)',
          textShadow: '0 0 24px #00ff9f28',
        }}
      >
        {display}{stat.suffix}
      </span>
      <span
        className="text-[11px] uppercase tracking-[1.5px] mt-2 font-medium"
        style={{ color: 'var(--color-text3)' }}
      >
        {stat.label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section aria-label="Key stats">
      <div ref={ref} className="max-w-[1200px] mx-auto px-[5%] py-2 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 rounded-[10px]"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {STATS.map(stat => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
