// intro-explainer.jsx
// Optional 90-second pre-survey explainer for Fit Beyond Interest.

import React, { useEffect, useRef, useState } from 'react';
import { Stage, Sprite, useTime, useTimeline, Easing, interpolate, useSprite } from './animations';

const T = {
  s1: [0, 7],
  s2: [7, 20],
  s3: [20, 37],
  s4: [37, 49],
  s5: [49, 62],
  s6: [62, 74],
  s7: [74, 82],
  s8: [82, 90],
};
const DURATION = 90;

function fadeIn(local, dur = 0.5) {
  return Math.min(1, Math.max(0, local / dur));
}
function fadeOut(local, total, dur = 0.5) {
  const left = total - local;
  return Math.min(1, Math.max(0, left / dur));
}
function FadeOpacity({ children, holdEnd = 0.5, style }) {
  const { progress, duration, localTime } = useSprite();
  const ein = fadeIn(localTime, 0.5);
  const eout = fadeOut(localTime, duration, holdEnd);
  const op = Math.min(ein, eout);
  return (
    <div style={{ ...style, opacity: op, transition: 'none' }}>
      {children}
    </div>
  );
}

function Scene1() {
  const [start, end] = T.s1;
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const op1 = fadeIn(localTime, 0.8) * fadeOut(localTime, duration, 0.5);
        const op2 = fadeIn(localTime - 2.6, 0.6) * fadeOut(localTime, duration, 0.5);
        const ty1 = (1 - op1) * 12;
        const ty2 = (1 - Math.min(1, Math.max(0, (localTime - 2.6) / 0.6))) * 14;
        return (
          <div style={sceneFill}>
            <div style={{ ...scenePad, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ opacity: op1, transform: `translateY(${ty1}px)`, transition: 'none', maxWidth: 880 }}>
                <div style={tinyLabel}>Scene 01 · A common pattern</div>
                <div style={heroText}>
                  Students don't always switch majors because they picked something they <span style={{ color: '#7A8197' }}>hated</span>.
                </div>
              </div>
              <div style={{ opacity: op2, transform: `translateY(${ty2}px)`, transition: 'none', marginTop: 36 }}>
                <div style={heroSubText}>
                  Sometimes — they <span style={accentText}>liked it.</span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene2() {
  const [start, end] = T.s2;
  const QUIZ_MAPS = [
    { like: 'Like math',            major: 'Engineering',       t: 2.6 },
    { like: 'Like helping people',  major: 'Medicine',          t: 3.6 },
    { like: 'Like computers',       major: 'Computer Science',  t: 4.6 },
    { like: 'Like leadership',      major: 'Business',          t: 5.6 },
  ];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opQ = fadeIn(localTime, 0.6) * fadeOut(localTime, duration, 0.5);
        const opR = fadeIn(localTime - 9.8, 0.6) * fadeOut(localTime, duration, 0.4);
        const tyQ = (1 - opQ) * 12;
        const tyR = (1 - Math.min(1, Math.max(0, (localTime - 9.8) / 0.6))) * 12;

        return (
          <div style={sceneFill}>
            <div style={{ ...scenePad, alignItems: 'center', textAlign: 'center', justifyContent: 'flex-start', paddingTop: 90 }}>
              <div style={{ opacity: opQ, transform: `translateY(${tyQ}px)`, transition: 'none' }}>
                <div style={tinyLabel}>Scene 02 · Most major quizzes</div>
                <div style={{ ...heroText, fontSize: 64 }}>What do you like?</div>
              </div>

              <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {QUIZ_MAPS.map(({ like, major, t }) => {
                  const op = fadeIn(localTime - t, 0.45);
                  const ty = (1 - Math.min(1, Math.max(0, (localTime - t) / 0.45))) * 8;
                  return (
                    <div key={like} style={{ ...mapRow, opacity: op, transform: `translateY(${ty}px)` }}>
                      <span style={mapLike}>{like}</span>
                      <span style={mapArrow}>→</span>
                      <span style={mapMajor}>{major}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ opacity: opR, transform: `translateY(${tyR}px)`, transition: 'none', marginTop: 48, maxWidth: 760 }}>
                <div style={revealText}>
                  But interest is <span style={accentText}>only the visible layer.</span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene3() {
  const [start, end] = T.s3;
  const BELOW = [
    { t: 1.2, text: 'WORKLOAD FIT',         x: 280, y: 350, color: '#7DA8FF' },
    { t: 1.9, text: 'STRESS TOLERANCE',     x: 470, y: 460, color: '#A78BFA' },
    { t: 2.6, text: 'MOTIVATION QUALITY',   x: 720, y: 360, color: '#A78BFA' },
    { t: 3.3, text: 'BEHAVIORAL ENGAGEMENT',x: 940, y: 450, color: '#7DA8FF' },
    { t: 4.2, text: 'BELONGING',            x: 280, y: 560, color: '#F472B6' },
    { t: 4.9, text: 'RESILIENCE',           x: 540, y: 600, color: '#4ADE80' },
    { t: 5.6, text: 'BURNOUT RISK',         x: 820, y: 600, color: '#FB7185' },
    { t: 6.3, text: 'SWITCH RISK',          x: 1020, y: 560, color: '#FBBF24' },
  ];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opScene = fadeIn(localTime, 0.4) * fadeOut(localTime, duration, 0.6);
        const opCaption = fadeIn(localTime - 14.5, 0.4) * fadeOut(localTime, duration, 0.6);
        const cam = interpolate([0, 1.0, 2.5], [2.2, 1.5, 1.0], Easing.easeInOutCubic)(localTime);
        const camY = interpolate([0, 1.0, 2.5], [-140, -60, 0], Easing.easeInOutCubic)(localTime);

        return (
          <div style={{ ...sceneFill, opacity: opScene }}>
            <div style={tinyLabel2}>Scene 03 · Iceberg model</div>

            <div style={{
              position: 'absolute', inset: 0,
              transform: `scale(${cam}) translateY(${camY}px)`,
              transformOrigin: '50% 32%',
            }}>
              <svg viewBox="0 0 1280 720" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
                <defs>
                  <linearGradient id="ice-top-i" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#E5ECFF" />
                    <stop offset="1" stopColor="#8EA8E8" />
                  </linearGradient>
                  <linearGradient id="ice-bot-i" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#3E5FA8" />
                    <stop offset="1" stopColor="#0C1A3A" />
                  </linearGradient>
                  <linearGradient id="water-i" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0E1830" stopOpacity="0.0" />
                    <stop offset="0.04" stopColor="#0E1830" stopOpacity="0.6" />
                    <stop offset="0.5" stopColor="#0B1428" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#06091A" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="1280" height="248" fill="#080B14" />
                <rect x="0" y="248" width="1280" height="472" fill="url(#water-i)" />
                <path d="M 560 215  L 620 130  L 680 110  L 720 145  L 740 215  Z" fill="url(#ice-top-i)" opacity="0.95" />
                <path d="M 600 200  L 645 150  L 680 130  L 695 165  Z" fill="#FFFFFF" opacity="0.35" />
                <path d="M 560 215  L 540 270  L 460 330  L 380 410  L 360 510  L 420 620  L 560 680  L 740 695  L 880 660  L 960 570  L 980 470  L 920 360  L 820 285  L 740 215 Z" fill="url(#ice-bot-i)" opacity="0.92" />
                <line x1="0" y1="248" x2="1280" y2="248" stroke="#5B8DEF" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>

            <div style={{ position: 'absolute', left: 760, top: 120, opacity: fadeIn(localTime - 0.4, 0.6) }}>
              <div style={tinyLabel}>Above the waterline</div>
              <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', color: '#ECEEF5' }}>Interest</div>
            </div>

            {BELOW.map((d, i) => {
              const op = fadeIn(localTime - d.t, 0.45);
              const ty = (1 - Math.min(1, Math.max(0, (localTime - d.t) / 0.45))) * 10;
              if (op === 0) return null;
              return (
                <div key={i} style={{
                  position: 'absolute', left: d.x, top: d.y,
                  transform: `translate(-50%, ${ty}px)`, opacity: op,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, boxShadow: `0 0 14px ${d.color}` }} />
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.12em', color: d.color, whiteSpace: 'nowrap', textShadow: '0 0 12px rgba(0,0,0,0.7)' }}>{d.text}</div>
                </div>
              );
            })}

            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 56, textAlign: 'center', opacity: opCaption }}>
              <div style={captionPill}>The deeper layers often decide whether students stay.</div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene4() {
  const [start, end] = T.s4;
  const LEFT  = ['Likes math', 'Likes building', 'Likes technology', 'Likes problem-solving'];
  const RIGHT = ['Heavy workload', 'Long problem sets', 'Competition', 'Abstract classes', 'Frustration', 'Burnout risk'];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opS = fadeIn(localTime, 0.4) * fadeOut(localTime, duration, 0.4);
        const opC = fadeIn(localTime - 10.5, 0.4) * fadeOut(localTime, duration, 0.4);

        return (
          <div style={{ ...sceneFill, opacity: opS }}>
            <div style={tinyLabel2}>Scene 04 · Engineering case</div>
            <div style={{ ...scenePad, paddingTop: 110, justifyContent: 'flex-start' }}>
              <div style={splitWrap}>
                <div style={{ ...splitCol, ...splitColLeft }}>
                  <div style={splitTag}>HIGH INTEREST</div>
                  <div style={splitTitle}>What pulled them in</div>
                  <div style={chipsWrap}>
                    {LEFT.map((c, i) => {
                      const t = 0.8 + i * 0.4;
                      const op = fadeIn(localTime - t, 0.4);
                      const ty = (1 - Math.min(1, Math.max(0, (localTime - t) / 0.4))) * 10;
                      return (
                        <span key={c} style={{ ...chipStyle, ...chipBlue, opacity: op, transform: `translateY(${ty}px)` }}>{c}</span>
                      );
                    })}
                  </div>
                </div>
                <div style={{ ...splitCol, ...splitColRight }}>
                  <div style={{ ...splitTag, color: '#FBBF24' }}>REAL ENVIRONMENT</div>
                  <div style={splitTitle}>What they actually meet</div>
                  <div style={chipsWrap}>
                    {RIGHT.map((c, i) => {
                      const t = 4.4 + i * 0.4;
                      const isRisk = i >= 4;
                      const op = fadeIn(localTime - t, 0.4);
                      const ty = (1 - Math.min(1, Math.max(0, (localTime - t) / 0.4))) * 10;
                      return (
                        <span key={c} style={{ ...chipStyle, ...(isRisk ? chipRisk : chipWarn), opacity: op, transform: `translateY(${ty}px)` }}>{c}</span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 36, opacity: opC, textAlign: 'center', width: '100%' }}>
                <div style={captionPill}>
                  High interest doesn't guarantee <span style={{ color: '#FBBF24' }}>sustainable fit.</span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene5() {
  const [start, end] = T.s5;
  const CONSTRUCTS = [
    { name: 'Interest',             color: '#5B8DEF', t: 0.4 },
    { name: 'Environment Fit',      color: '#A78BFA', t: 0.7 },
    { name: 'Behavioral Engagement',color: '#7DA8FF', t: 1.0 },
    { name: 'Motivation Quality',   color: '#A78BFA', t: 1.3 },
    { name: 'Burnout Exhaustion',   color: '#FB7185', t: 1.6 },
    { name: 'Resilience',           color: '#4ADE80', t: 1.9 },
    { name: 'Satisfaction',         color: '#F472B6', t: 2.2 },
    { name: 'Persistence Risk',     color: '#FBBF24', t: 2.5 },
    { name: 'Belonging',            color: '#F472B6', t: 2.8 },
  ];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opS = fadeIn(localTime, 0.4) * fadeOut(localTime, duration, 0.4);
        const opT = fadeIn(localTime - 4.2, 0.5) * fadeOut(localTime, duration, 0.4);
        const opC = fadeIn(localTime - 8.5, 0.5) * fadeOut(localTime, duration, 0.4);

        return (
          <div style={{ ...sceneFill, opacity: opS }}>
            <div style={tinyLabel2}>Scene 05 · The instrument</div>
            <div style={{ ...scenePad, paddingTop: 96, justifyContent: 'flex-start' }}>
              <div style={{ opacity: opT, textAlign: 'center', width: '100%' }}>
                <div style={{ ...heroSubText, fontSize: 32 }}>
                  A better model measures the <span style={accentText}>full student–major relationship.</span>
                </div>
              </div>

              <div style={constructGridStyle}>
                {CONSTRUCTS.map(({ name, color, t }) => {
                  const op = fadeIn(localTime - t, 0.4);
                  const ty = (1 - Math.min(1, Math.max(0, (localTime - t) / 0.4))) * 12;
                  return (
                    <div key={name} style={{
                      ...constructTile,
                      borderTop: `2px solid ${color}`,
                      boxShadow: `inset 0 1px 0 ${color}80`,
                      opacity: op,
                      transform: `translateY(${ty}px)`,
                    }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }} />
                      <span>{name}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ opacity: opC, marginTop: 'auto', paddingTop: 24, textAlign: 'center', width: '100%' }}>
                <div style={tinyLabel}>11 validated constructs · v2.1 instrument</div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene6() {
  const [start, end] = T.s6;
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opS = fadeIn(localTime, 0.4) * fadeOut(localTime, duration, 0.4);
        const op1 = fadeIn(localTime - 0.8, 0.5);
        const op2 = fadeIn(localTime - 3.6, 0.5);
        const opC = fadeIn(localTime - 9.2, 0.5) * fadeOut(localTime, duration, 0.4);

        return (
          <div style={{ ...sceneFill, opacity: opS }}>
            <div style={tinyLabel2}>Scene 06 · Two models</div>
            <div style={{ ...scenePad, paddingTop: 110, justifyContent: 'flex-start' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 24, width: '100%' }}>
                <div style={{ ...modelBox, opacity: op1 }}>
                  <div style={{ ...tinyLabel, marginBottom: 8 }}>Model 01 · Baseline</div>
                  <div style={modelTitle}>Interest only</div>
                  <div style={modelDiagram}>
                    <span style={modelNode}>Interest</span>
                    <span style={{ color: '#7A8197', fontFamily: 'JetBrains Mono, monospace' }}>→</span>
                    <span style={modelOutput}>Persistence?</span>
                  </div>
                </div>
                <div style={{ ...modelBox, ...modelBoxHot, opacity: op2 }}>
                  <div style={{ ...tinyLabel, marginBottom: 8, color: '#7DA8FF' }}>Model 02 · Deeper fit</div>
                  <div style={modelTitle}>Interest + psychology + behavior + environment</div>
                  <div style={modelDiagram}>
                    {['Interest','Env. fit','Engagement','Motivation','Burnout','Resilience','Belonging'].map(n => (
                      <span key={n} style={modelInputNode}>{n}</span>
                    ))}
                    <span style={{ color: '#7DA8FF', fontFamily: 'JetBrains Mono, monospace' }}>→</span>
                    <span style={modelOutput}>Persistence + Switch risk</span>
                  </div>
                </div>
              </div>

              <div style={{ opacity: opC, textAlign: 'center', width: '100%', marginTop: 40 }}>
                <div style={captionPill}>
                  More complete. <span style={{ color: '#7A8197' }}>Not magical.</span> More realistic.
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene7() {
  const [start, end] = T.s7;
  const NODES = ['Survey', 'Pilot study', 'Revised instrument', 'Larger collection', 'Model comparison'];
  return (
    <Sprite start={start} end={end}>
      {({ localTime, duration }) => {
        const opS = fadeIn(localTime, 0.4) * fadeOut(localTime, duration, 0.4);
        return (
          <div style={{ ...sceneFill, opacity: opS }}>
            <div style={tinyLabel2}>Scene 07 · The research</div>
            <div style={{ ...scenePad, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ ...heroSubText, fontSize: 28, marginBottom: 48, maxWidth: 800 }}>
                This is the research project — a careful pilot, then a real test.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
                {NODES.map((n, i) => {
                  const t = 0.4 + i * 0.6;
                  const op = fadeIn(localTime - t, 0.5);
                  const ty = (1 - Math.min(1, Math.max(0, (localTime - t) / 0.5))) * 10;
                  return (
                    <React.Fragment key={n}>
                      <span style={{ ...flowNode, opacity: op, transform: `translateY(${ty}px)` }}>{n}</span>
                      {i < NODES.length - 1 && (
                        <span style={{ color: '#4E5468', opacity: op, fontFamily: 'JetBrains Mono, monospace' }}>→</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function Scene8({ onContinue }) {
  const [start, end] = T.s8;
  return (
    <Sprite start={start} end={DURATION + 5} keepMounted>
      {({ localTime }) => {
        const op = fadeIn(localTime, 0.6);
        const opBtn = fadeIn(localTime - 2.2, 0.5);
        if (localTime < 0) return null;
        return (
          <div style={sceneFill}>
            <div style={{ ...scenePad, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ opacity: op, transform: `translateY(${(1 - op) * 12}px)`, transition: 'none' }}>
                <div style={tinyLabel}>Scene 08 · The whole idea</div>
                <div style={{ ...heroText, fontSize: 56, maxWidth: 980, marginTop: 12 }}>
                  Liking a major isn't the same as <span style={accentText}>fitting a major.</span>
                </div>
              </div>
              <div style={{ opacity: opBtn, transform: `translateY(${(1 - opBtn) * 8}px)`, transition: 'none', marginTop: 40, pointerEvents: opBtn > 0.5 ? 'auto' : 'none' }}>
                <button onClick={onContinue} style={startBtn}>
                  Start the Survey
                  <span style={{ marginLeft: 8 }}>→</span>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

function ProgressDots() {
  const time = useTime();
  const scenes = [T.s1, T.s2, T.s3, T.s4, T.s5, T.s6, T.s7, T.s8];
  const currentIdx = scenes.findIndex(([s, e]) => time >= s && time < e);
  return (
    <div style={progressDotsStyle}>
      {scenes.map(([s, e], i) => {
        const isActive = i === currentIdx;
        const isPast = time >= e;
        return (
          <div key={i} style={{
            ...progressDotStyle,
            ...(isActive ? progressDotActive : {}),
            ...(isPast   ? progressDotPast   : {}),
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: 'inherit',
              background: isActive ? 'linear-gradient(90deg, #5B8DEF, #A78BFA)' : (isPast ? '#5B8DEF' : 'rgba(255,255,255,0.18)'),
              transition: 'background 0.3s',
            }} />
          </div>
        );
      })}
    </div>
  );
}

function IntroExplainer({ onSkip, onComplete }) {
  return (
    <div style={explainerRoot}>
      <div style={explainerChrome}>
        <div style={explainerBrand}>
          <span style={brandMark} />
          <span>
            Fit Beyond Interest
            <small style={brandSub}>90-second intro · skippable</small>
          </span>
        </div>
        <button style={skipBtn} onClick={onSkip}>
          Skip intro
          <span style={{ marginLeft: 6 }}>→</span>
        </button>
      </div>

      <div style={explainerStageWrap}>
        <Stage
          width={1280}
          height={720}
          duration={DURATION}
          background="#06080F"
          loop={false}
          autoplay={true}
          persistKey="fbi-intro"
        >
          <ProgressDots />
          <Scene1 />
          <Scene2 />
          <Scene3 />
          <Scene4 />
          <Scene5 />
          <Scene6 />
          <Scene7 />
          <Scene8 onContinue={onComplete} />
        </Stage>
      </div>
    </div>
  );
}

export default IntroExplainer;

// Inline styles
const sceneFill = { position: 'absolute', inset: 0 };
const scenePad = {
  position: 'absolute', inset: 0,
  padding: '60px 80px',
  display: 'flex', flexDirection: 'column',
};
const tinyLabel = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 11, letterSpacing: '0.16em',
  textTransform: 'uppercase', color: '#7A8197',
  marginBottom: 12,
};
const tinyLabel2 = {
  ...tinyLabel,
  position: 'absolute', top: 32, left: 32, margin: 0,
};
const heroText = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 56, fontWeight: 600,
  letterSpacing: '-0.028em',
  color: '#ECEEF5',
  lineHeight: 1.08,
  margin: 0,
};
const heroSubText = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 44, fontWeight: 500,
  letterSpacing: '-0.022em',
  color: '#ECEEF5',
  lineHeight: 1.12,
  margin: 0,
};
const revealText = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 36, fontWeight: 500,
  letterSpacing: '-0.018em',
  color: '#ECEEF5',
  lineHeight: 1.15,
};
const accentText = {
  background: 'linear-gradient(180deg, #7DA8FF, #A78BFA)',
  WebkitBackgroundClip: 'text', backgroundClip: 'text',
  color: 'transparent',
};
const mapRow = {
  display: 'flex', alignItems: 'center', gap: 18,
  padding: '12px 20px',
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 14,
  transition: 'none',
};
const mapLike = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 20, color: '#B7BCCB',
  minWidth: 240, textAlign: 'right',
};
const mapArrow = { color: '#4E5468', fontFamily: 'JetBrains Mono, monospace', fontSize: 18 };
const mapMajor = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 22, fontWeight: 600,
  color: '#ECEEF5', minWidth: 240, textAlign: 'left',
  letterSpacing: '-0.012em',
};
const captionPill = {
  display: 'inline-block',
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 22, fontWeight: 500,
  letterSpacing: '-0.012em',
  color: '#ECEEF5',
  padding: '12px 22px',
  background: 'rgba(8,11,20,0.72)',
  backdropFilter: 'blur(6px)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 999,
};
const splitWrap = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: '100%',
};
const splitCol = {
  padding: 28, borderRadius: 18,
  border: '1px solid rgba(255,255,255,0.08)',
  minHeight: 260,
};
const splitColLeft = {
  background: 'linear-gradient(180deg, rgba(91,141,239,0.08), transparent 60%)',
};
const splitColRight = {
  background: 'linear-gradient(180deg, rgba(251,191,36,0.06), transparent 60%)',
};
const splitTag = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
  color: '#7DA8FF', marginBottom: 8,
};
const splitTitle = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 22, fontWeight: 600, letterSpacing: '-0.012em',
  color: '#ECEEF5', marginBottom: 18,
};
const chipsWrap = {
  display: 'flex', flexWrap: 'wrap', gap: 8,
};
const chipStyle = {
  padding: '8px 14px', borderRadius: 999,
  fontSize: 13.5, color: '#ECEEF5',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.03)',
  transition: 'none',
};
const chipBlue = {
  background: 'rgba(91,141,239,0.08)',
  borderColor: 'rgba(124,156,255,0.3)',
  color: '#ECEEF5',
};
const chipWarn = {
  background: 'rgba(251,191,36,0.08)',
  borderColor: 'rgba(251,191,36,0.32)',
  color: '#FBBF24',
};
const chipRisk = {
  background: 'rgba(251,113,133,0.08)',
  borderColor: 'rgba(251,113,133,0.4)',
  color: '#FB7185',
};
const constructGridStyle = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
  marginTop: 36, width: '100%',
};
const constructTile = {
  padding: '14px 16px',
  background: 'rgba(20,25,39,0.85)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 12,
  display: 'flex', alignItems: 'center', gap: 10,
  fontFamily: 'Inter Tight, sans-serif', fontSize: 14, fontWeight: 500,
  color: '#ECEEF5',
  transition: 'none',
};
const modelBox = {
  padding: 24,
  background: 'rgba(20,25,39,0.85)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 18,
  transition: 'none',
};
const modelBoxHot = {
  background: 'linear-gradient(180deg, #141C2D, #0F1626)',
  borderColor: 'rgba(124,156,255,0.35)',
  boxShadow: '0 24px 60px rgba(91,141,239,0.08)',
};
const modelTitle = {
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 22, fontWeight: 600, letterSpacing: '-0.018em',
  color: '#ECEEF5', marginBottom: 20,
};
const modelDiagram = {
  padding: 16,
  background: 'rgba(0,0,0,0.25)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 12,
  display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
};
const modelNode = {
  padding: '6px 12px', borderRadius: 999,
  background: 'rgba(91,141,239,0.12)',
  border: '1px solid rgba(124,156,255,0.35)',
  color: '#7DA8FF', fontSize: 12,
  fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em',
};
const modelInputNode = {
  ...modelNode,
  background: 'rgba(167,139,250,0.1)',
  borderColor: 'rgba(167,139,250,0.3)',
  color: '#A78BFA',
};
const modelOutput = {
  padding: '8px 14px', borderRadius: 999,
  background: 'linear-gradient(135deg, #5B8DEF, #A78BFA)',
  color: '#0B0F1A', fontWeight: 600, fontSize: 13,
  fontFamily: 'Inter Tight, sans-serif',
};
const flowNode = {
  padding: '10px 16px', borderRadius: 12,
  background: 'rgba(20,25,39,0.85)',
  border: '1px solid rgba(124,156,255,0.25)',
  color: '#ECEEF5',
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 14.5, fontWeight: 500,
  transition: 'none',
};
const startBtn = {
  padding: '14px 24px',
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 16, fontWeight: 600,
  background: 'linear-gradient(135deg, #5B8DEF, #A78BFA)',
  color: '#0B0F1A',
  border: 0, borderRadius: 12,
  cursor: 'pointer',
  boxShadow: '0 1px 0 rgba(255,255,255,0.35) inset, 0 12px 32px rgba(91,141,239,0.32)',
  letterSpacing: '-0.005em',
  transition: 'transform 0.15s',
};

const explainerRoot = {
  position: 'fixed', inset: 0,
  background: '#06080F',
  display: 'flex', flexDirection: 'column',
  zIndex: 40,
  fontFamily: 'Inter Tight, sans-serif',
  color: '#ECEEF5',
};
const explainerChrome = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '14px 24px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  background: 'rgba(7,9,15,0.78)',
  backdropFilter: 'blur(14px) saturate(140%)',
  flex: '0 0 auto',
};
const explainerBrand = {
  display: 'flex', alignItems: 'center', gap: 12,
  fontSize: 15, fontWeight: 600, letterSpacing: '-0.012em',
};
const brandMark = {
  width: 26, height: 26, borderRadius: 7,
  background: 'linear-gradient(135deg, #5B8DEF, #A78BFA)',
  boxShadow: '0 0 0 1px rgba(124,156,255,0.35), 0 6px 18px rgba(91,141,239,0.18)',
};
const brandSub = {
  display: 'block',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
  color: '#7A8197', fontWeight: 500, marginTop: 2,
};
const skipBtn = {
  padding: '8px 14px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#ECEEF5',
  borderRadius: 10,
  fontFamily: 'Inter Tight, sans-serif',
  fontSize: 13, fontWeight: 500,
  cursor: 'pointer',
  letterSpacing: '-0.005em',
};
const explainerStageWrap = {
  flex: 1, minHeight: 0,
  background: '#06080F',
};

const progressDotsStyle = {
  position: 'absolute',
  top: 24, left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex', gap: 6,
  zIndex: 10,
  pointerEvents: 'none',
};
const progressDotStyle = {
  width: 28, height: 3,
  borderRadius: 999,
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.06)',
  transition: 'transform 0.25s ease, opacity 0.25s',
};
const progressDotActive = {
  width: 48,
  boxShadow: '0 0 12px rgba(124,156,255,0.4)',
};
const progressDotPast = {
  opacity: 0.65,
};
