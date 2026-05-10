'use client'
import { motion } from 'framer-motion'

const ORB_CONFIG = [
  {
    id: 'purple',
    position: { top: '-20%', right: '-10%' },
    size: 800,
    color: '#7c3aed',
    opacityRange: [0.40, 0.50] as [number, number],
    scaleRange: [1, 1.12] as [number, number],
    duration: 7,
  },
  {
    id: 'green',
    position: { bottom: '-15%', left: '-5%' },
    size: 600,
    color: '#00ff9f',
    opacityRange: [0.25, 0.32] as [number, number],
    scaleRange: [1, 1.08] as [number, number],
    duration: 9,
  },
  {
    id: 'blue',
    position: { top: '-10%', left: '40%' },
    size: 500,
    color: '#60a5fa',
    opacityRange: [0.18, 0.24] as [number, number],
    scaleRange: [1, 1.05] as [number, number],
    duration: 11,
  },
]

export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Layer 1: Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Layer 2: Glow orbs */}
      {ORB_CONFIG.map(orb => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            ...orb.position,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: 'blur(80px)',
          }}
          animate={{
            opacity: [orb.opacityRange[0], orb.opacityRange[1], orb.opacityRange[0]],
            scale: [orb.scaleRange[0], orb.scaleRange[1], orb.scaleRange[0]],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Layer 3: Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #080b12 100%)',
          opacity: 0.2,
        }}
      />
    </div>
  )
}
