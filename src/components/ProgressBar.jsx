export default function ProgressBar({ current, total, accentColor }) {
  const pct = (current / total) * 100
  return (
    <div className="progress-track">
      <div
        className="progress-fill"
        style={{ width: `${pct}%`, background: accentColor || 'var(--accent)' }}
      />
    </div>
  )
}
