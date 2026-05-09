import sports from '../data/sports'

export default function SportBadge({ sportId, size = 'normal' }) {
  const sport = sports[sportId]
  if (!sport) return null

  return (
    <div className={`sport-badge sport-badge--${size}`}>
      <span className="sport-badge__icon">{sport.icon}</span>
      <span className="sport-badge__name">{sport.name}</span>
    </div>
  )
}
