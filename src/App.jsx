import { useState, useMemo } from 'react'
import QUIZ_QUESTIONS from './data/questions'
import SPORTS from './data/sports'
import { LS } from './logic/storage'
import FloatingBackground from './components/FloatingBackground'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultsPage from './components/ResultsScreen'
import SportDetail from './components/SportDetail'
import BobRock from './components/BobRock'
import AboutModal from './components/AboutModal'

export default function App() {
  const [screen,     setScreen]    = useState('home')
  const [qIndex,     setQIndex]    = useState(0)
  const [answers,    setAnswers]   = useState([])   // [{choice, tags}]
  const [tags,       setTags]      = useState([])
  const [sportId,    setSportId]   = useState(null)
  const [navDir,     setNavDir]    = useState('forward')
  const [bobTrigger, setBobTrigger]= useState(null)
  const [showAbout,  setShowAbout] = useState(false)

  const savedResult = useMemo(() => LS.loadResult(), [])

  function collectTags(ans) {
    return [...new Set(ans.flatMap(a => a.tags || []))]
  }

  function handleStart() {
    setScreen('quiz'); setQIndex(0); setAnswers([]); setNavDir('forward')
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
      <FloatingBackground />

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
      <footer className="app-footer">Presented by Sheldon</footer>
    </>
  )
}
