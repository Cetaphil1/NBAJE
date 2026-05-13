import { useState } from 'react'
import { SPORT_META } from '../data/sportMeta'
import { TAG_LABELS } from '../logic/scoring'
import { T } from '../tokens'

function MatchReason({ hit, color }) {
  const labels = (hit?.matchTags || []).map(t => TAG_LABELS[t] || t.replace(/_/g, ' '))
  if (!labels.length) {
    return (
      <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:T.surfaceHi, borderRadius:10, padding:'10px 14px', border:`1px solid ${T.border}` }}>
        <span style={{ color, fontWeight:700, flexShrink:0, marginTop:1 }}>?</span>
        <p style={{ fontSize:'0.86rem', color:T.textSec, lineHeight:1.5 }}>
          This is a broader suggestion, not a strong quiz match. Open it if the vibe sounds interesting.
        </p>
      </div>
    )
  }
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:T.surfaceHi, borderRadius:10, padding:'10px 14px', border:`1px solid ${T.border}` }}>
      <span style={{ color, fontWeight:700, flexShrink:0, marginTop:1 }}>✓</span>
      <p style={{ fontSize:'0.86rem', color:T.textSec, lineHeight:1.5 }}>
        Matched because you leaned toward <strong style={{ color:T.textPri }}>{labels.slice(0, 3).join(', ')}</strong>.
      </p>
    </div>
  )
}

export default function DiscoveryCard({ cat, sport, hit, isTop, onClick }) {
  const [hov, setHov] = useState(false)
  const meta = SPORT_META?.[sport.id] || {}
  const [g1, g2] = meta.gradient || ['oklch(30% 0.12 272)', 'oklch(18% 0.06 272)']

  return (
    <div
      onClick={onClick}
      style={{ background:T.surface, border:`1px solid ${hov ? cat.color + '60' : T.border}`, borderRadius:16, overflow:'hidden', cursor:'pointer', transition:'all 0.18s ease', gridColumn: isTop ? 'span 2' : undefined, boxShadow: hov ? `0 0 36px ${cat.dimColor}` : 'none', transform: hov ? 'translateY(-2px)' : 'none' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Gradient header */}
      <div style={{ background:`linear-gradient(135deg, ${g1} 0%, ${g2} 100%)`, padding: isTop ? '28px 24px 22px' : '20px 20px 18px', position:'relative', overflow:'hidden', minHeight: isTop ? 120 : 90 }}>
        <div style={{ position:'absolute', right:-12, top:-12, fontSize: isTop ? '6rem' : '5rem', opacity:0.12, filter:'blur(3px)', transform:'rotate(12deg)', userSelect:'none' }}>{sport.icon}</div>
        <div style={{ fontSize:'0.7rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'rgba(255,255,255,0.6)', marginBottom:10 }}>{cat.label}</div>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <span style={{ fontSize: isTop ? '2.8rem' : '2.2rem', lineHeight:1, filter:'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>{sport.icon}</span>
          <div>
            <div style={{ fontSize: isTop ? '1.5rem' : '1.2rem', fontWeight:800, color:'#fff', letterSpacing:'-0.02em', lineHeight:1.1 }}>{sport.name}</div>
            {isTop && <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.6)', marginTop:3 }}>Top match this session</div>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding:'16px 20px 20px', display:'flex', flexDirection:'column', gap:12 }}>
        <p style={{ fontSize:'0.95rem', color:T.textSec, lineHeight:1.6 }}>{sport.pitch}</p>
        <MatchReason hit={hit} color={cat.color} />
        {meta.actionBridge && (
          <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:T.surfaceHi, borderRadius:10, padding:'10px 14px', border:`1px solid ${T.border}` }}>
            <span style={{ color:cat.color, fontWeight:700, flexShrink:0, marginTop:1 }}>→</span>
            <p style={{ fontSize:'0.88rem', color:T.textSec, lineHeight:1.5 }}>{meta.actionBridge}</p>
          </div>
        )}
        <div style={{ color:cat.color, fontSize:'0.9rem', fontWeight:700, display:'flex', alignItems:'center', gap:4, marginTop:4 }}>
          Explore <span style={{ transform: hov ? 'translateX(4px)' : 'none', transition:'transform 0.15s', display:'inline-block' }}>→</span>
        </div>
      </div>
    </div>
  )
}
