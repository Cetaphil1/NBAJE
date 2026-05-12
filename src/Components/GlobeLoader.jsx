import { useEffect, useRef, useState } from 'react'

const LOADING_MESSAGES = [
  "Getting your perfect sport…",
  "Ready to start a journey?",
  "You don't wanna be unfit, huh?",
  "Crunching your vibe…",
  "Matching you to something real…",
  "Almost there — worth the wait.",
  "Checking what fits you best…",
  "Finding your next obsession…",
  "This one's going to surprise you.",
  "Personalising just for you…",
]

const REGION_DURATIONS = {
  US:4000, CA:4000, MX:4500,
  GB:3500, FR:3500, DE:3500, IT:4000, ES:4000, NL:3500,
  PT:4000, SE:3500, NO:3500, DK:3500, FI:3500, PL:4000,
  RU:5000, UA:5000,
  CN:6000, JP:4000, KR:4000, IN:5000, PK:5500, BD:5500,
  TH:5000, VN:5000, PH:5000, ID:5500, MY:5000, SG:3500,
  SA:5000, AE:4500, IL:4500, TR:5000,
  ZA:5000, NG:5500, KE:5500, EG:5000,
  AU:4000, NZ:4000,
  BR:4500, AR:4500, CO:5000, CL:4500,
  DEFAULT:3000,
}

function drawBasketball(ctx, cx, cy, r, t) {
  const grad = ctx.createRadialGradient(cx-r*0.3, cy-r*0.32, r*0.05, cx, cy, r)
  grad.addColorStop(0, '#FF8C3A')
  grad.addColorStop(0.45, '#E06320')
  grad.addColorStop(0.82, '#C04E10')
  grad.addColorStop(1, '#7A2800')
  ctx.save()
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fillStyle=grad; ctx.fill()
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.clip()
  ctx.strokeStyle='rgba(30,12,0,0.75)'; ctx.lineWidth=r*0.045; ctx.lineCap='round'
  const rot = t*0.5
  for (let k=0; k<2; k++) {
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot+k*Math.PI)
    ctx.beginPath(); ctx.moveTo(-r,0); ctx.bezierCurveTo(-r*0.5,-r*0.55,r*0.5,r*0.55,r,0); ctx.stroke()
    ctx.restore()
  }
  for (let k=0; k<2; k++) {
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot+Math.PI/2+k*Math.PI)
    ctx.beginPath(); ctx.moveTo(-r,0); ctx.bezierCurveTo(-r*0.5,-r*0.55,r*0.5,r*0.55,r,0); ctx.stroke()
    ctx.restore()
  }
  ctx.restore()
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip()
  const spec=ctx.createRadialGradient(cx-r*0.28,cy-r*0.3,0,cx-r*0.1,cy-r*0.1,r*0.7)
  spec.addColorStop(0,'rgba(255,255,255,0.30)'); spec.addColorStop(0.35,'rgba(255,255,255,0.07)'); spec.addColorStop(1,'rgba(255,255,255,0)')
  ctx.fillStyle=spec; ctx.fillRect(cx-r,cy-r,r*2,r*2); ctx.restore()
}

function drawVolleyball(ctx, cx, cy, r, t) {
  const grad=ctx.createRadialGradient(cx-r*0.3,cy-r*0.32,r*0.05,cx,cy,r)
  grad.addColorStop(0,'#FFFFFF'); grad.addColorStop(0.5,'#F0EDE8'); grad.addColorStop(0.85,'#D8D3CC'); grad.addColorStop(1,'#A89E94')
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill()
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip()
  const rot=t*0.4
  const panelColors=['rgba(0,80,180,0.55)','rgba(220,40,40,0.55)','rgba(20,140,20,0.45)','rgba(220,160,0,0.45)','rgba(0,80,180,0.45)','rgba(220,40,40,0.45)']
  for (let i=0; i<3; i++) {
    const angle=rot+(i/3)*Math.PI
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(angle)
    ctx.beginPath(); ctx.moveTo(0,-r); ctx.bezierCurveTo(r*0.6,-r*0.6,r*0.6,r*0.6,0,r); ctx.bezierCurveTo(-r*0.15,r*0.5,-r*0.15,-r*0.5,0,-r); ctx.fillStyle=panelColors[i*2]; ctx.fill()
    ctx.beginPath(); ctx.moveTo(0,-r); ctx.bezierCurveTo(r*0.6,-r*0.5,r*0.6,r*0.5,0,r); ctx.strokeStyle='rgba(80,70,60,0.55)'; ctx.lineWidth=r*0.038; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0,-r); ctx.bezierCurveTo(-r*0.6,-r*0.5,-r*0.6,r*0.5,0,r); ctx.strokeStyle='rgba(80,70,60,0.55)'; ctx.lineWidth=r*0.038; ctx.stroke()
    ctx.restore()
  }
  ctx.restore()
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip()
  const spec=ctx.createRadialGradient(cx-r*0.28,cy-r*0.3,0,cx-r*0.1,cy-r*0.1,r*0.7)
  spec.addColorStop(0,'rgba(255,255,255,0.45)'); spec.addColorStop(0.3,'rgba(255,255,255,0.10)'); spec.addColorStop(1,'rgba(255,255,255,0)')
  ctx.fillStyle=spec; ctx.fillRect(cx-r,cy-r,r*2,r*2); ctx.restore()
}

function drawBaseball(ctx, cx, cy, r, t) {
  const grad=ctx.createRadialGradient(cx-r*0.3,cy-r*0.32,r*0.05,cx,cy,r)
  grad.addColorStop(0,'#FEFAF5'); grad.addColorStop(0.5,'#F5EEE4'); grad.addColorStop(0.85,'#E0D4C4'); grad.addColorStop(1,'#B8A898')
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill()
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip()
  const rot=t*0.45
  for (let side=0; side<2; side++) {
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot+side*Math.PI)
    const nStitch=10
    for (let s=0; s<nStitch; s++) {
      const frac=(s+0.5)/nStitch
      const bx=(x0,x1,x2,x3,f)=>{const t2=f,it=1-f;return it*it*it*x0+3*it*it*t2*x1+3*it*t2*t2*x2+t2*t2*t2*x3}
      const px=bx(r*0.15,r*0.75,r*0.75,r*0.15,frac)
      const py=bx(-r*0.85,-r*0.5,r*0.5,r*0.85,frac)
      const px2=bx(r*0.15,r*0.75,r*0.75,r*0.15,frac+0.01)
      const py2=bx(-r*0.85,-r*0.5,r*0.5,r*0.85,frac+0.01)
      const ang=Math.atan2(py2-py,px2-px)+Math.PI/2
      const sl=r*0.09
      ctx.save(); ctx.translate(px,py); ctx.rotate(ang)
      for (let d=-1; d<=1; d+=2) {
        ctx.beginPath(); ctx.moveTo(d*r*0.04,-sl/2); ctx.lineTo(d*r*0.04,sl/2)
        ctx.strokeStyle='rgba(200,28,28,0.88)'; ctx.lineWidth=r*0.028; ctx.lineCap='round'; ctx.stroke()
      }
      ctx.restore()
    }
    ctx.restore()
  }
  ctx.restore()
  ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip()
  const spec=ctx.createRadialGradient(cx-r*0.28,cy-r*0.3,0,cx-r*0.1,cy-r*0.1,r*0.7)
  spec.addColorStop(0,'rgba(255,255,255,0.40)'); spec.addColorStop(0.3,'rgba(255,255,255,0.10)'); spec.addColorStop(1,'rgba(255,255,255,0)')
  ctx.fillStyle=spec; ctx.fillRect(cx-r,cy-r,r*2,r*2); ctx.restore()
}

function drawShadow(ctx, cx, cy, r) {
  ctx.save()
  const sg=ctx.createRadialGradient(cx,cy+r*0.92,0,cx,cy+r*0.92,r*0.7)
  sg.addColorStop(0,'rgba(0,0,0,0.32)'); sg.addColorStop(0.5,'rgba(0,0,0,0.10)'); sg.addColorStop(1,'rgba(0,0,0,0)')
  ctx.fillStyle=sg; ctx.scale(1,0.35); ctx.beginPath(); ctx.arc(cx,(cy+r*0.92)/0.35,r*0.65,0,Math.PI*2); ctx.fill()
  ctx.restore()
}

const BALLS = ['basketball','volleyball','baseball']

export default function GlobeLoader({ visible, onDone }) {
  const canvasRef   = useRef(null)
  const animRef     = useRef(null)
  const startRef    = useRef(null)
  const doneRef     = useRef(false)
  const durationRef = useRef(3000)
  const [msgIdx,    setMsgIdx]    = useState(0)
  const [progress,  setProgress]  = useState(0)
  const [phase,     setPhase]     = useState('in')
  const [countryCode, setCC]      = useState(null)

  useEffect(() => {
    if (!visible) return
    doneRef.current = false; startRef.current = null
    setProgress(0); setMsgIdx(0); setPhase('in')
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => { const cc=d.country_code||'DEFAULT'; setCC(cc); durationRef.current=REGION_DURATIONS[cc]||REGION_DURATIONS.DEFAULT })
      .catch(() => { durationRef.current=REGION_DURATIONS.DEFAULT })
  }, [visible])

  useEffect(() => {
    if (!visible) return
    let idx=0; setMsgIdx(0)
    const iv=setInterval(()=>{ idx=(idx+1)%LOADING_MESSAGES.length; setMsgIdx(idx) },2200)
    return ()=>clearInterval(iv)
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const canvas=canvasRef.current; if (!canvas) return
    const DPR=window.devicePixelRatio||1, W=200, H=200
    canvas.width=W*DPR; canvas.height=H*DPR
    canvas.style.width=W+'px'; canvas.style.height=H+'px'
    const ctx=canvas.getContext('2d'); ctx.scale(DPR,DPR)
    const CX=W/2, CY=H/2, R=78

    function easeInOut(x) { return x<0.5?2*x*x:1-Math.pow(-2*x+2,2)/2 }

    function frame(ts) {
      if (!startRef.current) startRef.current=ts
      const elapsed=ts-startRef.current, dur=durationRef.current
      const rawProg=Math.min(elapsed/dur,1), prog=easeInOut(rawProg)
      setProgress(prog)
      const t=elapsed/1000
      const segDur=dur/3, ballIdx=Math.min(Math.floor(elapsed/segDur),2)
      const segProg=(elapsed%segDur)/segDur
      const fadeZone=0.18; let alpha=1
      if (segProg>1-fadeZone && ballIdx<2) alpha=1-(segProg-(1-fadeZone))/fadeZone

      ctx.clearRect(0,0,W,H)

      const nP=24
      for (let i=0; i<nP; i++) {
        const frac=i/nP, angle=frac*Math.PI*2+t*1.3+i*0.3
        const rad=R+14+frac*36+Math.sin(t*2.8+i*0.9)*5
        const px=CX+Math.cos(angle)*rad, py=CY+Math.sin(angle)*rad*0.48
        const a=0.06+frac*0.18*(0.5+0.5*Math.sin(t*3+i)), sz=1.1+frac*2.0
        ctx.beginPath(); ctx.arc(px,py,sz,0,Math.PI*2); ctx.fillStyle=`rgba(220,210,200,${a})`; ctx.fill()
      }

      for (let k=0; k<3; k++) {
        const baseA=t*0.85+(k/3)*Math.PI*2, iR=R+8, oR=R+42+k*10
        const wg=ctx.createRadialGradient(CX,CY,iR,CX,CY,oR)
        wg.addColorStop(0,'rgba(200,190,180,0.18)'); wg.addColorStop(0.6,'rgba(200,190,180,0.06)'); wg.addColorStop(1,'rgba(200,190,180,0)')
        ctx.save(); ctx.beginPath(); ctx.arc(CX,CY,oR,baseA,baseA+1.5); ctx.arc(CX,CY,iR,baseA+1.5,baseA,true); ctx.closePath(); ctx.fillStyle=wg; ctx.fill(); ctx.restore()
      }

      drawShadow(ctx,CX,CY,R)
      ctx.globalAlpha=alpha
      if (BALLS[ballIdx]==='basketball') drawBasketball(ctx,CX,CY,R,t)
      else if (BALLS[ballIdx]==='volleyball') drawVolleyball(ctx,CX,CY,R,t)
      else drawBaseball(ctx,CX,CY,R,t)
      ctx.globalAlpha=1

      if (alpha<1 && ballIdx<2) {
        ctx.globalAlpha=1-alpha
        if (BALLS[ballIdx+1]==='basketball') drawBasketball(ctx,CX,CY,R,t)
        else if (BALLS[ballIdx+1]==='volleyball') drawVolleyball(ctx,CX,CY,R,t)
        else drawBaseball(ctx,CX,CY,R,t)
        ctx.globalAlpha=1
      }

      if (rawProg>=1 && !doneRef.current) {
        doneRef.current=true; setPhase('out')
        setTimeout(()=>{ onDone&&onDone() },400)
      } else {
        animRef.current=requestAnimationFrame(frame)
      }
    }
    animRef.current=requestAnimationFrame(frame)
    return ()=>{ if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [visible])

  if (!visible) return null

  return (
    <div style={{ position:'fixed', inset:0, zIndex:10000, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'rgba(4,5,12,0.90)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', animation:phase==='out'?'fadeOut 0.4s ease forwards':'fadeIn 0.35s ease' }}>
      {countryCode && countryCode!=='DEFAULT' && (
        <div style={{ position:'absolute', top:28, right:28, fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'oklch(62% 0.012 265)', background:'oklch(14% 0.018 265 / 0.8)', border:'1px solid oklch(24% 0.022 265)', borderRadius:8, padding:'5px 10px', display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ opacity:0.6 }}>📍</span>{countryCode}
        </div>
      )}
      <div style={{ width:200, height:200, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:36 }}>
        <canvas ref={canvasRef} style={{ display:'block' }} />
      </div>
      <div style={{ height:28, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:32, overflow:'hidden' }}>
        <p key={msgIdx} style={{ fontSize:'0.97rem', fontWeight:500, color:'oklch(72% 0.008 265)', letterSpacing:'0.01em', animation:'msgPop 0.35s cubic-bezier(0.34,1.56,0.64,1)', margin:0 }}>
          {LOADING_MESSAGES[msgIdx%LOADING_MESSAGES.length]}
        </p>
      </div>
      <div style={{ width:240, height:3, background:'oklch(20% 0.015 265)', borderRadius:99, overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${progress*100}%`, background:'linear-gradient(90deg, oklch(50% 0.22 272), oklch(66% 0.22 272))', borderRadius:99, transition:'width 0.1s linear', boxShadow:'0 0 8px oklch(66% 0.22 272 / 0.6)' }} />
      </div>
      <p style={{ marginTop:10, fontSize:'0.72rem', fontWeight:700, color:'oklch(38% 0.010 265)', letterSpacing:'0.08em' }}>{Math.round(progress*100)}%</p>
      <style>{`@keyframes msgPop{from{opacity:0;transform:translateY(6px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>
    </div>
  )
}
