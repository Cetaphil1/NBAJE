import SPORTS from '../data/sports'
import { T } from '../tokens'

export default function HomeScreen({ onStart, savedResult, onContinue, onAbout }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', padding:'40px 16px 80px', position:'relative', zIndex:1 }}>
      <div style={{ width:'100%', maxWidth:480, textAlign:'center' }}>
        <p style={{ fontSize:'0.8rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:T.accent, marginBottom:20 }}>Activity Discovery</p>
        <h1 style={{ fontSize:'clamp(2.8rem, 9vw, 4.2rem)', fontWeight:800, lineHeight:1.05, letterSpacing:'-0.03em', color:T.textPri, marginBottom:18 }}>
          Find your next<br/>thing to try.
        </h1>
        <p style={{ fontSize:'1.1rem', color:T.textSec, lineHeight:1.7, marginBottom:44, maxWidth:380, margin:'0 auto 44px' }}>
          Six quick questions. Low-stakes suggestions. A first step you might actually do this week.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:14, alignItems:'center' }}>
          <button
            onClick={onStart}
            className="btn btn-primary"
            style={{ padding:'19px 52px', fontSize:'1.1rem' }}
          >
            Start the Quiz →
          </button>
          {savedResult?.sport && SPORTS[savedResult.sport] && (
            <button
              onClick={onContinue}
              style={{ display:'flex', alignItems:'center', gap:10, background:T.surface, border:`1px solid ${T.border}`, borderRadius:12, padding:'12px 20px', cursor:'pointer', fontFamily:'inherit', transition:'border-color 0.14s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHi}
              onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
            >
              <span style={{ fontSize:'1.2rem' }}>{SPORTS[savedResult.sport].icon}</span>
              <span style={{ fontSize:'0.9rem', color:T.textSec }}>
                Continue with <strong style={{ color:T.textPri }}>{SPORTS[savedResult.sport].name}</strong>
              </span>
            </button>
          )}
        </div>
        <p style={{ fontSize:'0.8rem', color:T.textMut, marginTop:40, lineHeight:1.6 }}>
          35+ activities · Small experiments · No pressure to become a whole new person
        </p>
        <button
          onClick={onAbout}
          style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.82rem', color:T.textMut, cursor:'pointer', padding:'4px 0', marginTop:6 }}
        >
          About this tool
        </button>
      </div>
    </div>
  )
}
