// Build the final recommendation from ranked sports and user answers
export function buildRecommendation(rankedSports, answers, sportData) {
  const top = rankedSports[0]
  const second = rankedSports[1]
  const showSecond = second && second.score >= top.score - 2

  const sport = sportData[top.sport]
  const reason = generateMatchReason(sport, answers)

  return {
    primary: { sport: top.sport, score: top.score, reason },
    secondary: showSecond ? { sport: second.sport, score: second.score } : null
  }
}

// Pick the best matching reason template based on which traits the user answered into
function generateMatchReason(sport, answers) {
  // Collect all traits that contributed to this sport
  const traitHits = {}
  for (const answer of answers) {
    for (const [s, weight] of Object.entries(answer.weights)) {
      if (s === sport.id && weight > 0) {
        const trait = answer.trait
        traitHits[trait] = (traitHits[trait] || 0) + weight
      }
    }
  }

  // Find the trait with the highest contribution
  const topTrait = Object.entries(traitHits).sort((a, b) => b[1] - a[1])[0]

  if (topTrait && sport.matchReasonTemplates[topTrait[0]]) {
    return sport.matchReasonTemplates[topTrait[0]]
  }

  return sport.matchReasonTemplates.default
}
