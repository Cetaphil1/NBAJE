import SPORTS from '../data/sports'

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
  return Object.values(SPORTS).map(sport => {
    let score = sport.fitTags.filter(t => tags.includes(t)).length
    if (sport.id === directSport) score += 10
    return { sport: sport.id, score }
  }).sort((a, b) => b.score - a.score)
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
