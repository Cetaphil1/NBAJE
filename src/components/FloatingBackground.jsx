import { useMemo } from 'react'

const BG_ICONS = ['⚽','🏀','🎾','🏊','🥊','🏃','🏐','🏋️','🤸','🚴','🧗','💃','🥋','⛳','🛹','🏸','🤺','🥏','🏉','🧘','⛷️','🏄','🏹','🏂','📣']

export default function FloatingBackground() {
  const items = useMemo(() => BG_ICONS.map((icon, i) => ({
    icon,
    left:  `${(i * 17 + 3) % 95}%`,
    top:   `${(i * 23 + 5) % 90}%`,
    size:  `${2.6 + (i % 4) * 0.9}rem`,
    dur:   `${26 + (i % 6) * 8}s`,
    delay: `${-(i * 4.1)}s`,
    op:    0.03 + (i % 3) * 0.013,
    anim:  `bgDrift${i % 4}`,
  })), [])

  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, overflow:'hidden' }}>
      {items.map((it, i) => (
        <div key={i} style={{
          position:'absolute', left:it.left, top:it.top,
          fontSize:it.size, opacity:it.op, userSelect:'none',
          filter:'blur(2px)',
          animation:`${it.anim} ${it.dur} ease-in-out ${it.delay} infinite alternate`,
        }}>
          {it.icon}
        </div>
      ))}
    </div>
  )
}
