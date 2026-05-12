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

const BEGINNER_PLAN_DETAILS = {
  basketball: {
    first:'Shoot around alone at a public court. Start with layups, close shots, and a few free throws before joining anything.',
    practice:'Do a simple 20-minute court session: dribble both hands, take ten close shots, then ten free throws.',
    connect:'When a casual game forms, ask if there is room for a beginner or if you can get next.',
    checkpoint:'If you are less nervous asking for the ball, that is real progress.'
  },
  soccer: {
    first:'Take a ball to a park and pass against a wall or fence. Keep the first session boring on purpose.',
    practice:'Spend 20 minutes on touches: inside-foot passes, gentle dribbles, and stopping the ball cleanly.',
    connect:'Look for a casual kickaround and tell them you are new before the game starts.',
    checkpoint:'If your first touch feels calmer than week one, the sport is starting to open up.'
  },
  tennis: {
    first:'Use a public court wall before booking a match. Your only goal is to make the ball come back.',
    practice:'Rally against a wall for 20 minutes and count your longest streak, even if it is three.',
    connect:'Ask a beginner clinic or a patient friend for a low-pressure rally, not a full match.',
    checkpoint:'If you can rally a little longer without rushing your swing, keep going.'
  },
  volleyball: {
    first:'Start with passing. A clean bump matters more than a hard spike in your first month.',
    practice:'Do self-bumps, wall sets, and gentle serves for 20 minutes.',
    connect:'Try an open gym and ask which court is best for new players.',
    checkpoint:'If you are calling the ball and getting into position sooner, you are learning.'
  },
  baseball: {
    first:'Use a batting cage or a wall with a tennis ball. Skip the full field fantasy for now.',
    practice:'Take 20 to 30 relaxed swings and stop before your form falls apart.',
    connect:'Ask about recreational softball if adult baseball feels too serious locally.',
    checkpoint:'If you make cleaner contact more often, the session did its job.'
  },
  football: {
    first:'Start with flag or touch football. Throw short spirals before thinking about plays.',
    practice:'Do 20 minutes of easy throws, catches, and five-yard routes with a friend.',
    connect:'Ask a local flag league whether they have pickup nights or beginner teams.',
    checkpoint:'If catching and cutting feel less chaotic, you are ready for more game speed.'
  },
  track: {
    first:'Begin with run-walk intervals. You do not need to run nonstop to count it.',
    practice:'Alternate one minute easy running with one minute walking for 20 minutes.',
    connect:'Try a beginner-paced running club or parkrun and stay at conversation pace.',
    checkpoint:'If you finish feeling like you could come back, the plan is working.'
  },
  swimming: {
    first:'Book lane swim at a quiet time and use plenty of rest. Breath control comes before distance.',
    practice:'Swim 4 to 6 short lengths with breaks. Focus on relaxed exhale in the water.',
    connect:'Ask the pool desk about adult beginner lessons or Masters lanes for new swimmers.',
    checkpoint:'If breathing feels less panicky, that is a bigger win than extra laps.'
  },
  boxing: {
    first:'Let a coach show you wraps, stance, jab, and cross. Do not make sparring the goal.',
    practice:'Shadowbox three easy rounds and add bag work only if your form stays tidy.',
    connect:'Ask the gym which class is fundamentals-only and beginner-safe.',
    checkpoint:'If your stance and guard survive when you get tired, you are building the base.'
  },
  wrestling: {
    first:'Find a coached club. Wrestling is not a YouTube-and-living-room sport.',
    practice:'Focus on stance, movement, and safe falling before live wrestling.',
    connect:'Introduce yourself to the coach and ask what new adults usually do first.',
    checkpoint:'If you understand the room rules and feel safe drilling, that is a strong start.'
  },
  yoga: {
    first:'Pick one beginner video or class and let it be easy. You are learning attention, not performing poses.',
    practice:'Do two 15- to 20-minute sessions with breathing and basic shapes.',
    connect:'If you want company, try a beginner or slow-flow class and choose a spot where you feel comfortable.',
    checkpoint:'If you notice tension earlier and breathe through it better, yoga is doing its job.'
  },
  cycling: {
    first:'Choose a flat route you already know. Comfort and traffic confidence come before distance.',
    practice:'Ride a 20-minute loop at a pace where you can still look around.',
    connect:'Ask a local shop or club about no-drop beginner rides.',
    checkpoint:'If mounting, braking, and turning feel automatic, you can start exploring farther.'
  },
  climbing: {
    first:'Rent shoes and try easy boulders. Stay low, downclimb when you can, and rest often.',
    practice:'Attempt three to five easy routes and repeat one instead of chasing harder grades.',
    connect:'Ask a staff member or friendly climber how they would read one route.',
    checkpoint:'If you start noticing foot placements instead of just pulling with arms, you are learning.'
  },
  hiking: {
    first:'Pick an easy, well-marked trail under 3 miles. Bring water and tell someone your plan.',
    practice:'Walk the trail at a pace that lets you look around, not prove fitness.',
    connect:'Join a beginner hike or invite one friend if solo trails feel intimidating.',
    checkpoint:'If you finish wanting another trail, choose a slightly longer one next.'
  },
  dance: {
    first:'Choose the style that makes you curious, not the one that sounds most impressive.',
    practice:'Repeat one short beginner combo at home until it feels less mysterious.',
    connect:'Take a beginner class and tell the teacher it is your first one.',
    checkpoint:'If you recover from mistakes faster and keep moving, you are becoming a dancer.'
  },
  martial_arts: {
    first:'Book a trial class and ask what beginners should wear. The etiquette matters as much as the moves.',
    practice:'Review one stance, breakfall, or basic strike slowly between classes.',
    connect:'Ask a coach which fundamentals class to repeat for your first month.',
    checkpoint:'If the rituals and safety rules feel clearer, you have found your footing.'
  },
  skateboarding: {
    first:'Find smooth flat ground. Learn pushing, turning, and stopping before the skate park.',
    practice:'Do 20 minutes of balance, push, cruise, stop, then rest. Falls count as information.',
    connect:'Visit a skate park just to watch lines and ask one gear or safety question.',
    checkpoint:'If stopping feels reliable, you have unlocked the next layer.'
  },
  pickleball: {
    first:'Go to open play and say you are new. That sentence makes the session easier for everyone.',
    practice:'Learn the serve, dinks, and kitchen rule before worrying about spin.',
    connect:'Rotate through a few games and thank people who explain the rules.',
    checkpoint:'If the scoring makes sense and rallies last longer, you are in.'
  },
  badminton: {
    first:'Try a drop-in night with a borrowed racket if possible. Learn the court lines slowly.',
    practice:'Serve, clear, and rally for 20 minutes without chasing power.',
    connect:'Ask the organizer to pair you with patient players for the first game.',
    checkpoint:'If your feet start moving before the shuttle drops, the sport is clicking.'
  },
  ultimate_frisbee: {
    first:'Start with throwing. A calm backhand and forehand matter more than sprinting hard.',
    practice:'Throw with a friend or at a target for 20 minutes, then jog a few simple cuts.',
    connect:'Find pickup and tell the captain you are new to ultimate.',
    checkpoint:'If you understand stall counts and spirit of the game, you will feel less lost.'
  },
  rowing: {
    first:'Try an erg before getting on the water. Learn legs, body, arms in that order.',
    practice:'Row 10 to 20 easy minutes with technique breaks, not an all-out test.',
    connect:'Ask a rowing club about learn-to-row dates and true beginner expectations.',
    checkpoint:'If the stroke feels smoother and less like yanking, you are on track.'
  },
  golf: {
    first:'Rent clubs at a range. Your first win is clean contact, not distance or score.',
    practice:'Hit 25 balls slowly, resetting grip and stance before each swing.',
    connect:'Ask the range or municipal course about beginner lessons or short-course times.',
    checkpoint:'If a few shots leave the clubface cleanly, that is enough signal to continue.'
  },
  gym_training: {
    first:'Choose a simple full-body session. Leave before you are wrecked enough to dread coming back.',
    practice:'Do one squat, one push, one pull, and one hinge movement with easy weights.',
    connect:'Ask staff to show you one machine or movement you are unsure about.',
    checkpoint:'If you can repeat the same session with slightly more confidence, you are progressing.'
  },
  calisthenics: {
    first:'Scale everything. Wall push-ups and assisted squats are not cheats; they are how you begin.',
    practice:'Do a gentle circuit twice this week: squats, wall push-ups, dead bugs, and a short plank.',
    connect:'If you want company, visit a calisthenics park and ask what beginner moves people started with.',
    checkpoint:'If reps feel cleaner instead of just harder, you are getting stronger.'
  },
  table_tennis: {
    first:'Rally before you compete. Keeping the ball on the table is the first game.',
    practice:'Spend 15 to 20 minutes on serves and gentle rallies, switching partners if you can.',
    connect:'Ask a community center or club which night is casual rather than league-only.',
    checkpoint:'If you start reading spin instead of just reacting late, keep playing.'
  },
  lacrosse: {
    first:'Ask about loaner gear and start with wall ball. Catching cleanly is the foundation.',
    practice:'Do 15 minutes of wall ball on each side, then stop while your hands still feel sharp.',
    connect:'Attend a beginner practice and let the coach place you somewhere simple.',
    checkpoint:'If the ball stops feeling like a surprise in your stick, progress is happening.'
  },
  rugby: {
    first:'Start with tag, touch, or a beginner session before full contact.',
    practice:'Work on passing backward, support lines, and safe body position at low speed.',
    connect:'Message a club and ask which session is best for a brand-new adult.',
    checkpoint:'If the rules feel less upside-down and the team feels like a place you can learn, stay with it.'
  },
  fencing: {
    first:'Book a beginner lesson. Let the club provide the mask, jacket, glove, and blade.',
    practice:'Repeat footwork slowly: advance, retreat, lunge, recover.',
    connect:'Ask your coach which weapon or class path fits new adults.',
    checkpoint:'If distance and timing start to make sense, the chess-at-speed feeling is arriving.'
  },
  softball: {
    first:'Register as a solo player or ask a league where beginners can land.',
    practice:'Throw, catch, and take a few cage swings before your first game.',
    connect:'Tell your captain where you are comfortable playing and that you are new.',
    checkpoint:'If you know where to stand and what to do on a basic play, week one worked.'
  },
  gymnastics: {
    first:'Book an adult beginner class. Start with rolls, shapes, and mobility, not flips.',
    practice:'Practice hollow body, plank, and basic rolls only if a coach has shown them safely.',
    connect:'Ask the coach what adults should repeat at home without equipment.',
    checkpoint:'If body positions feel more controlled, the foundation is forming.'
  },
  skiing: {
    first:'Take a lesson and rent gear. The first goal is stopping and turning on gentle terrain.',
    practice:'Repeat easy runs or carpet laps until speed control feels boring.',
    connect:'Ask the instructor what to practice before moving to a harder slope.',
    checkpoint:'If you can stop when you choose, that is a successful first month.'
  },
  snowboarding: {
    first:'Take a lesson, wear wrist guards, and expect the first day to be clumsy.',
    practice:'Work on falling safely, skating one-footed, and linking gentle turns.',
    connect:'Ask an instructor or rental shop which green run is best for repeats.',
    checkpoint:'If you link a few turns without panic, the hard entry curve is starting to pay off.'
  },
  surfing: {
    first:'Use a surf school. Wave choice, board choice, and safety are not beginner details.',
    practice:'Practice pop-ups on sand, then take short attempts in whitewater with coaching.',
    connect:'Ask the instructor which beginner break and tide window to use next time.',
    checkpoint:'If you read the water a little better, even before standing, you are learning.'
  },
  archery: {
    first:'Book a club intro and resist buying a bow early. Fit and form matter first.',
    practice:'Repeat stance, anchor point, and release slowly for a short round.',
    connect:'Ask the club when new archers usually move from intro sessions to regular nights.',
    checkpoint:'If your arrows group closer together, even off-center, that is progress.'
  },
  cheer: {
    first:'Ask a gym about true beginner teams or open gyms. You need the right level and schedule.',
    practice:'Work on basic jumps, counts, and body tension without trying stunts alone.',
    connect:'Attend a trial practice and ask how new athletes are placed on teams.',
    checkpoint:'If timing and trust feel exciting instead of overwhelming, cheer may fit.'
  },
}

function getBeginnerPlanDetails(sport) {
  return BEGINNER_PLAN_DETAILS[sport.id] || {
    first:`Try the lowest-pressure version of ${sport.name}: observe first, ask questions, and keep the first session short.`,
    practice:`Practice one basic ${sport.name} skill for 15 to 20 minutes instead of trying to master the whole sport.`,
    connect:'Ask a coach, organizer, or regular what they wish beginners knew before session two.',
    checkpoint:'If the second session feels less confusing than the first, you are moving in the right direction.'
  }
}

function getGearTask(sport) {
  const basics = (sport.guide?.equipment || [])
    .filter(eq => ['need', 'rent', 'club'].includes(eq.tier))
    .slice(0, 2)
    .map(eq => (eq.item || eq).replace(/\s*\([^)]*\)/g, ''))

  if (basics.some(item => /nothing required/i.test(item))) {
    return 'No special gear needed. Use the safest space you have and save upgrades until the habit is real.'
  }
  if (!basics.length) return 'Borrow, rent, or use what you already have before buying anything expensive.'
  return `Sort the basics: ${basics.join(' and ')}. Borrow or rent first if that is an option.`
}

function buildWeeklyPlan(sport, level) {
  const sn = sport.name
  const beginner = getBeginnerPlanDetails(sport)
  const plans = {
    beginner: [
      { week:'Week 1', focus:'Make it easy to start', tasks:[
        { label:beginner.first },
        { label:getGearTask(sport) },
        { label:`Watch one clear "${sn} for beginners" video, then pick a real first session`, ytQuery:`${sn} for beginners first session` },
        { label:'Put the next session on your calendar before motivation fades' },
      ]},
      { week:'Week 2', focus:'Repeat the basics', tasks:[
        { label:beginner.practice },
        { label:'Repeat the easiest version once more. Stop while you still want to come back.' },
        { label:`Learn one safety rule, etiquette norm, or scoring detail for ${sn}`, ytQuery:`${sn} beginner rules etiquette safety` },
        { label:'Write one note about what felt less awkward than last time' },
      ]},
      { week:'Week 3', focus:'Add one human', tasks:[
        { label:beginner.connect },
        { label:'Ask one beginner question instead of pretending you already know' },
        { label:`Practice one specific ${sn} skill for 15 minutes`, ytQuery:`${sn} beginner technique drill` },
        { label:'Save the venue, class, group, or route that felt easiest to repeat' },
      ]},
      { week:'Week 4', focus:'Decide from evidence', tasks:[
        { label:beginner.checkpoint },
        { label:'Do two realistic sessions this week, not three heroic ones' },
        { label:'Choose: keep going, adjust the format, or pivot without guilt' },
        { label:'If it is a yes, book the next class, league, route, or practice slot now' },
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
        <KeyCard icon="🧭" question="No deep guide for this one — yet.">
          <p style={{ fontSize:'0.95rem', color:T.textSec, lineHeight:1.6 }}>
            We don't have a full plan for niche activities. Here are three honest first steps to figure out if it's for you.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:8 }}>
            {[
              { label:`Watch "${sport.name} for beginners"`, sub:'YouTube — 10 min of intro videos tells you a lot.', href:ytSearch, icon:'▶' },
              { label:`Find a local ${sport.name.toLowerCase()} group`, sub:'Meetup — clubs often welcome curious first-timers.', href:meetupSearch, icon:'👥' },
              { label:`Search for a beginner club near you`, sub:'Google — quickest way to find lessons or open sessions.', href:googleSearch, icon:'🔎' },
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
