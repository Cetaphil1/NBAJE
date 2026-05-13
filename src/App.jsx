import { useState, useMemo } from 'react'
import QUIZ_QUESTIONS from './data/questions'
import { LS } from './logic/storage'
import ShaderBackground from './Components/ShaderBackground'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultsPage from './components/ResultsScreen'
import SportDetail from './components/SportDetail'
import BobRock from './components/BobRock'
import AboutModal from './components/AboutModal'

function buildPersonalised(tags) {
  const has = tag => tags.includes(tag)
  if (has('social_team') && has('high_energy')) {
    return {
      headline: 'You need a reason to sweat with people.',
      nudge: 'Start with a low-commitment session where leaving early would still count.',
      likelyEnjoy: ['team energy', 'visible progress', 'a bit of chaos'],
    }
  }
  if (has('shy_solo') && has('low_budget')) {
    return {
      headline: 'You want something private and easy to start.',
      nudge: 'Pick the first step that requires the least explaining to anyone else.',
      likelyEnjoy: ['solo momentum', 'cheap setup', 'no audience'],
    }
  }
  if (has('low_impact')) {
    return {
      headline: 'You want movement without making it a whole thing.',
      nudge: 'Choose the option that feels calm enough to repeat twice.',
      likelyEnjoy: ['low pressure', 'steady rhythm', 'less judgment'],
    }
  }
  if (has('competitive')) {
    return {
      headline: 'You probably need a scoreboard eventually.',
      nudge: 'Begin casually, but choose something with a clear next level.',
      likelyEnjoy: ['skill gaps', 'measurable wins', 'structured challenge'],
    }
  }
  return {
    headline: 'You are looking for a first experiment.',
    nudge: 'Do one small version before deciding what kind of person you are.',
    likelyEnjoy: ['low commitment', 'real next step', 'room to pivot'],
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
  const [personalised, setPersonalised]= useState(null)

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
      setPersonalised(buildPersonalised(allTags))
      setScreen('results')
      window.scrollTo(0, 0)
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

      <BobRock screen={screen} qIndex={qIndex} bobTrigger={bobTrigger} />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      <footer className="app-footer">Sport Fit Quiz</footer>
    </>
  )
}
