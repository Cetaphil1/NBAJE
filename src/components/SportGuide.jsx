export default function SportGuide({ guide }) {
  if (!guide) {
    return <p className="guide-fallback">Guide coming soon.</p>
  }

  return (
    <div className="sport-guide">
      <section className="guide-section">
        <h3>Why This Sport Fits You</h3>
        <p>{guide.whyItFits}</p>
      </section>

      <section className="guide-section">
        <h3>Basic Rules</h3>
        <p>{guide.basicRules}</p>
      </section>

      <section className="guide-section">
        <h3>Key Traits Needed</h3>
        <p>{guide.keyTraits}</p>
      </section>

      <section className="guide-section">
        <h3>How to Start</h3>
        <p>{guide.howToStart}</p>
      </section>

      <section className="guide-section">
        <h3>Beginner Drills</h3>
        <ul>
          {guide.beginnerDrills.map((drill, i) => (
            <li key={i}>{drill}</li>
          ))}
        </ul>
      </section>

      <section className="guide-section">
        <h3>Equipment You'll Need</h3>
        <ul>
          {guide.equipment.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="guide-section">
        <h3>Common Beginner Mistakes</h3>
        <ul>
          {guide.commonMistakes.map((mistake, i) => (
            <li key={i}>{mistake}</li>
          ))}
        </ul>
      </section>

      <section className="guide-section">
        <h3>Finding Teams and Programs</h3>
        <p>{guide.findingTeams}</p>
      </section>

      <section className="guide-section">
        <h3>Your First Month Plan</h3>
        <p>{guide.firstMonthPlan}</p>
      </section>
    </div>
  )
}
