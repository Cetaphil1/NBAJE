// survey.jsx — Fit Beyond Interest pilot survey runtime.
// Mounts into #survey-mount. Visible whenever the URL hash is "#/survey".

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { SURVEY_DATA } from './survey-data';
import IntroExplainer from './intro-explainer';

const SD = SURVEY_DATA;
const T = SD.types;
const STORAGE_KEY = "fbi-pilot-v21";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
function saveState(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}
function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

function useHash() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onChange = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function isAnswered(q, value) {
  if (value === undefined || value === null || value === "") return false;
  if (q.type === T.CONSENT) return value === true;
  return true;
}
function dependsSatisfied(q, answers) {
  if (!q.dependsOn) return true;
  return answers[q.dependsOn.id] === q.dependsOn.equals;
}
function validateSection(section, answers) {
  const issues = [];
  for (const q of section.questions) {
    if (!dependsSatisfied(q, answers)) continue;
    const v = answers[q.id];
    if (q.required && !isAnswered(q, v)) {
      issues.push({ id: q.id, kind: "missing" });
    } else if (q.type === T.ATTN && v && v !== q.correct) {
      issues.push({ id: q.id, kind: "attention", soft: true });
    }
  }
  return issues;
}

function ScaleField({ q, value, onChange, scaleClass }) {
  return (
    <React.Fragment>
      <div className="scale-anchors">
        <span>Strongly Disagree</span>
        <span>Strongly Agree</span>
      </div>
      <div className={`scale ${scaleClass || ""}`}>
        {q.choices ? q.choices.map((c, i) => {
          const m = c.match(/^(\d+)\s*—\s*(.+)$/);
          const num = m ? m[1] : String(i + 1);
          const label = m ? m[2] : c;
          return (
            <button
              key={c}
              type="button"
              className={"scale-opt" + (value === c ? " selected" : "")}
              onClick={() => onChange(c)}
            >
              <span className="num">{num}</span>
              <span className="lbl">{label}</span>
            </button>
          );
        }) : null}
      </div>
    </React.Fragment>
  );
}

function FreqField({ q, value, onChange }) {
  return (
    <React.Fragment>
      <div className="scale-anchors">
        <span>Never</span>
        <span>Almost Always</span>
      </div>
      <div className="scale freq">
        {(q.choices || SD.scales[T.FREQ]).map((c, i) => {
          const m = c.match(/^(\d+)\s*—\s*(.+)$/);
          const num = m ? m[1] : String(i + 1);
          const label = m ? m[2] : c;
          return (
            <button
              key={c}
              type="button"
              className={"scale-opt" + (value === c ? " selected" : "")}
              onClick={() => onChange(c)}
            >
              <span className="num">{num}</span>
              <span className="lbl">{label}</span>
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );
}

function ChoiceField({ q, value, onChange }) {
  return (
    <div className="choices">
      {q.choices.map((c) => (
        <button
          key={c}
          type="button"
          className={"choice-opt" + (value === c ? " selected" : "")}
          onClick={() => onChange(c)}
        >
          <span className="radio" />
          <span>{c}</span>
        </button>
      ))}
    </div>
  );
}

function ConsentField({ q, value, onChange }) {
  return (
    <button
      type="button"
      className={"consent-box" + (value === true ? " selected" : "")}
      onClick={() => onChange(value === true ? false : true)}
    >
      <span className="check" />
      <span className="lbl">{q.label}</span>
    </button>
  );
}

function TextField({ q, value, onChange }) {
  return (
    <input
      type="text"
      className="text-input"
      placeholder={q.placeholder || ""}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function LongTextField({ q, value, onChange }) {
  return (
    <textarea
      className="text-area"
      placeholder={q.placeholder || ""}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function QuestionCard({ q, index, value, onChange, error, sectionConstruct }) {
  const cardClass = [
    "q-card",
    value !== undefined && value !== "" ? "answered" : "",
    error ? "invalid" : "",
    q.type === T.ATTN ? "attention" : "",
    q.pilotOnly ? "pilot" : "",
  ].filter(Boolean).join(" ");

  let field = null;
  switch (q.type) {
    case T.AGREE:
      field = <ScaleField q={{ ...q, choices: q.choices || SD.scales[T.AGREE] }} value={value} onChange={onChange} />;
      break;
    case T.FREQ:
      field = <FreqField q={q} value={value} onChange={onChange} />;
      break;
    case T.SINGLE:
    case T.YESNO:
    case T.ATTN:
    case T.ADVISING:
    case T.FIT:
      field = <ChoiceField q={q} value={value} onChange={onChange} />;
      break;
    case T.CONSENT:
      field = <ConsentField q={q} value={value} onChange={onChange} />;
      break;
    case T.SHORT:
      field = <TextField q={q} value={value} onChange={onChange} />;
      break;
    case T.LONG:
      field = <LongTextField q={q} value={value} onChange={onChange} />;
      break;
    default:
      field = <div style={{ color: "#FB7185" }}>[Unsupported question type: {q.type}]</div>;
  }

  return (
    <article className={cardClass} id={`q-${q.id}`}>
      <header className="q-card__head">
        <span className="q-card__idx">
          Q{String(index).padStart(2, "0")}
          {q.required ? <span className="req">*</span> : null}
        </span>
        <span className="q-card__flags">
          {q.type === T.ATTN && (
            <span className="badge badge--purple">Attention check</span>
          )}
          {q.reverse && (
            <span className="badge badge--yellow">{q.reverseNote || "Reverse-coded"}</span>
          )}
          {q.pilotOnly && (
            <span className="badge badge--yellow">Pilot only</span>
          )}
          {q.required === false && (
            <span className="badge">Optional</span>
          )}
          {q.construct && q.construct !== sectionConstruct && q.construct !== "Attention" && (
            <span className="badge badge--blue">{q.construct}</span>
          )}
        </span>
      </header>

      <h3 className="q-card__title">{q.title}</h3>
      {q.help && <p className="q-card__help">{q.help}</p>}

      {field}

      {error && (
        <div className="q-card__err">
          {error === "missing" ? "Heads up — this one is required to move forward." : null}
        </div>
      )}
    </article>
  );
}

function TopBar({ sectionIdx, totalSections, section, answeredCount, totalQuestions, onBack }) {
  const pct = Math.round((answeredCount / totalQuestions) * 100);
  return (
    <div className="survey-topbar">
      <div className="survey-topbar__inner">
        <div className="survey-topbar__row">
          <button className="survey-back" onClick={onBack}>
            ← Exit
          </button>
          <div className="survey-step">
            Section <strong>{sectionIdx + 1}</strong> of <strong>{totalSections}</strong>
            <span style={{ color: "var(--ink-4)", margin: "0 8px" }}>·</span>
            {section.title}
          </div>
          {section.construct && (
            <div className="survey-construct">
              <span className="pip" />
              {section.construct}
            </div>
          )}
        </div>
        <div className="survey-progress" aria-label={`${pct}% complete`}>
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}

function IntroChooser({ onWatch, onSkip, exitToLanding }) {
  return (
    <div className="survey-app survey-phase" key="intro">
      <div className="survey-topbar">
        <div className="survey-topbar__inner">
          <div className="survey-topbar__row">
            <button className="survey-back" onClick={exitToLanding}>← Back to explainer</button>
            <div className="survey-step"><strong>Before you begin</strong></div>
          </div>
        </div>
      </div>

      <div className="intro-chooser">
        <span className="intro-chooser__crumb">
          <span className="pip" />
          Optional intro · about 90 seconds
        </span>

        <h1>Before you start — do you want the short version of what this study is testing?</h1>

        <p className="intro-chooser__body">
          The intro is a short animated walkthrough of the model behind the survey: why interest alone falls short, what the iceberg looks like, and what the two prediction models compare. You can skip it and go straight to the questions.
        </p>

        <div className="intro-options">
          <button className="intro-option intro-option--watch" onClick={onWatch}>
            <span className="intro-option__tag">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue-bright)', boxShadow: '0 0 8px var(--blue-bright)' }} />
              Recommended
            </span>
            <h2 className="intro-option__title">Watch 90-second intro</h2>
            <p className="intro-option__sub">Eight short scenes — the surface quiz, the iceberg, the engineering case, and the two prediction models. Skippable any time.</p>
            <span className="intro-option__arrow">Watch →</span>
          </button>

          <button className="intro-option" onClick={onSkip}>
            <span className="intro-option__tag">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ink-3)' }} />
              Or jump in
            </span>
            <h2 className="intro-option__title">Skip and start survey</h2>
            <p className="intro-option__sub">10–12 minutes · 11 sections · anonymous unless you opt into a follow-up.</p>
            <span className="intro-option__arrow">Skip →</span>
          </button>
        </div>

        <div className="intro-poster">
          <span className="intro-poster__icon">i</span>
          <span>
            <strong>Your answers are saved as you go.</strong> If you close this tab in the middle of the survey, you'll get a "resume where I left off" option when you come back. Nothing is sent to a server in this prototype.
          </span>
        </div>
      </div>
    </div>
  );
}

function ExplainerPhase({ onSkip, onComplete }) {
  return <IntroExplainer onSkip={onSkip} onComplete={onComplete} />;
}

function StartScreen({ onBegin, hasInProgress, onResume, onReset }) {
  return (
    <div className="start-screen">
      <span className="start-screen__crumb">
        <span className="pulse" />
        Pilot v2.1 · n = 5 cognitive interviews
      </span>

      <h1>
        Major Fit <span className="accent">Pilot Survey</span>
      </h1>

      <p className="start-screen__sub">
        {SD.meta.subtitle}
      </p>

      <div className="start-meta">
        <div className="start-meta__tile">
          <span className="start-meta__lbl">Estimated time</span>
          <span className="start-meta__val">{SD.meta.estimate}</span>
        </div>
        <div className="start-meta__tile">
          <span className="start-meta__lbl">Audience</span>
          <span className="start-meta__val">{SD.meta.audience}</span>
        </div>
        <div className="start-meta__tile">
          <span className="start-meta__lbl">Items</span>
          <span className="start-meta__val">{SD.totalQuestions} questions · {SD.sections.length} sections</span>
        </div>
        <div className="start-meta__tile">
          <span className="start-meta__lbl">Privacy</span>
          <span className="start-meta__val">{SD.meta.privacy}</span>
        </div>
      </div>

      <div className="start-section-list" aria-label="Survey sections">
        {SD.sections.map((s, i) => (
          <div className="start-section-list__row" key={s.id}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <span className="pip" />
            <span>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="start-cta">
        {hasInProgress && (
          <button className="btn btn--primary" onClick={onResume} style={{ padding: "12px 20px" }}>
            Resume where I left off
            <span className="arrow">→</span>
          </button>
        )}
        <button
          className={hasInProgress ? "btn" : "btn btn--primary"}
          onClick={onBegin}
          style={{ padding: "12px 20px" }}
        >
          {hasInProgress ? "Start over" : "Begin Survey"}
          <span className="arrow">→</span>
        </button>
        {hasInProgress && (
          <button className="btn btn--ghost" onClick={onReset}>
            Clear saved draft
          </button>
        )}
        <span className="hint">Your responses are saved locally as you go</span>
      </div>
    </div>
  );
}

function DoneScreen({ answers }) {
  const totalAnswered = useMemo(() => {
    let n = 0;
    for (const s of SD.sections) {
      for (const q of s.questions) {
        if (answers[q.id] !== undefined && answers[q.id] !== "" && answers[q.id] !== null) n++;
      }
    }
    return n;
  }, [answers]);

  const attentionResults = useMemo(() => {
    const checks = [];
    for (const s of SD.sections) {
      for (const q of s.questions) {
        if (q.type === T.ATTN) {
          checks.push({ id: q.id, passed: answers[q.id] === q.correct });
        }
      }
    }
    return checks;
  }, [answers]);

  const attnPassed = attentionResults.filter(c => c.passed).length;

  const onDownload = () => {
    const payload = {
      instrument: "Fit Beyond Interest — Pilot v2.1",
      submittedAt: new Date().toISOString(),
      answers,
      attentionChecks: attentionResults,
      totalAnswered,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fbi-pilot-response-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="done-screen">
      <span className="done-screen__badge">
        <span className="pulse" />
        Submission complete
      </span>

      <h1>Thank you for completing the pilot survey.</h1>
      <p className="done-screen__body">
        Your responses are ready to be exported. They'll help refine the instrument before the larger study. Nothing has been transmitted to a server — for this pilot build, data lives only in your browser.
      </p>

      <div className="done-summary">
        <div className="done-summary__tile">
          <span className="done-summary__val">{totalAnswered}</span>
          <span className="done-summary__lbl">Items answered</span>
        </div>
        <div className="done-summary__tile">
          <span className="done-summary__val">{SD.sections.length}</span>
          <span className="done-summary__lbl">Sections completed</span>
        </div>
        <div className="done-summary__tile">
          <span className="done-summary__val">{attnPassed}/{attentionResults.length}</span>
          <span className="done-summary__lbl">Attention checks passed</span>
        </div>
      </div>

      <div className="done-data-note">
        <strong>Data connection · pending.</strong> For production, swap the JSON export below for a write to <code>Google Sheets</code>, <code>Firebase</code>, <code>Supabase</code>, or a secure research backend. The schema in the JSON download already matches the construct-keyed item IDs.
      </div>

      <div className="done-cta">
        <button className="btn btn--primary" onClick={onDownload} style={{ padding: "12px 20px" }}>
          Download responses (JSON)
          <span className="arrow">↓</span>
        </button>
        <a href="#/" className="btn">
          Back to the explainer
        </a>
      </div>
    </div>
  );
}

function SectionView({ section, answers, errors, onAnswer }) {
  const items = section.questions.filter(q => dependsSatisfied(q, answers));

  const rendered = [];
  let lastGroup = null;
  items.forEach((q, i) => {
    if (q.group && q.group !== lastGroup) {
      rendered.push(
        <div className="q-group-head" key={`g-${q.group}`}>
          <span className="pip" />
          {q.group}
        </div>
      );
      lastGroup = q.group;
    }
    rendered.push(
      <QuestionCard
        key={q.id}
        q={q}
        index={i + 1}
        value={answers[q.id]}
        onChange={(v) => onAnswer(q.id, v)}
        error={errors[q.id]}
        sectionConstruct={section.construct}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="survey-header">
        <div className="survey-header__meta">
          <span className="num">{String(section.number).padStart(2, "0")}</span>
          <span>{section.title}</span>
        </div>
        <h1>{section.title}</h1>
        {section.subtitle && <p>{section.subtitle}</p>}
      </div>
      {rendered}
    </React.Fragment>
  );
}

function SurveyApp() {
  const hash = useHash();
  const visible = hash.startsWith("#/survey");

  const initial = loadState();
  const initialAnswerCount = Object.keys(initial?.answers || {}).length;
  const [phase, setPhase] = useState(() => {
    if (!initial) return "intro";
    if (initial.phase === "running" && initialAnswerCount > 0) return "running";
    if (initial.phase === "done") return "done";
    if (initialAnswerCount > 0) return "start";
    return "intro";
  });
  const [sectionIdx, setSectionIdx] = useState(initial?.sectionIdx || 0);
  const [answers, setAnswers] = useState(initial?.answers || {});
  const [errors, setErrors] = useState({});
  const bodyRef = useRef(null);

  useEffect(() => {
    saveState({ phase, sectionIdx, answers });
  }, [phase, sectionIdx, answers]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sectionIdx, phase]);

  const totalSections = SD.sections.length;
  const section = SD.sections[sectionIdx] || SD.sections[0];
  const answeredCount = useMemo(() => {
    let n = 0;
    for (const s of SD.sections) {
      for (const q of s.questions) {
        if (q.required === false) continue;
        if (answers[q.id] !== undefined && answers[q.id] !== "" && answers[q.id] !== null) n++;
      }
    }
    return n;
  }, [answers]);
  const requiredCount = useMemo(() => {
    let n = 0;
    for (const s of SD.sections) for (const q of s.questions) if (q.required !== false) n++;
    return n;
  }, []);

  if (!visible) return null;

  const onAnswer = (id, value) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setErrors((e) => {
      if (!e[id]) return e;
      const { [id]: _, ...rest } = e;
      return rest;
    });
  };

  const onNext = () => {
    const issues = validateSection(section, answers);
    const hard = issues.filter(i => i.kind === "missing");
    if (hard.length) {
      const map = {};
      hard.forEach(h => { map[h.id] = "missing"; });
      setErrors(map);
      const first = document.getElementById(`q-${hard[0].id}`);
      if (first) first.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    setErrors({});
    if (sectionIdx < totalSections - 1) {
      setSectionIdx(sectionIdx + 1);
    } else {
      setPhase("done");
    }
  };

  const onBack = () => {
    setErrors({});
    if (sectionIdx > 0) setSectionIdx(sectionIdx - 1);
    else setPhase("start");
  };

  const beginFresh = () => {
    setAnswers({});
    setErrors({});
    setSectionIdx(0);
    setPhase("running");
  };
  const resume = () => setPhase("running");
  const reset = () => {
    clearState();
    setAnswers({});
    setSectionIdx(0);
    setPhase("intro");
  };
  const goToStart = () => {
    setSectionIdx(0);
    setPhase("start");
  };
  const startExplainer = () => {
    try { localStorage.removeItem("fbi-intro:t"); } catch {}
    setPhase("explainer");
  };

  const exitToLanding = () => {
    window.location.hash = "#/";
  };

  const hasInProgress = Object.keys(answers).length > 0;

  if (phase === "intro") {
    return (
      <IntroChooser
        onWatch={startExplainer}
        onSkip={goToStart}
        exitToLanding={exitToLanding}
      />
    );
  }

  if (phase === "explainer") {
    return (
      <ExplainerPhase
        onSkip={goToStart}
        onComplete={goToStart}
      />
    );
  }

  if (phase === "start") {
    return (
      <div className="survey-app survey-phase" key="start">
        <div className="survey-topbar">
          <div className="survey-topbar__inner">
            <div className="survey-topbar__row">
              <button className="survey-back" onClick={() => setPhase("intro")}>← Back</button>
              <div className="survey-step"><strong>Pilot survey</strong></div>
            </div>
          </div>
        </div>
        <StartScreen
          onBegin={beginFresh}
          hasInProgress={hasInProgress}
          onResume={resume}
          onReset={reset}
        />
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="survey-app survey-phase" key="done">
        <div className="survey-topbar">
          <div className="survey-topbar__inner">
            <div className="survey-topbar__row">
              <button className="survey-back" onClick={exitToLanding}>← Back to explainer</button>
              <div className="survey-step"><strong>Complete</strong></div>
              <div className="survey-construct">
                <span className="pip" />
                Submission ready
              </div>
            </div>
            <div className="survey-progress"><i style={{ width: "100%" }} /></div>
          </div>
        </div>
        <DoneScreen answers={answers} />
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;
  const isLast = sectionIdx === totalSections - 1;

  return (
    <div className="survey-app survey-phase" key="running" ref={bodyRef}>
      <TopBar
        sectionIdx={sectionIdx}
        totalSections={totalSections}
        section={section}
        answeredCount={answeredCount}
        totalQuestions={requiredCount}
        onBack={exitToLanding}
      />
      <div className="survey-body" data-section-key={section.id} key={section.id}>
        <SectionView
          section={section}
          answers={answers}
          errors={errors}
          onAnswer={onAnswer}
        />
      </div>
      <div className="survey-footer">
        <div className="survey-footer__inner">
          <button className="btn" onClick={onBack}>
            ← Back
          </button>
          <div className="status">
            {answeredCount}/{requiredCount} required answered
          </div>
          <div className="grow" />
          {hasErrors && <div className="err">Please answer the highlighted items</div>}
          <button className="btn btn--primary" onClick={onNext}>
            {isLast ? "Finish" : "Next"}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyApp;
