export default function AboutModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">What is this?</h2>
        <div className="modal-sections">
          {[
            ['What it is', "A tool to help you find one sport or activity worth trying — not a definitive answer about who you are. Take it seriously enough to try something, not seriously enough to overthink it."],
            ['What it is not', "This is not a personality test. It doesn't know you. It uses your answers to narrow down a list of 35 activities and surface one that fits the shape of what you said you wanted."],
            ['How the results work', "Your answers add tags (social, low-budget, competitive, etc.). The matching algorithm finds sports with the most overlapping traits and groups them into discovery categories."],
            ['Why you see each match', "Cards explain which preferences matched, like solo-friendly, cheap to start, or high-energy. If a pick is more exploratory, the app says so instead of pretending it is backed by popularity data."],
          ].map(([title, body]) => (
            <div key={title} className="modal-section">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary modal-cta" onClick={onClose}>
          Got it — let's go →
        </button>
      </div>
    </div>
  )
}
