export default function Footer() {
  return (
    <footer
      className="py-6 px-[5%] flex flex-col sm:flex-row justify-between items-center gap-2"
      style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
    >
      <span className="font-mono text-[11px] text-[var(--color-text4)]">
        <span className="text-[var(--color-green)]">~/</span>rblea97
        {' '}— Built with Next.js 15 · Tailwind v4 · Deployed on Vercel
      </span>
      <span className="font-mono text-[11px] text-[var(--color-text4)]">
        © 2026 Richard Blea
      </span>
    </footer>
  )
}
