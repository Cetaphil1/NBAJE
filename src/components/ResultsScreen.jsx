import { useState } from 'react'
import SPORTS from '../data/sports'
import { getDiscovery } from '../logic/scoring'
import { T } from '../tokens'
import SpotlightSearch from './SpotlightSearch'
import DiscoveryCard from './DiscoveryCard'

const FILTER_CHIPS = [
  { label:'Social',       tag:'social_team' },
  { label:'Solo',         tag:'shy_solo' },
  { label:'Cheap',        tag:'low_budget' },
  { label:'Intense',      tag:'high_energy' },
  { label:'Competitive',  tag:'competitive' },
  { label:'Low pressure', tag:'low_impact' },
  { label:'No gear',      tag:'no_equipment' },
]

const DISC_CATS = [
  { key:'bestFit',   label:'⭐ Best fit',    color:T.accent, dimColor:T.accentDim },
  { key:'lowBudget', label:'💸 Best value',  color:T.green,  dimColor:T.greenDim  },
  { key:'solo',      label:'🧍 Try it solo', color:T.amber,  dimColor:T.amberDim  },
  { key:'social',    label:'👥 Meet people', color:T.accent, dimColor:T.accentDim },
  { key:'wildcard',  label:'🎲 Wildcard',    color:T.pink,   dimColor:T.pinkDim   },
]

export default function ResultsPage({ initialTags, onSelect, onBack, onBobHint }) {
  const [tags, setTags] = useState(initialTags || [])
  const discovery = getDiscovery(tags, null)

  function toggleTag(tag) {
    setTags(p => p.includes(tag) ? p.filter(t => t !== tag) : [...p, tag])
  }

  return (
    <div style={{ width:'100%', maxWidth:660, margin:'0 auto', padding:'40px 16px 80px', position:'relative', zIndex:1 }}>
      <button
        onClick={onBack}
        style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:500, color:T.textMut, cursor:'pointer', padding:0, marginBottom:28, display:'flex', alignItems:'center', gap:6, transition:'color 0.15s' }}
        onMouseEnter={e => e.currentTarget.style.color = T.textPri}
        onMouseLeave={e => e.currentTarget.style.color = T.textMut}
      >← Retake quiz</button>

      <p style={{ fontSize:'0.8rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:T.accent, marginBottom:10 }}>Results</p>
      <h2 style={{ fontSize:'clamp(1.8rem, 5vw, 2.6rem)', fontWeight:800, letterSpacing:'-0.02em', color:T.textPri, marginBottom:6 }}>
        Here are a few things<br/>worth trying.
      </h2>
      <p style={{ fontSize:'1rem', color:T.textMut, marginBottom:28 }}>Pick one and explore it. Not a final verdict — a good first experiment.</p>

      {/* Spotlight search */}
      <div style={{ marginBottom:28 }}>
        <SpotlightSearch onSelect={onSelect} onBobHint={onBobHint} />
      </div>

      {/* Filter chips */}
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
        {FILTER_CHIPS.map(chip => {
          const on = tags.includes(chip.tag)
          return (
            <button
              key={chip.tag}
              onClick={() => toggleTag(chip.tag)}
              style={{ fontSize:'0.85rem', fontWeight:600, padding:'7px 16px', borderRadius:99, cursor:'pointer', fontFamily:'inherit', transition:'all 0.14s', background: on ? T.accent : T.surface, color: on ? '#fff' : T.textSec, border:`1px solid ${on ? T.accent : T.border}`, boxShadow: on ? `0 0 16px ${T.accentMid}` : 'none' }}
            >
              {chip.label}
            </button>
          )
        })}
      </div>

      {/* Discovery cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(270px, 1fr))', gap:12 }}>
        {DISC_CATS.map(cat => {
          const hit = discovery[cat.key]; if (!hit) return null
          const sport = SPORTS[hit.sport]; if (!sport) return null
          return (
            <DiscoveryCard
              key={cat.key}
              cat={cat}
              sport={sport}
              isTop={cat.key === 'bestFit'}
              onClick={() => onSelect(sport.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
