import { useState, useEffect } from 'react'
import SPORTS from '../data/sports'
import { SPORT_META } from '../data/sportMeta'
import { T } from '../tokens'

function Label({ children, color }) {
  return <p style={{ fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:color||T.accent, marginBottom:8 }}>{children}</p>
}

function KeyCard({ icon, question, children, style: s = {} }) {
  return (
    <div style={{ background:T.surface, border:`1px solid ${T.border}`, borderRadius:16, padding:'26px 22px', display:'flex', flexDirection:'column', gap:14, ...s }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ fontSize:'1.5rem' }}>{icon}</span>
        <p style={{ fontSize:'1.05rem', fontWeight:700, color:T.textPri, lineHeight:1.4 }}>{question}</p>
      </div>
      {children}
    </div>
  )
}

function buildWeeklyPlan(sport, level) {
  const sn = sport.name
  const plans = {
    beginner: [
      { week:'Week 1', focus:'Make it less unknown', tasks:[
        { label:`Watch what a first ${sn} session actually looks like`, ytQuery:`first ${sn} session beginner what to expect` },
        { label:`Try 10–15 minutes of easy ${sn} basics, no scorekeeping`, ytQuery:`easy ${sn} basics for complete beginners` },
        { label:'Write down what you can borrow, rent, or skip for now' },
        { label:'Save one local place, class, court, trail, or club to revisit' },
      ]},
      { week:'Week 2', focus:'Try the real setting once', tasks:[
        { label:`Do one gentle 20-min ${sn} basics session`,         ytQuery:`20 minute beginner ${sn} basics` },
        { label:`Watch a "${sn} mistakes beginners make" video`,     ytQuery:`top ${sn} mistakes beginners make` },
        { label:'Visit, book, or message one local option you saved' },
        { label:'Note what felt awkward, what felt fun, and what surprised you' },
      ]},
      { week:'Week 3', focus:'Repeat the part that worked', tasks:[
        { label:`Practise one beginner ${sn} skill for 15 minutes`,  ytQuery:`beginner ${sn} skill tutorial` },
        { label:`Do a light ${sn}-friendly mobility or conditioning session`, ytQuery:`beginner ${sn} mobility conditioning` },
        { label:'Ask one beginner question: staff, coach, player, or online group' },
        { label:'Track one small improvement, even if it is just feeling less lost' },
      ]},
      { week:'Week 4', focus:'Choose your kind of yes', tasks:[
        { label:'Do two sessions this week if your body feels ready' },
        { label:`Watch a realistic "${sn} next steps" guide`,        ytQuery:`${sn} next steps after beginner` },
        { label:'Decide what matters most: cost, people, schedule, or progress' },
        { label:'Pick the next step — class, drop-in, solo routine, or a different match' },
      ]},
    ],
    intermediate: [
      { week:'Week 1', focus:'Assess your baseline', tasks:[
        { label:`Do a full ${sn} session and note your weaknesses` },
        { label:`Watch "${sn} self-assessment" video`,               ytQuery:`${sn} self assessment intermediate` },
        { label:'Find someone slightly better than you to train with' },
        { label:'Research local leagues or structured training options' },
      ]},
      { week:'Week 2', focus:'Target a weak point', tasks:[
        { label:'Dedicate 80% of each session to your weakest skill' },
        { label:`Watch one ${sn} technique breakdown`,               ytQuery:`${sn} technique breakdown` },
        { label:`Do a 30-min ${sn} drill workout`,                   ytQuery:`30 minute ${sn} drill workout` },
        { label:'Train 3× this week' },
      ]},
      { week:'Week 3', focus:'Apply under pressure', tasks:[
        { label:'Join a scrimmage, pickup game, or competitive setting' },
        { label:`Watch a ${sn} match for tactics`,                   ytQuery:`${sn} match analysis tactics` },
        { label:'Get feedback from someone experienced' },
        { label:'Log your progress vs Week 1' },
      ]},
      { week:'Week 4', focus:'Plan the next month', tasks:[
        { label:'Identify one goal for the next 4 weeks' },
        { label:'Sign up for a league, tournament, or coaching session' },
        { label:`Watch "${sn} pro habits" for inspiration`,          ytQuery:`${sn} pro habits training` },
        { label:'Make it a standing commitment on your calendar' },
      ]},
    ],
    advanced: [
      { week:'Week 1', focus:'Set a measurable goal', tasks:[
        { label:'Define one specific performance target for this month' },
        { label:'Review the last 30 days — what held you back?' },
        { label:`Watch elite ${sn} training breakdowns`,             ytQuery:`elite ${sn} training breakdown` },
        { label:'Find a training partner or coach at your level' },
      ]},
      { week:'Week 2', focus:'Deliberate practice', tasks:[
        { label:'Isolate and drill the skill gap from your review' },
        { label:`Study advanced ${sn} technique`,                    ytQuery:`advanced ${sn} technique tutorial` },
        { label:'Increase training frequency by 1 session/week' },
        { label:'Study competition footage or advanced technique' },
      ]},
      { week:'Week 3', focus:'Compete or test', tasks:[
        { label:'Enter a tournament, race, or competitive event' },
        { label:`Watch ${sn} competition strategy`,                  ytQuery:`${sn} competition strategy tips` },
        { label:'Record yourself — compare to Week 1 baseline' },
        { label:"Debrief with a partner: what worked, what didn't?" },
      ]},
      { week:'Week 4', focus:'Recover and plan', tasks:[
        { label:'Lighter training week — active recovery' },
        { label:`Watch ${sn} recovery and mobility routine`,         ytQuery:`${sn} recovery mobility routine` },
        { label:'Document what you learned this month' },
        { label:'Set the next 30-day target and schedule it now' },
      ]},
    ],
  }
  return plans[level] || plans.beginner
}

function WeekBlock({ week, sportId }) {
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`ntt_wk_${sportId}_${week.week}`) || '[]') } catch(e) { return [] }
  })
  function toggle(i) {
    const n = done.includes(i) ? done.filter(x => x !== i) : [...done, i]
    setDone(n)
    localStorage.setItem(`ntt_wk_${sportId}_${week.week}`, JSON.stringify(n))
  }
  const allDone = done.length === week.tasks.length
  return (
    <div style={{ borderRadius:10, border:`1px solid ${allDone ? T.accent + '50' : T.border}`, overflow:'hidden', transition:'border-color 0.2s' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', background:allDone ? T.accentDim : T.surfaceHi, borderBottom:`1px solid ${T.border}` }}>
        <span style={{ fontSize:'0.7rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.1em', color:allDone ? T.accent : T.textMut }}>{week.week}</span>
        <span style={{ fontSize:'0.85rem', fontWeight:600, color:allDone ? T.accent : T.textSec }}>— {week.focus}</span>
        {allDone && <span style={{ marginLeft:'auto', fontSize:'0.75rem', color:T.accent, fontWeight:700 }}>✓ Done</span>}
        {!allDone && done.length > 0 && <span style={{ marginLeft:'auto', fontSize:'0.72rem', color:T.textMut }}>{done.length}/{week.tasks.length}</span>}
      </div>
      <div style={{ padding:'12px 16px', display:'flex', flexDirection:'column', gap:10 }}>
        {week.tasks.map((task, i) => {
          const tObj = typeof task === 'string' ? { label: task } : task
          const isDone = done.includes(i)
          const ytSearch = tObj.ytQuery
            ? `https://www.youtube.com/results?search_query=${encodeURIComponent(tObj.ytQuery)}`
            : null
          return (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
              <button onClick={() => toggle(i)}
                style={{ display:'flex', alignItems:'flex-start', gap:10, background:'none', border:'none', cursor:'pointer', padding:'2px 0', textAlign:'left', fontFamily:'inherit', flex:1, minWidth:0 }}>
                <span style={{ width:22, height:22, borderRadius:6, border:`1.5px solid ${isDone ? T.accent : T.border}`, background:isDone ? T.accent : 'transparent', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, transition:'all 0.15s' }}>
                  {isDone && <svg width="11" height="9" viewBox="0 0 12 10" fill="none"><path d="M1 5l4 4 6-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </span>
                <span style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:8, fontSize:'1rem', color:isDone ? T.textMut : T.textPri, textDecoration:isDone ? 'line-through' : 'none', lineHeight:1.5 }}>
                  {tObj.label}
                  {ytSearch && (
                    <button
                      onClick={e => { e.preventDefault(); e.stopPropagation(); window.open(ytSearch, '_blank', 'noopener,noreferrer') }}
                      style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:'0.78rem', fontWeight:700, color:T.pink, background:T.pinkDim, border:`1px solid ${T.pink}30`, borderRadius:99, padding:'3px 10px', cursor:'pointer', fontFamily:'inherit', whiteSpace:'nowrap' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      open search ↗
                    </button>
                  )}
                </span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ChecklistBlock({ items, sportId }) {
  const [cl, setCL] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`ntt_cl_${sportId}`) || '{}') } catch(e) { return {} }
  })
  function toggle(item) {
    const n = { ...cl, [item]: !cl[item] }
    setCL(n)
    localStorage.setItem(`ntt_cl_${sportId}`, JSON.stringify(n))
  }
  const done = items.filter(i => cl[i]).length
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
      {done > 0 && <p style={{ fontSize:'0.8rem', color:T.accent, fontWeight:700 }}>{done}/{items.length} done</p>}
      {items.map((item, i) => (
        <button key={i} onClick={() => toggle(item)} style={{ display:'flex', alignItems:'flex-start', gap:12, background:'none', border:'none', cursor:'pointer', padding:'4px 0', textAlign:'left', fontFamily:'inherit' }}>
          <span style={{ width:22, height:22, borderRadius:7, border:`1.5px solid ${cl[item] ? T.accent : T.border}`, background:cl[item] ? T.accent : 'transparent', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1, transition:'all 0.15s' }}>
            {cl[item] && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l4 4 6-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </span>
          <span style={{ fontSize:'1rem', color:cl[item] ? T.textMut : T.textSec, textDecoration:cl[item] ? 'line-through' : 'none', lineHeight:1.5 }}>{item}</span>
        </button>
      ))}
    </div>
  )
}

function NearbyPlaces({ sport, zip }) {
  const [places, setPlaces] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!zip || !sport) return
    setLoading(true); setError(null)
    if (!window.claude?.complete) {
      setLoading(false)
      setPlaces([{
        name: `Search for ${sport.name} near ${zip}`,
        type: 'Google Maps',
        address: zip,
        description: `Click to find ${sport.name.toLowerCase()} venues, clubs, and courts near you.`,
        distance: '—'
      }])
      return
    }
    window.claude.complete({
      messages: [{
        role: 'user',
        content: `Generate 4 realistic local places for someone wanting to try "${sport.name}" near zip code "${zip}". Return ONLY a JSON array, no markdown. Each object: { "name": string, "type": string, "address": string, "description": string, "distance": string }`
      }]
    }).then(text => {
      try {
        const raw = text.replace(/```json|```/g, '').trim()
        setPlaces(JSON.parse(raw))
      } catch(e) { setError('Could not load nearby places.') }
      setLoading(false)
    }).catch(() => { setError('Could not load nearby places.'); setLoading(false) })
  }, [zip, sport?.id])

  const mapsUrl = p =>
    `https://www.google.com/maps/search/${encodeURIComponent(p.name + ' ' + p.address)}`

  if (loading) return (
    <div style={{ padding:'20px', textAlign:'center' }}>
      <div style={{ width:24, height:24, border:`2px solid ${T.border}`, borderTopColor:T.accent, borderRadius:'50%', animation:'spin 0.8s linear infinite', margin:'0 auto 10px' }} />
      <p style={{ fontSize:'0.9rem', color:T.textMut }}>Finding places near {zip}…</p>
    </div>
  )
  if (error) return <p style={{ fontSize:'0.9rem', color:T.textMut, padding:'8px 0' }}>{error}</p>
  if (!places) return null

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
      {places.map((p, i) => (
        <a key={i} href={mapsUrl(p)} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', gap:14, background:T.surfaceHi, borderRadius:12, padding:'14px 16px', border:`1px solid ${T.border}`, textDecoration:'none', transition:'border-color 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHi}
          onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
          <div style={{ width:42, height:42, borderRadius:10, background:T.surface, border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0 }}>📍</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
              <p style={{ fontSize:'0.97rem', fontWeight:700, color:T.textPri }}>{p.name}</p>
              <span style={{ fontSize:'0.72rem', fontWeight:700, color:T.textMut, background:T.surface, borderRadius:99, padding:'2px 8px', whiteSpace:'nowrap' }}>{p.type}</span>
              <span style={{ fontSize:'0.75rem', color:T.textMut, marginLeft:'auto', flexShrink:0 }}>{p.distance}</span>
            </div>
            <p style={{ fontSize:'0.8rem', color:T.textMut, marginBottom:4 }}>{p.address}</p>
            <p style={{ fontSize:'0.88rem', color:T.textSec, lineHeight:1.5 }}>{p.description}</p>
          </div>
        </a>
      ))}
      <a href={`https://www.google.com/maps/search/${encodeURIComponent(sport.name + ' near ' + zip)}`}
        target="_blank" rel="noopener noreferrer"
        style={{ fontSize:'0.88rem', color:T.accent, fontWeight:600, textDecoration:'none', textAlign:'center', padding:'8px 0' }}>
        View all on Google Maps →
      </a>
    </div>
  )
}

const LEVEL_OPTIONS = [
  { id:'beginner',     label:'Complete beginner',     desc:"I've never done this or barely tried it", icon:'🌱' },
  { id:'intermediate', label:'Some experience',        desc:"I've tried it a few times but not consistently", icon:'🏃' },
  { id:'advanced',     label:'Been at it a while',     desc:"I train regularly and want to level up", icon:'🔥' },
]

export default function SportDetail({ sportId, tags, onBack, onRetake }) {
  const sport = SPORTS[sportId]
  const guide = sport?.guide
  const meta  = SPORT_META?.[sportId] || {}
  const isNiche = sport?.category === 'niche'

  const [flow,     setFlow]     = useState('start')
  const [level,    setLevel]    = useState(null)
  const [zip,      setZip]      = useState('')
  const [zipInput, setZipInput] = useState('')
  const [zipError, setZipError] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`ntt_flow_${sportId}`) || '{}')
      if (saved.level) setLevel(saved.level)
      if (saved.zip)   setZip(saved.zip)
      if (saved.flow)  setFlow(saved.flow)
    } catch(e) {}
  }, [sportId])

  function save(update) {
    try {
      const cur = JSON.parse(localStorage.getItem(`ntt_flow_${sportId}`) || '{}')
      localStorage.setItem(`ntt_flow_${sportId}`, JSON.stringify({ ...cur, ...update }))
    } catch(e) {}
  }

  function chooseLevel(l) { setLevel(l); save({ level:l, flow:'zip' }); setFlow('zip') }
  function submitZip() {
    const z = zipInput.trim()
    if (!/^\d{5}$/.test(z)) { setZipError(true); return }
    setZipError(false); setZip(z); save({ zip:z, flow:'plan' }); setFlow('plan')
  }

  if (!sport) return null

  const [g1, g2] = meta.gradient || ['oklch(26% 0.10 272)', 'oklch(14% 0.05 272)']
  const weeklyPlan = level ? buildWeeklyPlan(sport, level) : []

  // Niche sports — stripped-down view
  if (isNiche) {
    const ytSearch     = `https://www.youtube.com/results?search_query=${encodeURIComponent(sport.name + ' for beginners')}`
    const meetupSearch = `https://www.meetup.com/find/?keywords=${encodeURIComponent(sport.name)}`
    const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(sport.name + ' beginner club near me')}`
    return (
      <div style={{ width:'100%', maxWidth:580, margin:'0 auto', padding:'40px 16px 80px', position:'relative', zIndex:1 }}>
        <button onClick={onBack} style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:500, color:T.textMut, cursor:'pointer', padding:0, marginBottom:28, display:'flex', alignItems:'center', gap:6 }}
          onMouseEnter={e => e.currentTarget.style.color = T.textPri} onMouseLeave={e => e.currentTarget.style.color = T.textMut}>← Back to results</button>
        <div style={{ background:`linear-gradient(135deg, oklch(38% 0.14 272) 0%, oklch(18% 0.06 272) 100%)`, borderRadius:16, padding:'32px 28px', marginBottom:18, position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', right:-16, top:-16, fontSize:'8rem', opacity:0.08, filter:'blur(3px)', transform:'rotate(12deg)', userSelect:'none' }}>{sport.icon}</div>
          <span style={{ display:'inline-block', fontSize:'0.68rem', fontWeight:800, letterSpacing:'0.12em', textTransform:'uppercase', color:'#fff', background:'rgba(255,255,255,0.12)', borderRadius:99, padding:'4px 10px', marginBottom:12 }}>Niche pick</span>
          <div style={{ fontSize:'clamp(3rem,10vw,4rem)', lineHeight:1, marginBottom:12 }}>{sport.icon}</div>
          <h1 style={{ fontSize:'clamp(2.2rem,7vw,3rem)', fontWeight:800, letterSpacing:'-0.03em', color:'#fff', lineHeight:1.05, marginBottom:6 }}>{sport.name}</h1>
          <p style={{ fontSize:'1.02rem', color:'#fff', opacity:0.92, lineHeight:1.5 }}>{sport.pitch}</p>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:18 }}>
          {sport.fitTags.map(t => (
            <span key={t} style={{ fontSize:'0.72rem', fontWeight:700, color:T.textSec, background:T.surfaceHi, border:`1px solid ${T.border}`, borderRadius:99, padding:'4px 10px', textTransform:'uppercase', letterSpacing:'0.06em' }}>{t.replace(/_/g,' ')}</span>
          ))}
        </div>
        <KeyCard icon="🧭" question="This one is a side quest.">
          <p style={{ fontSize:'0.95rem', color:T.textSec, lineHeight:1.6 }}>
            We do not have a full starter plan for every niche activity yet. Start with a little research, then look for a safe, beginner-friendly way to try it once.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:8 }}>
            {[
              { label:`Watch "${sport.name} for beginners"`, sub:'YouTube — ten minutes of real footage tells you more than a hype paragraph.', href:ytSearch, icon:'▶' },
              { label:`Find a local ${sport.name.toLowerCase()} group`, sub:'Meetup — look for intro sessions, open days, or beginner nights.', href:meetupSearch, icon:'👥' },
              { label:`Search for a beginner club near you`, sub:'Google — prioritize lessons, safety notes, and gear rental before buying anything.', href:googleSearch, icon:'🔎' },
            ].map((step, i) => (
              <a key={i} href={step.href} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', gap:14, background:T.surfaceHi, borderRadius:12, padding:'14px 16px', border:`1px solid ${T.border}`, textDecoration:'none', transition:'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHi}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
                <div style={{ width:36, height:36, borderRadius:10, background:T.surface, border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', flexShrink:0, color:T.textSec }}>{step.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:'0.97rem', fontWeight:700, color:T.textPri, marginBottom:2 }}>{step.label} <span style={{ color:T.textMut, fontWeight:500 }}>↗</span></p>
                  <p style={{ fontSize:'0.82rem', color:T.textMut, lineHeight:1.5 }}>{step.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </KeyCard>
        <div style={{ textAlign:'center', paddingTop:18 }}>
          <button onClick={onRetake} style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.9rem', color:T.textMut, cursor:'pointer', padding:'4px 0' }}>← Back to your matches</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width:'100%', maxWidth:580, margin:'0 auto', padding:'40px 16px 80px', position:'relative', zIndex:1 }}>
      <button onClick={onBack} style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.92rem', fontWeight:500, color:T.textMut, cursor:'pointer', padding:0, marginBottom:28, display:'flex', alignItems:'center', gap:6 }}
        onMouseEnter={e => e.currentTarget.style.color = T.textPri} onMouseLeave={e => e.currentTarget.style.color = T.textMut}>← Back to results</button>

      {/* Hero */}
      <div style={{ background:`linear-gradient(135deg, ${g1} 0%, ${g2} 100%)`, borderRadius:16, padding:'32px 28px', marginBottom:24, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right:-16, top:-16, fontSize:'8rem', opacity:0.08, filter:'blur(3px)', transform:'rotate(12deg)', userSelect:'none' }}>{sport.icon}</div>
        <div style={{ fontSize:'clamp(3rem,10vw,4rem)', lineHeight:1, marginBottom:12 }}>{sport.icon}</div>
        <h1 style={{ fontSize:'clamp(2.2rem,7vw,3rem)', fontWeight:800, letterSpacing:'-0.03em', color:'#fff', lineHeight:1.05, marginBottom:6 }}>{sport.name}</h1>
        <p style={{ fontSize:'1.02rem', color:'rgba(255,255,255,0.92)', lineHeight:1.5 }}>{sport.pitch}</p>
      </div>

      {/* ── FLOW: start ── */}
      {flow === 'start' && (
        <div style={{ display:'flex', flexDirection:'column', gap:14, animation:'slideUp 0.3s ease' }}>
          {meta.actionBridge && (
            <div style={{ background:T.accentDim, border:`1px solid ${T.accent}30`, borderRadius:12, padding:'16px 20px', display:'flex', gap:12, alignItems:'flex-start' }}>
              <span style={{ color:T.accent, fontWeight:700, fontSize:'1.1rem', flexShrink:0 }}>→</span>
              <div>
                <p style={{ fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:T.accent, marginBottom:4 }}>Try this first</p>
                <p style={{ fontSize:'1rem', color:T.textPri, fontWeight:500, lineHeight:1.5 }}>{meta.actionBridge}</p>
              </div>
            </div>
          )}
          <div style={{ textAlign:'center', padding:'32px 0 8px' }}>
            <p style={{ fontSize:'1.1rem', color:T.textSec, marginBottom:24, lineHeight:1.6 }}>
              Ready to make this real? Answer a couple quick questions and we'll build a personalised plan for you.
            </p>
            <button
              onClick={() => { setFlow('level'); save({ flow:'level' }) }}
              className="btn btn-primary"
              style={{ padding:'18px 52px', fontSize:'1.08rem' }}>
              Get Started →
            </button>
          </div>
        </div>
      )}

      {/* ── FLOW: level ── */}
      {flow === 'level' && (
        <KeyCard icon="🎯" question={`What's your current level with ${sport.name}?`} style={{ animation:'slideUp 0.25s ease' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {LEVEL_OPTIONS.map(opt => {
              const sel = level === opt.id
              return (
                <button key={opt.id} onClick={() => chooseLevel(opt.id)}
                  style={{ display:'flex', alignItems:'center', gap:14, padding:'16px 18px', borderRadius:12, border:`1.5px solid ${sel ? T.accent : T.border}`, background:sel ? T.accentDim : T.surfaceHi, cursor:'pointer', fontFamily:'inherit', transition:'all 0.15s', textAlign:'left' }}
                  onMouseEnter={e => { if (!sel) e.currentTarget.style.borderColor = T.borderHi }}
                  onMouseLeave={e => { if (!sel) e.currentTarget.style.borderColor = T.border }}>
                  <span style={{ fontSize:'1.5rem' }}>{opt.icon}</span>
                  <div>
                    <p style={{ fontSize:'0.97rem', fontWeight:700, color:sel ? T.textPri : T.textSec }}>{opt.label}</p>
                    <p style={{ fontSize:'0.82rem', color:T.textMut, marginTop:2 }}>{opt.desc}</p>
                  </div>
                  {sel && <span style={{ marginLeft:'auto', color:T.accent, fontSize:'1.1rem' }}>✓</span>}
                </button>
              )
            })}
          </div>
        </KeyCard>
      )}

      {/* ── FLOW: zip ── */}
      {flow === 'zip' && (
        <div style={{ display:'flex', flexDirection:'column', gap:14, animation:'slideUp 0.25s ease' }}>
          <KeyCard icon="📍" question="What's your zip code?">
            <p style={{ fontSize:'0.9rem', color:T.textMut, lineHeight:1.55 }}>
              We'll find {sport.name.toLowerCase()} spots near you — clubs, courts, gyms, and open venues.
            </p>
            <div style={{ display:'flex', gap:10 }}>
              <input
                value={zipInput}
                onChange={e => { setZipInput(e.target.value); setZipError(false) }}
                onKeyDown={e => e.key === 'Enter' && submitZip()}
                placeholder="e.g. 90210"
                maxLength={5}
                style={{ flex:1, background:T.surfaceHi, border:`1.5px solid ${zipError ? T.pink : T.border}`, borderRadius:10, padding:'12px 16px', fontSize:'1.1rem', fontFamily:'inherit', color:T.textPri, outline:'none', transition:'border-color 0.15s' }}
                onFocus={e => e.target.style.borderColor = T.accent}
                onBlur={e => e.target.style.borderColor = zipError ? T.pink : T.border}
              />
              <button onClick={submitZip} className="btn btn-primary" style={{ padding:'12px 22px', flexShrink:0 }}>Find →</button>
            </div>
            {zipError && <p style={{ fontSize:'0.82rem', color:T.pink }}>Please enter a valid 5-digit US zip code.</p>}
          </KeyCard>
          <button onClick={() => { setFlow('plan'); save({ flow:'plan' }) }}
            style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.85rem', color:T.textMut, cursor:'pointer', textAlign:'center', padding:'4px 0' }}>
            Skip location →
          </button>
        </div>
      )}

      {/* ── FLOW: plan ── */}
      {flow === 'plan' && (
        <div style={{ display:'flex', flexDirection:'column', gap:14, animation:'slideUp 0.25s ease' }}>
          {level && (
            <div style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 16px', background:T.surfaceHi, borderRadius:12, border:`1px solid ${T.border}` }}>
              <span style={{ fontSize:'1.1rem' }}>{LEVEL_OPTIONS.find(o => o.id === level)?.icon}</span>
              <span style={{ fontSize:'0.9rem', color:T.textSec }}>Starting as <strong style={{ color:T.textPri }}>{LEVEL_OPTIONS.find(o => o.id === level)?.label}</strong></span>
              <button onClick={() => { setFlow('level'); save({ flow:'level' }) }}
                style={{ marginLeft:'auto', background:'none', border:'none', fontSize:'0.82rem', color:T.accent, cursor:'pointer', fontFamily:'inherit' }}>Change</button>
            </div>
          )}

          <KeyCard icon="📅" question="Your 4-week starter plan">
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {weeklyPlan.map((wk, i) => <WeekBlock key={i} week={wk} sportId={sportId} />)}
            </div>
          </KeyCard>

          {zip ? (
            <KeyCard icon="🗺️" question={`${sport.name} spots near ${zip}`}>
              <NearbyPlaces sport={sport} zip={zip} />
            </KeyCard>
          ) : (
            <KeyCard icon="📍" question="Find spots near you">
              <p style={{ fontSize:'0.9rem', color:T.textMut }}>Enter your zip to find nearby {sport.name.toLowerCase()} venues, clubs, and courts.</p>
              <div style={{ display:'flex', gap:10 }}>
                <input
                  value={zipInput}
                  onChange={e => { setZipInput(e.target.value); setZipError(false) }}
                  onKeyDown={e => e.key === 'Enter' && submitZip()}
                  placeholder="e.g. 90210"
                  maxLength={5}
                  style={{ flex:1, background:T.surfaceHi, border:`1.5px solid ${zipError ? T.pink : T.border}`, borderRadius:10, padding:'12px 16px', fontSize:'1.1rem', fontFamily:'inherit', color:T.textPri, outline:'none' }}
                  onFocus={e => e.target.style.borderColor = T.accent}
                  onBlur={e => e.target.style.borderColor = zipError ? T.pink : T.border}
                />
                <button onClick={submitZip} className="btn btn-primary" style={{ padding:'12px 22px', flexShrink:0 }}>Find →</button>
              </div>
              {zipError && <p style={{ fontSize:'0.82rem', color:T.pink }}>Please enter a valid 5-digit US zip code.</p>}
            </KeyCard>
          )}

          {guide?.checklist && (
            <KeyCard icon="✅" question="First step checklist">
              <ChecklistBlock items={guide.checklist} sportId={sportId} />
            </KeyCard>
          )}

          {guide?.equipment && (
            <KeyCard icon="🎒" question="What to get">
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {guide.equipment.map((eq, i) => {
                  const opt = ['nice','later','rent','club'].includes(eq.tier)
                  return (
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontSize:'0.97rem', color:opt ? T.textMut : T.textSec, lineHeight:1.5 }}>
                      <span style={{ color:opt ? T.textMut : T.accent, fontWeight:700, flexShrink:0, fontSize:'0.85rem', marginTop:2 }}>{opt ? '○' : '✓'}</span>
                      <span>
                        {eq.item || eq}
                        {opt && eq.tier && <span style={{ fontSize:'0.8rem', color:T.textMut, marginLeft:8 }}>({eq.tier==='later'?'not yet':eq.tier==='rent'?'rent first':eq.tier==='club'?'club provides':'optional'})</span>}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </KeyCard>
          )}

          <div style={{ textAlign:'center', paddingTop:8 }}>
            <button onClick={onRetake} style={{ background:'none', border:'none', fontFamily:'inherit', fontSize:'0.9rem', color:T.textMut, cursor:'pointer', padding:'4px 0' }}>← Back to results</button>
          </div>
        </div>
      )}
    </div>
  )
}
