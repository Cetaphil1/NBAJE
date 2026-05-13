import SPORTS from '../data/sports'

export const TAG_LABELS = {
  social_team: 'people around',
  shy_solo: 'solo-friendly',
  low_budget: 'cheap to start',
  no_equipment: 'little gear',
  high_energy: 'high-energy',
  low_impact: 'low-pressure',
  competitive: 'room to compete',
  limited_time: 'quick sessions',
}

const KEYWORD_MAP = [
  [['cheap','free','budget','afford','broke','money','cost'],        'low_budget'],
  [['alone','solo','myself','introvert','shy','quiet','private'],    'shy_solo'],
  [['social','team','friends','group','meet','people','others','together'], 'social_team'],
  [['compete','competitive','intense','win','challenge','versus','fight'], 'competitive'],
  [['calm','relax','gentle','easy','chill','flow','peaceful','slow','low pressure','mindful'], 'low_impact'],
  [['no gear','no equipment','nothing','empty handed','barefoot'],   'no_equipment'],
  [['cardio','fitness','workout','energy','fast','explosive','burn'], 'high_energy'],
  [['quick','short','busy','little time','no time','20 min','30 min'], 'limited_time'],
]

export function parseSearch(query) {
  if (!query || !query.trim()) return { tags: [], directSport: null }
  const q = query.toLowerCase()
  const tags = []
  for (const [phrases, tag] of KEYWORD_MAP) {
    if (phrases.some(p => q.includes(p)) && !tags.includes(tag)) tags.push(tag)
  }
  const directSport = Object.values(SPORTS).find(s =>
    q.includes(s.name.toLowerCase()) || q.includes(s.id.replace('_', ' '))
  )?.id || null
  return { tags: [...new Set(tags)], directSport }
}

export function scoreActivities(tags, directSport) {
  const activeTags = [...new Set(tags)]
  return Object.values(SPORTS)
    .filter(s => s.category !== 'niche')
    .map(sport => {
      const matchTags = activeTags.filter(t => sport.fitTags.includes(t))
      let score = matchTags.length
      if (sport.id === directSport) score += 10
      return { sport: sport.id, score, matchTags, directMatch: sport.id === directSport }
    })
    .sort((a, b) => b.score - a.score || SPORTS[a.sport].name.localeCompare(SPORTS[b.sport].name))
}

export function getNicheSuggestions(tags, n = 4) {
  const scored = Object.values(SPORTS)
    .filter(s => s.category === 'niche')
    .map(s => ({ sport: s, score: s.fitTags.filter(t => tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
  const top = scored.slice(0, Math.max(8, n * 2))
  const out = [], used = new Set()
  while (out.length < n && top.length) {
    const i = Math.floor(Math.random() * top.length)
    const pick = top.splice(i, 1)[0]
    if (!used.has(pick.sport.id)) { used.add(pick.sport.id); out.push(pick.sport) }
  }
  return out
}

export function getDiscovery(tags, directSport) {
  const ranked = scoreActivities(tags, directSport)
  const shown  = new Set()

  function pick(filterFn) {
    return ranked.find(r => r.score >= 0 && !shown.has(r.sport) && (!filterFn || filterFn(SPORTS[r.sport])))
  }

  const bestFit = pick()
  if (bestFit) shown.add(bestFit.sport)

  const lowBudget = pick(s => s.fitTags.includes('low_budget'))
  if (lowBudget) shown.add(lowBudget.sport)

  const solo = pick(s => s.fitTags.includes('shy_solo'))
  if (solo) shown.add(solo.sport)

  const social = pick(s => s.fitTags.includes('social_team'))
  if (social) shown.add(social.sport)

  const pool = ranked.filter(r => !shown.has(r.sport))
  const wildcard = pool[Math.floor(Math.random() * Math.min(8, pool.length))] || pool[0]

  return { bestFit, lowBudget, solo, social, wildcard }
}
