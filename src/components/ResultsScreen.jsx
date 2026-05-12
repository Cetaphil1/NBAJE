import { useState, useMemo } from 'react'
import SPORTS from '../data/sports'
import { getDiscovery, getNicheSuggestions } from '../logic/scoring'
import { SPORT_META } from '../data/sportMeta'
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
  { key:'lowBudget', label:'💸 Best value',  color:T.blue,   dimColor:T.blueDim   },
  { key:'solo',      label:'🧍 Try it solo', color:T.amber,  dimColor:T.amberDim  },
  { key:'social',    label:'👥 Meet people', color:T.accent, dimColor:T.accentDim },
  { key:'wildcard',  label:'🎲 Wildcard',    color:T.pink,   dimColor:T.pinkDim   },
]

function PersonalisedInsight({ data }) {
  if (!data) return null
  const topEnjoy = (data.likelyEnjoy || []).slice(0, 2)
  return (
    <div style={{ background:'oklch(16% 0.025 272 / 0.7)', border:'1px solid oklch(30% 0.04 272 / 0.5)', borderRadius:16, padding:'24px 26px', marginBottom:28, animation:'slideUp 0.4s ease', backdropFilter:'blur(8px)' }}>
      <p style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:T.accent, marginBottom:10 }}>Your read</p>
      <p style={{ fontSize:'1.35rem', fontWeight:800, color:T.textPri, letterSpacing:'-0.01em', lineHeight:1.3, marginBottom:14 }}>{data.headline}</p>
      {topEnjoy.length > 0 && (
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:data.nudge ? 14 : 0 }}>
          {topEnjoy.map((item, i) => (
            <span key={i} style={{ fontSize:'0.92rem', fontWeight:600, color:T.textPri, background:T.accentDim, border:`1px solid ${T.accent}30`, borderRadius:99, padding:'6px 14px' }}>{item}</span>
          ))}
        </div>
      )}
      {data.nudge && <p style={{ fontSize:'1rem', fontWeight:500, color:T.textSec, lineHeight:1.5 }}>{data.nudge}</p>}
    </div>
  )
}

function NicheCard({ sport, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:'flex', alignItems:'center', gap:12, background:T.surface, border:`1px solid ${hov ? T.pink + '60' : T.border}`, borderRadius:12, padding:'14px 14px', cursor:'pointer', fontFamily:'inherit', textAlign:'left', transition:'all 0.15s', boxShadow:hov ? `0 0 24px ${T.pinkDim}` : 'none', transform:hov ? 'translateY(-1px)' : 'none', width:'100%' }}>
      <span style={{ fontSize:'1.6rem', flexShrink:0 }}>{sport.icon}</span>
      <div style={{ flex:1, minWidth:0 }}>
        <p style={{ fontSize:'0.92rem', fontWeight:700, color:T.textPri, marginBottom:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{sport.name}</p>
        <p style={{ fontSize:'0.76rem', color:T.textMut, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{sport.pitch}</p>
      </div>
      <span style={{ color:hov ? T.pink : T.textMut, fontSize:'0.95rem', flexShrink:0, transition:'color 0.15s' }}>→</span>
    </button>
  )
}

function NicheRail({ tags, onSelect }) {
  const [seed, setSeed] = useState(0)
  const picks = useMemo(() => getNicheSuggestions(tags, 4), [tags, seed])
  if (!picks.length) return null
  return (
    <div style={{ marginTop:48 }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:6, gap:12, flexWrap:'wrap' }}>
        <div>
          <p style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:T.pink, marginBottom:6 }}>Niche corner</p>
          <h3 style={{ fontSize:'1.4rem', fontWeight:800, letterSpacing:'-0.02em', color:T.textPri }}>Or try something stranger.</h3>
        </div>
        <button onClick={() => setSeed(s => s + 1)}
          style={{ background:T.surface, border:`1px solid ${T.border}`, borderRadius:99, padding:'6px 14px', fontSize:'0.78rem', fontWeight:600, color:T.textSec, cursor:'pointer', fontFamily:'inherit', transition:'all 0.14s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHi}
          onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
          ↻ Shuffle
        </button>
      </div>
      <p style={{ fontSize:'0.92rem', color:T.textMut, marginBottom:18, lineHeight:1.55 }}>
        Sports we don't recommend by default — but plenty of people love. Worth a look.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:10 }}>
        {picks.map(sport => (
          <NicheCard key={sport.id} sport={sport} onClick={() => onSelect(sport.id)} />
        ))}
      </div>
    </div>
  )
}

export default function ResultsPage({ initialTags, personalised, onSelect, onBack, onBobHint }) {
  const [tags, setTags] = useState(initialTags || [])
  const discovery = useMemo(() => getDiscovery(tags, null), [tags])

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
      <p style={{ fontSize:'1rem', color:T.textMut, marginBottom: personalised ? 20 : 28 }}>Pick one and explore it. Not a final verdict — a good first experiment.</p>

      <PersonalisedInsight data={personalised} />

      <div style={{ marginBottom:28 }}>
        <SpotlightSearch onSelect={onSelect} onBobHint={onBobHint} />
      </div>

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

      <NicheRail tags={tags} onSelect={onSelect} />
    </div>
  )
}
