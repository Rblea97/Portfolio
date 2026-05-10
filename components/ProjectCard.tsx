'use client'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/types'

const BADGE_STYLES: Record<string, React.CSSProperties> = {
  green:  { background: '#00ff9f10', color: '#4ade80', border: '1px solid #00ff9f22' },
  purple: { background: '#a78bfa10', color: '#a78bfa', border: '1px solid #a78bfa22' },
  blue:   { background: '#60a5fa10', color: '#60a5fa', border: '1px solid #60a5fa22' },
  amber:  { background: '#f59e0b10', color: '#f59e0b', border: '1px solid #f59e0b22' },
}

const LINK_STYLES: Record<string, React.CSSProperties> = {
  live:   { color: 'var(--color-green)', border: '1px solid var(--color-green-dim)' },
  github: { color: 'var(--color-text3)', border: '1px solid var(--color-border)' },
  video:  { color: 'var(--color-purple)', border: '1px solid #a78bfa22' },
  docs:   { color: 'var(--color-blue)', border: '1px solid #60a5fa22' },
}

function previewLineColor(line: string): string {
  if (line.startsWith('$'))       return 'var(--color-text4)'
  if (line.startsWith('[OK]') || line.startsWith('[DONE]') || line.startsWith('[✓]'))
                                  return 'var(--color-green)'
  if (line.startsWith('[ALERT]') || line.startsWith('[ERROR]'))
                                  return '#f87171'
  if (line.startsWith('[WARN]') || line.startsWith('[ML]') || line.startsWith('[IOC]') || line.startsWith('[RANK]'))
                                  return 'var(--color-amber)'
  if (line.startsWith('[INFO]') || line.startsWith('[VIEW]') || line.startsWith('[SCORE]'))
                                  return 'var(--color-blue)'
  if (line.startsWith('[TIP]'))   return 'var(--color-text3)'
  return 'var(--color-text3)'
}

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      className="flex flex-col gap-3 p-6 rounded-[10px] h-full"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
      whileHover={{
        y: -4,
        borderColor: 'var(--color-border2)',
        boxShadow: '0 8px 32px #00ff9f08',
        transition: { duration: 0.2 },
      }}
    >
      {/* Mini terminal preview */}
      {project.previewLines && (
        <div
          className="rounded-[6px] p-3 font-mono text-[11px] leading-[1.75] overflow-hidden -mx-0"
          style={{ background: '#0a0d16', border: '1px solid var(--color-border)' }}
          aria-hidden="true"
        >
          {project.previewLines.map((line, i) => (
            <div key={i} style={{ color: previewLineColor(line) }}>{line}</div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-start gap-2">
        <h3 className="text-[18px] font-bold text-[var(--color-text)]">{project.name}</h3>
        <span
          className="text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded whitespace-nowrap shrink-0"
          style={BADGE_STYLES[project.roleBadgeColor]}
        >
          {project.roleBadge}
        </span>
      </div>

      <p className="text-[13px] text-[var(--color-text2)] leading-[1.6] flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-[6px]">
        {project.techTags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[10px] text-[var(--color-text3)] px-[7px] py-[2px] rounded"
            style={{ background: '#ffffff06', border: '1px solid var(--color-border)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mt-auto pt-2">
        {project.links.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-[10px] py-[5px] rounded font-medium transition-opacity hover:opacity-80"
            style={LINK_STYLES[link.variant]}
          >
            {link.variant === 'live' && '→ '}
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  )
}
