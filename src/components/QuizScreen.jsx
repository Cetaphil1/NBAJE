import { useState } from 'react'
import { T } from '../tokens'

const Q_HUES = [280, 220, 145, 25, 185, 330]

function QuizBtn({ label, selected, accent, ghost, onClick }) {
  const [hov, setHov] = useState(false)
  const fillSel  = ghost ? `color-mix(in oklch, ${accent} 35%, white)` : accent
  const fillRest = ghost ? `color-mix(in oklch, ${accent} 22%, white)` : `color-mix(in oklch, ${accent} 78%, white)`
  const fillHov  = ghost ? `color-mix(in oklch, ${accent} 30%, white)` : `color-mix(in oklch, ${accent} 88%, white)`
  const bg = selected ? fillSel : hov ? fillHov : fillRest
  return (
    <button
      style={{
        flex: '0 0 auto', minWidth: 140, padding: '18px 28px',
        borderRadius: 14, fontSize: '1.05rem', fontWeight: 700,
        fontFamily: 'inherit', cursor: 'pointer', transition: 'all 0.15s ease',
        background: bg,
        border: `1.5px solid ${accent}60`,
        color: '#0a0a0a',
        boxShadow: (selected || hov) ? `0 0 28px ${accent}50` : 'none',
        transform: hov && !selected ? 'translateY(-2px)' : 'none',
      }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </button>
  )
}

export default function QuizScreen({ questions, qIndex, answers, navDir, onAnswer, onBack }) {
  const q   = questions[qIndex]
  const hue = Q_HUES[qIndex] || Q_HUES[0]
  const acc = `oklch(64% 0.26 ${hue})`
  if (!q) return null

  return (
    <>
      {/* Per-question color blob */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-20%', right:'-15%', width:'65vmax', height:'65vmax', borderRadius:'50%', background:`radial-gradient(circle, oklch(58% 0.28 ${hue}) 0%, transparent 70%)`, opacity:0.12, filter:'blur(70px)', transition:'background 0.8s ease' }} />
        <div style={{ position:'absolute', bottom:'-10%', left:'-10%', width:'45vmax', height:'45vmax', borderRadius:'50%', background:`radial-gradient(circle, oklch(58% 0.28 ${hue}) 0%, transparent 70%)`, opacity:0.07, filter:'blur(80px)', transition:'background 0.8s ease' }} />
      </div>

      <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', padding:'32px 16px', maxWidth:520, margin:'0 auto' }}>
        {/* Nav bar */}
        <div style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:28 }}>
          <button
            onClick={onBack}
            style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:500, color:T.textMut, cursor:'pointer', padding:0, transition:'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = T.textPri}
            onMouseLeave={e => e.currentTarget.style.color = T.textMut}
          >← Back</button>
          <span style={{ fontSize:'0.85rem', fontWeight:600, color:T.textMut, letterSpacing:'0.06em' }}>
            {qIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Progress line */}
        <div style={{ width:'100%', height:2, background:T.border, borderRadius:99, marginBottom:52, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${(qIndex / questions.length) * 100}%`, background:acc, borderRadius:99, transition:'width 0.4s cubic-bezier(0.4,0,0.2,1)' }} />
        </div>

        {/* Question */}
        <div
          key={qIndex}
          style={{ width:'100%', textAlign:'center', animation: navDir === 'back' ? 'slideFromLeft 0.22s ease' : 'slideFromRight 0.22s ease' }}
        >
          <p style={{ fontSize:'0.85rem', fontWeight:500, color:T.textMut, marginBottom:20, letterSpacing:'0.04em' }}>{q.hint}</p>
          <h2 style={{ fontSize:'clamp(1.7rem, 5vw, 2.4rem)', fontWeight:800, lineHeight:1.3, letterSpacing:'-0.02em', color:T.textPri, marginBottom:48 }}>{q.text}</h2>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <QuizBtn
              label={q.yes.label}
              selected={answers[qIndex]?.choice === 'yes'}
              accent={acc}
              onClick={() => onAnswer({ choice: 'yes', tags: q.yes.tags })}
            />
            <QuizBtn
              label={q.no.label}
              selected={answers[qIndex]?.choice === 'no'}
              accent={acc}
              ghost
              onClick={() => onAnswer({ choice: 'no', tags: q.no.tags })}
            />
          </div>
        </div>

        {/* Step dots */}
        <div style={{ display:'flex', gap:8, marginTop:52, alignItems:'center' }}>
          {questions.map((_, i) => (
            <span key={i} style={{ width: i === qIndex ? 20 : 7, height:7, borderRadius:99, background: i < qIndex ? acc : i === qIndex ? acc : T.border, opacity: i < qIndex ? 0.5 : 1, transition:'all 0.3s ease', display:'inline-block' }} />
          ))}
        </div>
      </div>
    </>
  )
}
