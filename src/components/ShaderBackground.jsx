import { useEffect, useRef } from 'react'

const VERT = `attribute vec2 a_pos; void main(){gl_Position=vec4(a_pos,0.,1.);}`
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_click;
uniform float u_click_t;
#define TAU 6.28318530718

vec3 palette(float t){
  vec3 a=vec3(0.04,0.06,0.13);
  vec3 b=vec3(0.04,0.07,0.18);
  vec3 c=vec3(0.7,0.8,1.0);
  vec3 d=vec3(0.0,0.08,0.20);
  return a+b*cos(TAU*(c*t+d));
}
void main(){
  vec2 uv=(gl_FragCoord.xy-u_res*0.5)/min(u_res.x,u_res.y);
  vec2 mouse=(u_mouse-u_res*0.5)/min(u_res.x,u_res.y);
  vec2 click=(u_click-u_res*0.5)/min(u_res.x,u_res.y);
  float t=u_time*0.22;
  float md=length(uv-mouse);
  float mw=sin(md*16.-t*2.5)*0.06*exp(-md*3.2);
  float cd=length(uv-click);
  float sh=sin(cd*26.-u_click_t*10.)*0.10*exp(-cd*3.2)*exp(-u_click_t*1.3);
  vec2 q=uv+mw+sh;
  float v=0.;
  v+=sin(q.x*3.2+t);
  v+=sin(q.y*3.2+t*1.05);
  v+=sin((q.x+q.y)*2.6+t*0.85);
  v+=sin(length(q)*5.5-t*1.6);
  v+=sin(q.x*1.8-q.y*2.6+t*1.1);
  v+=sin(sqrt(q.x*q.x*0.5+q.y*q.y*2.)*4.2+t);
  v=(v*0.5+0.5)/6.;
  vec3 col=palette(v+t*0.07);
  col*=0.38;
  float mg=exp(-md*md*4.5)*0.18;
  col=mix(col,vec3(0.12,0.22,0.55),mg);
  float vig=1.-dot(uv*0.55,uv*0.55);
  col*=pow(max(vig,0.),0.6);
  gl_FragColor=vec4(col,1.);
}`

export default function ShaderBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    function mkShader(type, src) {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW)

    let mouse = [0,0], tMouse = [0,0], click = [0,0], clickT = 999
    const t0 = performance.now()
    let raf

    function resize() {
      canvas.width  = window.innerWidth  * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()

    const onResize = () => resize()
    const onMouseMove = e => {
      tMouse = [e.clientX * devicePixelRatio, (window.innerHeight - e.clientY) * devicePixelRatio]
    }
    const onClick = e => {
      if (e.target.closest('#root')) return
      click = [e.clientX * devicePixelRatio, (window.innerHeight - e.clientY) * devicePixelRatio]
      clickT = 0
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)

    function frame(now) {
      const t = (now - t0) * 0.001
      clickT += 0.016
      mouse[0] += (tMouse[0] - mouse[0]) * 0.07
      mouse[1] += (tMouse[1] - mouse[1]) * 0.07
      gl.useProgram(prog)
      const loc = gl.getAttribLocation(prog, 'a_pos')
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
      const sf = (n, v) => gl.uniform1f(gl.getUniformLocation(prog, n), v)
      const s2 = (n, x, y) => gl.uniform2f(gl.getUniformLocation(prog, n), x, y)
      s2('u_res', canvas.width, canvas.height)
      sf('u_time', t)
      s2('u_mouse', mouse[0], mouse[1])
      s2('u_click', click[0], click[1])
      sf('u_click_t', clickT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position:'fixed', inset:0, zIndex:0, width:'100%', height:'100%', pointerEvents:'none' }}
    />
  )
}
