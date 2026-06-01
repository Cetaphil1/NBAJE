// iceberg.jsx — animated sequence for "Fit Beyond Interest"
// Mounts into #iceberg-mount. Loops. Below-water labels surface in sequence.

import React, { useState } from 'react';
import { useTimeline, interpolate, Easing, useTime, Stage } from './animations';

const W = 1280;
const H = 720;
const WATERLINE = 248;
const STAGE_DUR = 14;

const DEEP_LABELS = [
  { t: 1.2,  x: 240,  y: 340,  text: 'WORKLOAD FIT',          key: 'workload-fit',         color: '#7DA8FF' },
  { t: 2.0,  x: 420,  y: 470,  text: 'STRESS TOLERANCE',      key: 'stress-tolerance',     color: '#A78BFA' },
  { t: 2.8,  x: 700,  y: 360,  text: 'MOTIVATION QUALITY',    key: 'motivation-quality',   color: '#A78BFA' },
  { t: 3.6,  x: 900,  y: 460,  text: 'BEHAVIORAL ENGAGEMENT', key: 'behavioral-engagement',color: '#7DA8FF' },
  { t: 4.6,  x: 260,  y: 560,  text: 'BELONGING',             key: 'belonging',            color: '#F472B6' },
  { t: 5.4,  x: 520,  y: 600,  text: 'IDENTITY FIT',          key: 'identity-fit',         color: '#F472B6' },
  { t: 6.2,  x: 780,  y: 600,  text: 'RESILIENCE',            key: 'resilience',           color: '#4ADE80' },
  { t: 7.2,  x: 1000, y: 580,  text: 'SWITCH RISK',           key: 'switch-risk',          color: '#FBBF24' },
];

function IcebergArt() {
  const { time } = useTimeline();
  const cam = interpolate(
    [0, 1.0, 2.5],
    [3.2, 1.6, 1.0],
    Easing.easeInOutCubic
  )(time);
  const camY = interpolate(
    [0, 1.0, 2.5],
    [-180, -80, 0],
    Easing.easeInOutCubic
  )(time);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      transform: `scale(${cam}) translateY(${camY}px)`,
      transformOrigin: '50% 35%',
      transition: 'none',
    }}>
      <svg viewBox="0 0 1280 720" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="ice-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E5ECFF" />
            <stop offset="1" stopColor="#8EA8E8" />
          </linearGradient>
          <linearGradient id="ice-bot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3E5FA8" />
            <stop offset="1" stopColor="#0C1A3A" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E1830" stopOpacity="0.0" />
            <stop offset="0.04" stopColor="#0E1830" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#0B1428" stopOpacity="0.85" />
            <stop offset="1" stopColor="#06091A" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="1280" height={WATERLINE} fill="#080B14" />
        <rect x="0" y={WATERLINE} width="1280" height={720 - WATERLINE} fill="url(#water)" />

        <path
          d="M 560 215  L 620 130  L 680 110  L 720 145  L 740 215  Z"
          fill="url(#ice-top)"
          opacity="0.95"
        />
        <path
          d="M 600 200  L 645 150  L 680 130  L 695 165  Z"
          fill="#FFFFFF"
          opacity="0.35"
        />

        <path
          d="M 560 215  L 540 270  L 460 330  L 380 410  L 360 510  L 420 620  L 560 680  L 740 695  L 880 660  L 960 570  L 980 470  L 920 360  L 820 285  L 740 215 Z"
          fill="url(#ice-bot)"
          opacity="0.92"
        />
        <g stroke="#5876B5" strokeWidth="1" opacity="0.35" fill="none">
          <path d="M 580 230 L 620 320 L 580 420 L 640 520" />
          <path d="M 720 235 L 760 340 L 730 460 L 800 580" />
          <path d="M 480 360 L 580 440 L 540 560" />
          <path d="M 860 380 L 800 480 L 860 600" />
        </g>

        <line x1="0" y1={WATERLINE} x2="1280" y2={WATERLINE}
          stroke="#5B8DEF" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1={WATERLINE + 1} x2="1280" y2={WATERLINE + 1}
          stroke="#5B8DEF" strokeWidth="0.5" opacity="0.25" strokeDasharray="2 6" />
      </svg>
    </div>
  );
}

function AboveLabel() {
  const time = useTime();
  const op = interpolate([0, 0.5, 1.0], [0, 0, 1], Easing.easeOutCubic)(time);
  const ty = (1 - op) * 8;
  return (
    <div style={{
      position: 'absolute',
      left: 760, top: 96,
      opacity: op,
      transform: `translateY(${ty}px)`,
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11, letterSpacing: '0.14em',
        color: '#7A8197', textTransform: 'uppercase',
      }}>What quizzes measure</div>
      <div style={{
        fontFamily: 'Inter Tight, Inter, sans-serif',
        fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em',
        color: '#ECEEF5',
      }}>Interest</div>
      <div style={{
        width: 80, height: 1, background: '#5B8DEF', opacity: 0.6,
      }} />
    </div>
  );
}

function DeepLabel({ data, discovered, onClick }) {
  const time = useTime();
  const local = time - data.t;
  if (local < 0) return null;
  const op = Math.min(1, local / 0.5);
  const ty = (1 - op) * 10;

  return (
    <button
      type="button"
      onClick={() => onClick(data.key)}
      aria-label={`Reveal ${data.text} in the legend`}
      style={{
        position: 'absolute',
        left: data.x, top: data.y,
        transform: `translate(-50%, ${ty}px)`,
        opacity: op,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        background: 'transparent',
        border: 0, padding: 6,
        margin: 0,
        cursor: 'pointer',
        pointerEvents: 'auto',
        font: 'inherit', color: 'inherit',
        transition: 'transform 0.18s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = `translate(-50%, ${ty - 2}px) scale(1.05)`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = `translate(-50%, ${ty}px)`; }}
    >
      <div style={{
        width: discovered ? 12 : 10,
        height: discovered ? 12 : 10,
        borderRadius: '50%',
        background: discovered ? data.color : 'transparent',
        border: `1.5px solid ${data.color}`,
        boxShadow: discovered
          ? `0 0 18px ${data.color}, 0 0 0 4px ${data.color}28`
          : `0 0 10px ${data.color}66`,
        transition: 'all 0.22s ease',
      }} />
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11, letterSpacing: '0.12em',
        color: data.color, textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        textShadow: '0 0 16px rgba(0,0,0,0.6)',
        fontWeight: discovered ? 600 : 500,
      }}>{data.text}</div>
    </button>
  );
}

function Caption() {
  const time = useTime();

  let text = '';
  let op = 0;

  if (time >= 0.6 && time < 2.6) {
    text = 'Most quizzes stop here.';
    op = Math.min(1, (time - 0.6) / 0.4) * (1 - Math.max(0, (time - 2.2) / 0.4));
  } else if (time >= 2.6 && time < 8.0) {
    text = 'Real fit lives below the surface.';
    op = Math.min(1, (time - 2.6) / 0.4) * (1 - Math.max(0, (time - 7.5) / 0.4));
  } else if (time >= 8.0) {
    text = 'Eight signals that predict whether students stay.';
    op = Math.min(1, (time - 8.0) / 0.5);
  }
  op = Math.max(0, Math.min(1, op));

  return (
    <div style={{
      position: 'absolute',
      left: 0, right: 0, bottom: 44,
      textAlign: 'center',
      opacity: op,
      transition: 'opacity 0.25s',
    }}>
      <div style={{
        display: 'inline-block',
        fontFamily: 'Inter Tight, Inter, sans-serif',
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: '-0.012em',
        color: '#ECEEF5',
        padding: '10px 18px',
        background: 'rgba(8,11,20,0.7)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 999,
      }}>{text}</div>
    </div>
  );
}

function HUD() {
  return (
    <div style={{
      position: 'absolute', left: 32, top: 32,
      display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10.5, letterSpacing: '0.14em',
      color: '#7A8197', textTransform: 'uppercase',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5B8DEF', boxShadow: '0 0 8px #5B8DEF' }} />
      Iceberg model · fit beyond interest
    </div>
  );
}

function IcebergScene() {
  const [discovered, setDiscovered] = useState(() => new Set());

  const onLabelClick = (key) => {
    setDiscovered((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      try {
        window.dispatchEvent(new CustomEvent('iceberg:discover', {
          detail: { key, count: next.size, total: DEEP_LABELS.length },
        }));
      } catch {}
      return next;
    });
  };

  React.useEffect(() => {
    const handler = () => {
      const allKeys = DEEP_LABELS.map(d => d.key);
      setDiscovered(new Set(allKeys));
      allKeys.forEach((key, i) => {
        window.dispatchEvent(new CustomEvent('iceberg:discover', {
          detail: { key, count: i + 1, total: allKeys.length },
        }));
      });
    };
    window.addEventListener('iceberg:revealAll', handler);
    return () => window.removeEventListener('iceberg:revealAll', handler);
  }, []);

  return (
    <Stage
      width={W}
      height={H}
      duration={STAGE_DUR}
      background="#080B14"
      loop={true}
      autoplay={true}
      persistKey="iceberg-anim"
    >
      <IcebergArt />
      <AboveLabel />
      {DEEP_LABELS.map((d, i) => (
        <DeepLabel
          key={i}
          data={d}
          discovered={discovered.has(d.key)}
          onClick={onLabelClick}
        />
      ))}
      <Caption />
      <HUD />
    </Stage>
  );
}

export default IcebergScene;
