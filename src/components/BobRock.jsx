import { useState, useEffect, useCallback, useRef } from 'react'

const CLICKS_KEY = 'bob-rock-clicks-v2'

const QUESTION_LINES = [
  'social or solo. let\'s find out.',
  'how hard do you want to push.',
  'money matters. noted.',
  'intensity check.',
  'solo or squad.',
  'competition. big question.',
]

const ANSWER_LINES = {
  '0_yes': 'social. got it.',
  '0_no':  'solo. noted.',
  '1_yes': 'easy mode.',
  '1_no':  'challenger detected.',
  '2_yes': 'budget matters.',
  '2_no':  'gear\'s not an issue.',
  '3_yes': 'go hard.',
  '3_no':  'something gentler.',
  '4_yes': 'lone wolf.',
  '4_no':  'team player.',
  '5_yes': 'competitive. interesting.',
  '5_no':  'just for fun.',
}

const RETAKE_LINES = ['starting over.', 'round two.', 'bold.']

const SEARCH_LINES = ['searching…', 'looking it up.', 'know what you want.']

export default function BobRock({ screen, qIndex, bobTrigger }) {
  const [clicks, setClicks] = useState(() => parseInt(localStorage.getItem(CLICKS_KEY) || '0', 10))
  const [popping, setPopping] = useState(false)
  const [msg, setMsg] = useState(null)
  const msgId = useRef(0)
  const timers = useRef({})
  const lastShown = useRef(0)
  const prevQ = useRef(qIndex)
  const prevScreen = useRef(screen)

  useEffect(() => { localStorage.setItem(CLICKS_KEY, clicks) }, [clicks])

  const showMsg = useCallback((text) => {
    const id = ++msgId.current
    Object.values(timers.current).flat().forEach(clearTimeout)
    timers.current = {}
    lastShown.current = Date.now()
    setMsg({ id, text, dying: false })
    const t1 = setTimeout(() => setMsg(p => p?.id === id ? { ...p, dying: true } : p), 7000)
    const t2 = setTimeout(() => setMsg(p => p?.id === id ? null : p), 7800)
    timers.current[id] = [t1, t2]
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('bob-intro-v3')) {
      const t = setTimeout(() => {
        showMsg('i am Bob the Rock.')
        localStorage.setItem('bob-intro-v3', '1')
      }, 1500)
      return () => clearTimeout(t)
    }
  }, [showMsg])

  useEffect(() => {
    const screenChanged = prevScreen.current !== screen
    const qChanged = qIndex !== prevQ.current
    prevScreen.current = screen
    prevQ.current = qIndex
    if (screen !== 'quiz') return
    if (!screenChanged && !qChanged) return
    const line = QUESTION_LINES[qIndex]
    if (line) {
      const t = setTimeout(() => showMsg(line), 600)
      return () => clearTimeout(t)
    }
  }, [screen, qIndex, showMsg])

  useEffect(() => {
    if (!bobTrigger) return
    const { type, choice, qi } = bobTrigger
    let line
    if (type === 'answer') {
      line = ANSWER_LINES[`${qi}_${choice}`]
    } else if (type === 'retake') {
      line = RETAKE_LINES[Math.floor(Math.random() * RETAKE_LINES.length)]
    } else if (type === 'detail') {
      line = 'exploring it.'
    } else if (type === 'spotlight') {
      line = SEARCH_LINES[Math.floor(Math.random() * SEARCH_LINES.length)]
    }
    if (line) {
      const elapsed = Date.now() - lastShown.current
      const delay = elapsed < 800 ? 900 : 0
      const t = setTimeout(() => showMsg(line), delay)
      return () => clearTimeout(t)
    }
  }, [bobTrigger, showMsg])

  function handleClick() {
    setPopping(true)
    setTimeout(() => setPopping(false), 300)
    setClicks(c => {
      const n = c + 1
      if (n === 1) showMsg('hi.')
      else if (n === 10) showMsg('still here.')
      else if (n === 50) showMsg('ok.')
      return n
    })
  }

  return (
    <div className="bob-wrapper">
      {msg && (
        <div className={`bob-bubble${msg.dying ? ' bob-bubble--dying' : ''}`}>
          {msg.text}
        </div>
      )}
      <button
        className={`bob-btn${popping ? ' bob-btn--pop' : ''}`}
        onClick={handleClick}
        title="Bob the Rock"
      >
        🪨
      </button>
      <span className="bob-label">Bob</span>
    </div>
  )
}
