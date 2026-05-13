import { useState, useMemo, useRef } from 'react'
import QUIZ_QUESTIONS from './data/questions'
import SPORTS from './data/sports'
import { LS } from './logic/storage'
import ShaderBackground from './components/ShaderBackground'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultsPage from './components/ResultsScreen'
import SportDetail from './components/SportDetail'
import BobRock from './components/BobRock'
import AboutModal from './components/AboutModal'
import GlobeLoader from './components/GlobeLoader'

async function fetchPersonalised(answers, allTags) {
  if (!window.claude?.complete) return null
  const summary = QUIZ_QUESTIONS.map((q, i) => {
    const a = answers[i]
    if (!a) return null
    const opt = a.choice === 'yes' ? q.yes : q.no
    return `Q: "${q.text}" → "${opt.label}"`
  }).filter(Boolean).join('\n')
  const tagList = allTags.join(', ') || 'no strong preference'
  try {
    const text = await window.claude.complete({
      messages: [{
        role: 'user',
        content: `A user just completed a sport/activity discovery quiz. Here are their answers:\n\n${summary}\n\nTheir fit tags: ${tagList}\n\nGenerate a short personalized insight in a human, modern, encouraging voice. Avoid generic fitness clichés, overpromising, or sounding like a horoscope. Return ONLY valid JSON, no markdown:\n{\n  "headline": "one punchy sentence (max 10 words) describing what kind of mover they are",\n  "nudge": "one believable, specific sentence that makes trying something feel low-pressure",\n  "likelyEnjoy": ["3 short concrete phrases about what they'll likely enjoy"]\n}`
      }]
    })
    const raw = text.replace(/```json|```/g, '').trim()
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

export default function App() {
  const [screen,       setScreen]      = useState('home')
  const [qIndex,       setQIndex]      = useState(0)
  const [answers,      setAnswers]     = useState([])
  const [tags,         setTags]        = useState([])
  const [sportId,      setSportId]     = useState(null)
  const [navDir,       setNavDir]      = useState('forward')
  const [bobTrigger,   setBobTrigger]  = useState(null)
  const [showAbout,    setShowAbout]   = useState(false)
  const [showGlobe,    setShowGlobe]   = useState(false)
  const [personalised, setPersonalised]= useState(null)

  const aiReadyRef  = useRef(false)
  const aiResultRef = useRef(null)

  const savedResult = useMemo(() => LS.loadResult(), [])

  function collectTags(ans) {
    return [...new Set(ans.flatMap(a => a.tags || []))]
  }

  function handleStart() {
    setScreen('quiz'); setQIndex(0); setAnswers([]); setNavDir('forward')
    setPersonalised(null)
    window.scrollTo(0, 0)
  }

  function handleAnswer(answer) {
    setBobTrigger({ type: 'answer', choice: answer.choice, qi: qIndex, ts: Date.now() })
    const next = [...answers]
    next[qIndex] = answer
    const isLast = qIndex === QUIZ_QUESTIONS.length - 1
    if (isLast) {
      const allTags = collectTags(next)
      setAnswers(next)
      setTags(allTags)
      LS.saveResult({ tags: allTags })
      setShowGlobe(true)
      setScreen('loading')
      window.scrollTo(0, 0)
      aiReadyRef.current = false
      aiResultRef.current = null
      fetchPersonalised(next, allTags).then(r => {
        aiResultRef.current = r
        aiReadyRef.current = true
      })
    } else {
      setNavDir('forward')
      setAnswers(next)
      setQIndex(i => i + 1)
    }
  }

  function handleBack() {
    if (screen === 'quiz') {
      setNavDir('back')
      if (qIndex > 0) setQIndex(i => i - 1)
      else { setScreen('home'); window.scrollTo(0, 0) }
    } else if (screen === 'results') {
      setScreen('home'); window.scrollTo(0, 0)
    } else if (screen === 'detail') {
      setScreen('results'); window.scrollTo(0, 0)
    }
  }

  function handleSelect(id) {
    LS.clear()
    LS.saveResult({ sport: id, tags })
    setSportId(id)
    setBobTrigger({ type: 'detail', ts: Date.now() })
    setScreen('detail')
    window.scrollTo(0, 0)
  }

  function handleRetake() {
    setBobTrigger({ type: 'retake', ts: Date.now() })
    setScreen('results')
    window.scrollTo(0, 0)
  }

  function handleContinue() {
    if (savedResult?.sport) {
      setSportId(savedResult.sport)
      setTags(savedResult.tags || [])
      setScreen('detail')
      window.scrollTo(0, 0)
    }
  }

  function handleGlobeDone() {
    const finish = () => {
      setPersonalised(aiResultRef.current)
      setShowGlobe(false)
      setScreen('results')
      window.scrollTo(0, 0)
    }
    if (aiReadyRef.current) {
      finish()
    } else {
      const check = setInterval(() => {
        if (aiReadyRef.current) { clearInterval(check); finish() }
      }, 100)
    }
  }

  return (
    <>
      <ShaderBackground />

      <div className="screen-wrap" key={screen + qIndex + (sportId || '')}>
        {screen === 'home' && (
          <HomeScreen
            onStart={handleStart}
            savedResult={savedResult}
            onContinue={handleContinue}
            onAbout={() => setShowAbout(true)}
          />
        )}
        {screen === 'quiz' && (
          <QuizScreen
            questions={QUIZ_QUESTIONS}
            qIndex={qIndex}
            answers={answers}
            navDir={navDir}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}
        {screen === 'results' && (
          <ResultsPage
            initialTags={tags}
            personalised={personalised}
            onSelect={handleSelect}
            onBack={handleBack}
            onBobHint={(val) => setBobTrigger({ type: 'spotlight', value: val, ts: Date.now() })}
          />
        )}
        {screen === 'detail' && sportId && (
          <SportDetail
            sportId={sportId}
            tags={tags}
            onBack={handleBack}
            onRetake={handleRetake}
          />
        )}
      </div>

      <GlobeLoader visible={showGlobe} onDone={handleGlobeDone} />
      <BobRock screen={screen} qIndex={qIndex} bobTrigger={bobTrigger} />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      <footer className="app-footer">Presented by Sheldon</footer>
    </>
  )
}
