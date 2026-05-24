import { useState } from 'react'
import { SPORT_META } from '../data/sportMeta'
import { T } from '../tokens'

export default function DiscoveryCard({ cat, sport, isTop, onClick }) {
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
            {isTop && <div style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.6)', marginTop:3 }}>Strongest match this round</div>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding:'16px 20px 20px', display:'flex', flexDirection:'column', gap:12 }}>
        <p style={{ fontSize:'0.95rem', color:T.textSec, lineHeight:1.6 }}>{sport.pitch}</p>
        {meta.socialProof && (
          <p style={{ fontSize:'0.8rem', color:T.textMut, lineHeight:1.5 }}>{meta.socialProof}</p>
        )}
        {meta.actionBridge && (
          <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:T.surfaceHi, borderRadius:10, padding:'10px 14px', border:`1px solid ${T.border}` }}>
            <span style={{ color:cat.color, fontWeight:700, flexShrink:0, marginTop:1 }}>→</span>
            <p style={{ fontSize:'0.88rem', color:T.textSec, lineHeight:1.5 }}>{meta.actionBridge}</p>
          </div>
        )}
        <div style={{ color:cat.color, fontSize:'0.9rem', fontWeight:700, display:'flex', alignItems:'center', gap:4, marginTop:4 }}>
          See first steps <span style={{ transform: hov ? 'translateX(4px)' : 'none', transition:'transform 0.15s', display:'inline-block' }}>→</span>
        </div>
      </div>
    </div>
  )
}
