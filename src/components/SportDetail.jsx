import { useState, useEffect } from 'react'
import SPORTS from '../data/sports'
import { SPORT_META } from '../data/sportMeta'
import { LS } from '../logic/storage'
import { T } from '../tokens'

function Label({ children, color }) {
  return (
    <p style={{ fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color: color || T.accent, marginBottom:8 }}>
      {children}
    </p>
  )
}

function InfoBlock({ label, text, color, dimColor }) {
  return (
    <div style={{ background:dimColor, borderRadius:10, padding:'14px 18px', border:`1px solid ${color}20` }}>
      <Label color={color}>{label}</Label>
      <p style={{ fontSize:'1rem', color:T.textSec, lineHeight:1.65 }}>{text}</p>
    </div>
  )
}

function DetailCard({ children, title, style: s = {} }) {
  return (
    <div style={{ background:T.surface, border:`1px solid ${T.border}`, borderRadius:14, padding:'24px 22px', display:'flex', flexDirection:'column', gap:16, ...s }}>
      {title && <Label>{title}</Label>}
      {children}
    </div>
  )
}

export default function SportDetail({ sportId, tags, onBack, onRetake }) {
  const sport = SPORTS[sportId]
  const guide = sport?.guide
  const meta  = SPORT_META?.[sportId] || {}

  const [cl, setCL] = useState(() => LS.loadChecklist())
  const [wt, setWT] = useState(() => LS.getWillTry())
  const [tr, setTR] = useState(() => LS.getTried())

  useEffect(() => {
    setCL(LS.loadChecklist())
    setWT(LS.getWillTry())
    setTR(LS.getTried())
  }, [sportId])

  if (!sport) return null

  const [g1, g2] = meta.gradient || ['oklch(30% 0.12 272)', 'oklch(18% 0.06 272)']
  const done  = guide?.checklist?.filter(i => cl[i]).length || 0
  const total = guide?.checklist?.length || 0

  function toggle(item) {
    const n = { ...cl, [item]: !cl[item] }
    setCL(n)
    LS.saveChecklist(n)
  }

  return (
    <div style={{ width:'100%', maxWidth:560, margin:'0 auto', padding:'40px 16px 80px', position:'relative', zIndex:1 }}>
      <button
        onClick={onBack}
        style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:500, color:T.textMut, cursor:'pointer', padding:0, marginBottom:28, display:'flex', alignItems:'center', gap:6, transition:'color 0.15s' }}
        onMouseEnter={e => e.currentTarget.style.color = T.textPri}
        onMouseLeave={e => e.currentTarget.style.color = T.textMut}
      >← Back to results</button>

      {/* Hero */}
      <div style={{ background:`linear-gradient(135deg, ${g1} 0%, ${g2} 100%)`, borderRadius:16, padding:'32px 28px', marginBottom:24, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right:-16, top:-16, fontSize:'8rem', opacity:0.1, filter:'blur(3px)', transform:'rotate(12deg)', userSelect:'none' }}>{sport.icon}</div>
        <div style={{ fontSize:'clamp(3rem,10vw,4rem)', lineHeight:1, marginBottom:12, filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>{sport.icon}</div>
        <h1 style={{ fontSize:'clamp(2.2rem,7vw,3rem)', fontWeight:800, letterSpacing:'-0.03em', color:'#fff', lineHeight:1.05, marginBottom:8 }}>{sport.name}</h1>
        <p style={{ fontSize:'0.92rem', color:'rgba(255,255,255,0.6)' }}>Worth trying — not a final answer.</p>
      </div>

      {/* Action bridge */}
      {meta.actionBridge && (
        <div style={{ background:T.accentDim, border:`1px solid ${T.accent}30`, borderRadius:12, padding:'16px 20px', marginBottom:20, display:'flex', gap:12, alignItems:'flex-start' }}>
          <span style={{ color:T.accent, fontWeight:700, fontSize:'1.1rem', flexShrink:0 }}>→</span>
          <div>
            <p style={{ fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:T.accent, marginBottom:4 }}>Try this first</p>
            <p style={{ fontSize:'1rem', color:T.textPri, fontWeight:500, lineHeight:1.5 }}>{meta.actionBridge}</p>
          </div>
        </div>
      )}

      {/* Will-try state */}
      {tr ? (
        <div style={{ background:T.greenDim, border:`1px solid ${T.green}30`, borderRadius:12, padding:'18px 20px', marginBottom:20, display:'flex', gap:14, alignItems:'center' }}>
          <span style={{ fontSize:'1.5rem' }}>🎉</span>
          <div>
            <p style={{ fontSize:'1rem', fontWeight:700, color:T.green, marginBottom:3 }}>You tried it. Nice work.</p>
            <p style={{ fontSize:'0.9rem', color:T.textSec }}>Go back and explore something else.</p>
          </div>
        </div>
      ) : wt ? (
        <div style={{ background:T.accentDim, border:`1px solid ${T.accent}30`, borderRadius:12, padding:'14px 20px', marginBottom:20 }}>
          <p style={{ fontSize:'0.95rem', color:T.textSec, lineHeight:1.6 }}>✓ You said you'd try it. Work through the checklist below.</p>
        </div>
      ) : (
        <div style={{ marginBottom:20 }}>
          <button
            onClick={() => { setWT(true); LS.setWillTry(true) }}
            className="btn btn-primary btn-full"
          >
            I'll try this this month →
          </button>
        </div>
      )}

      <div style={{ height:1, background:T.border, marginBottom:20 }} />

      <DetailCard title="Why this is worth trying" style={{ marginBottom:14 }}>
        <p style={{ fontSize:'1.05rem', color:T.textSec, lineHeight:1.7 }}>{guide?.whyItFits}</p>
      </DetailCard>

      <DetailCard title="Your first step this week" style={{ marginBottom:14 }}>
        <p style={{ fontSize:'1rem', color:T.textSec, lineHeight:1.7 }}>{guide?.howToStart}</p>
        {tags?.includes('shy_solo')    && guide?.adaptive?.shy_solo    && <InfoBlock label="Starting alone"      text={guide.adaptive.shy_solo}    color={T.accent} dimColor={T.accentDim} />}
        {tags?.includes('social_team') && guide?.adaptive?.social_team && <InfoBlock label="Finding a group"     text={guide.adaptive.social_team} color={T.green}  dimColor={T.greenDim}  />}
        {tags?.includes('competitive') && guide?.adaptive?.competitive  && <InfoBlock label="Competitive path"    text={guide.adaptive.competitive}  color={T.accent} dimColor={T.accentDim} />}
        {tags?.includes('low_impact')  && guide?.adaptive?.low_impact   && <InfoBlock label="Low pressure start"  text={guide.adaptive.low_impact}   color={T.amber}  dimColor={T.amberDim}  />}
      </DetailCard>

      <DetailCard title="What to bring" style={{ marginBottom:14 }}>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
          {guide?.equipment?.map((eq, i) => {
            const opt = ['nice','later','rent','club'].includes(eq.tier)
            return (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontSize:'1rem', color: opt ? T.textMut : T.textSec, lineHeight:1.5 }}>
                <span style={{ color: opt ? T.textMut : T.accent, fontWeight:700, flexShrink:0, fontSize:'0.85rem', marginTop:2 }}>{opt ? '○' : '✓'}</span>
                <span>
                  {eq.item || eq}
                  {opt && eq.tier && (
                    <span style={{ fontSize:'0.8rem', color:T.textMut, marginLeft:8 }}>
                      ({eq.tier === 'later' ? 'not yet' : eq.tier === 'rent' ? 'rent first' : eq.tier === 'club' ? 'club provides' : 'optional'})
                    </span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </DetailCard>

      {tags?.includes('no_equipment') && guide?.adaptive?.no_equipment && (
        <DetailCard style={{ marginBottom:14, borderColor:T.amber + '40' }}>
          <Label color={T.amber}>If you have no gear</Label>
          <p style={{ fontSize:'1rem', color:T.textSec, lineHeight:1.7 }}>{guide.adaptive.no_equipment}</p>
        </DetailCard>
      )}
      {tags?.includes('low_budget') && guide?.adaptive?.low_budget && (
        <DetailCard style={{ marginBottom:14, borderColor:T.green + '40' }}>
          <Label color={T.green}>Free and low-cost options</Label>
          <p style={{ fontSize:'1rem', color:T.textSec, lineHeight:1.7 }}>{guide.adaptive.low_budget}</p>
        </DetailCard>
      )}

      <DetailCard title="Finding it near you" style={{ marginBottom:14 }}>
        <p style={{ fontSize:'1rem', color:T.textSec, lineHeight:1.7 }}>
          Search for the most beginner-coded option you can find: intro, open play, trial class, learn-to, or no experience needed.
        </p>
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent(sport.name + ' beginner class near me')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:'0.92rem', color:T.accent, fontWeight:600, textDecoration:'none', marginTop:4 }}
        >
          Search "{sport.name} beginner class near me" →
        </a>
      </DetailCard>

      {/* Checklist */}
      <DetailCard style={{ marginBottom:28 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4 }}>
          <Label>First step checklist</Label>
          {done > 0 && <span style={{ fontSize:'0.8rem', color:T.accent, fontWeight:700 }}>{done}/{total} done</span>}
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {guide?.checklist?.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(item)}
              style={{ display:'flex', alignItems:'flex-start', gap:12, background:'none', border:'none', cursor:'pointer', padding:'4px 0', textAlign:'left', fontFamily:'inherit' }}
            >
              <span style={{ width:22, height:22, borderRadius:7, border:`1.5px solid ${cl[item] ? T.green : T.border}`, background: cl[item] ? T.green : 'transparent', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1, transition:'all 0.15s' }}>
                {cl[item] && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l4 4 6-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
              <span style={{ fontSize:'1rem', color: cl[item] ? T.textMut : T.textSec, textDecoration: cl[item] ? 'line-through' : 'none', lineHeight:1.5, transition:'color 0.15s' }}>
                {item}
              </span>
            </button>
          ))}
        </div>
        {done === total && total > 0 && !tr && (
          <div style={{ marginTop:12 }}>
            <p style={{ fontSize:'0.92rem', color:T.textSec, marginBottom:12 }}>All steps done — did you actually go?</p>
            <button
              onClick={() => { setTR(true); LS.setTried(true) }}
              className="btn btn-ghost btn-full"
            >
              I tried it ✓
            </button>
          </div>
        )}
      </DetailCard>

      <div style={{ textAlign:'center' }}>
        <button
          onClick={onRetake}
          style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.9rem', color:T.textMut, cursor:'pointer', padding:'4px 0' }}
        >
          ← Back to results
        </button>
      </div>
    </div>
  )
}
