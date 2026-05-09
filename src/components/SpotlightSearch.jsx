import { useState, useMemo, useEffect, useRef } from 'react'
import SPORTS from '../data/sports'
import { SPORT_META } from '../data/sportMeta'
import { T } from '../tokens'

export default function SpotlightSearch({ onSelect, onBobHint }) {
  const [query,     setQuery]    = useState('')
  const [open,      setOpen]     = useState(false)
  const [activeIdx, setActiveIdx]= useState(0)
  const inputRef = useRef(null)

  const allSports = useMemo(() => Object.values(SPORTS).sort((a, b) => a.name.localeCompare(b.name)), [])

  const filtered = useMemo(() => {
    if (!query.trim()) return allSports
    const q = query.toLowerCase()
    return allSports.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.pitch && s.pitch.toLowerCase().includes(q)) ||
      s.fitTags.some(t => t.replace('_', ' ').includes(q))
    )
  }, [query, allSports])

  useEffect(() => { setActiveIdx(0) }, [query])

  function handleKey(e) {
    if (!open) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && filtered[activeIdx]) { choose(filtered[activeIdx].id) }
    if (e.key === 'Escape') { setOpen(false) }
  }

  function handleChange(e) {
    setQuery(e.target.value)
    setOpen(true)
    onBobHint?.(e.target.value)
  }

  function choose(id) { onSelect(id); setOpen(false); setQuery('') }

  return (
    <div style={{ position:'relative', width:'100%', maxWidth:580, margin:'0 auto' }}>
      {/* Input */}
      <div style={{ display:'flex', alignItems:'center', gap:12, background:'oklch(17% 0.02 265 / 0.85)', backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)', border:`1px solid ${open ? T.borderHi : T.border}`, borderRadius:16, padding:'14px 20px', boxShadow: open ? `0 0 0 3px ${T.accentDim}, 0 8px 32px rgba(0,0,0,0.4)` : '0 4px 16px rgba(0,0,0,0.3)', transition:'all 0.2s ease' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.textMut} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 160)}
          onKeyDown={handleKey}
          placeholder="Search any sport or activity…"
          style={{ flex:1, background:'none', border:'none', outline:'none', fontSize:'1.1rem', color:T.textPri, fontFamily:'inherit', fontWeight:500 }}
        />
        {query && (
          <button onClick={() => { setQuery(''); inputRef.current?.focus() }} style={{ background:'none', border:'none', cursor:'pointer', color:T.textMut, fontSize:'1rem', lineHeight:1, padding:0 }}>✕</button>
        )}
        <kbd style={{ fontSize:'0.72rem', color:T.textMut, background:T.surfaceHi, border:`1px solid ${T.border}`, borderRadius:6, padding:'3px 8px', fontFamily:'inherit', whiteSpace:'nowrap' }}>↵ select</kbd>
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <div style={{ position:'absolute', top:'calc(100% + 8px)', left:0, right:0, background:'oklch(14% 0.018 265 / 0.97)', backdropFilter:'blur(32px)', WebkitBackdropFilter:'blur(32px)', border:`1px solid ${T.border}`, borderRadius:16, overflow:'hidden', maxHeight:380, overflowY:'auto', zIndex:500, boxShadow:'0 20px 60px rgba(0,0,0,0.6)', animation:'fadeIn 0.15s ease' }}>
          {!query && (
            <div style={{ padding:'10px 20px 6px', fontSize:'0.68rem', fontWeight:700, color:T.textMut, textTransform:'uppercase', letterSpacing:'0.1em' }}>All activities</div>
          )}
          {filtered.map((sport, i) => {
            const meta = SPORT_META?.[sport.id] || {}
            const [g1] = meta.gradient || ['oklch(35% 0.12 272)']
            return (
              <div
                key={sport.id}
                onMouseDown={() => choose(sport.id)}
                style={{ display:'flex', alignItems:'center', gap:14, padding:'11px 20px', cursor:'pointer', background: i === activeIdx ? T.surfaceHi : 'transparent', borderTop: i > 0 ? `1px solid ${T.border}` : 'none', transition:'background 0.1s' }}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <div style={{ width:40, height:40, borderRadius:10, background:`linear-gradient(135deg, ${g1}, oklch(14% 0.01 265))`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.35rem', flexShrink:0 }}>
                  {sport.icon}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:'0.97rem', fontWeight:600, color:T.textPri, marginBottom:2 }}>{sport.name}</p>
                  <p style={{ fontSize:'0.8rem', color:T.textMut, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{sport.pitch}</p>
                </div>
                <div style={{ display:'flex', gap:4, flexShrink:0 }}>
                  {sport.fitTags.slice(0, 2).map(t => (
                    <span key={t} style={{ fontSize:'0.62rem', fontWeight:700, color:T.textMut, background:T.surface, borderRadius:99, padding:'2px 8px', textTransform:'uppercase', letterSpacing:'0.05em', whiteSpace:'nowrap' }}>
                      {t.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
