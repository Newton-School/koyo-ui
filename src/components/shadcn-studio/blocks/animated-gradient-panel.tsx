'use client'

// React Imports
import { useRef } from 'react'
import type { ReactNode } from 'react'

// Third-party Imports
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

// Util Imports
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP)

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

// A domain-warped noise field (flowing, silk-like) shaped into a warm crescent that sweeps from the top edge
// to the bottom-right corner. The pointer swirls the flow, a click sends a shockwave through it, and the
// crescent fades to transparent so the panel's own background (and theme) shows around it.
const fragment = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uReveal;
  uniform vec3 uRipple;

  // 2D simplex noise, Ian McEwan / Ashima Arts (MIT)
  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Only a few octaves: large, soft folds rather than fine turbulence
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.55;

    for (int i = 0; i < 3; i++) {
      value += amplitude * snoise(p);
      p = p * 1.9 + vec2(17.1, 9.3);
      amplitude *= 0.4;
    }

    return value;
  }

  vec3 ramp(float h) {
    vec3 color = mix(vec3(0.992, 0.855, 0.769), vec3(0.969, 0.678, 0.541), smoothstep(0.0, 0.3, h));
    color = mix(color, vec3(0.933, 0.494, 0.294), smoothstep(0.25, 0.55, h));
    color = mix(color, vec3(0.886, 0.365, 0.184), smoothstep(0.55, 0.8, h));
    color = mix(color, vec3(0.82, 0.259, 0.141), smoothstep(0.82, 1.0, h));
    return color;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime;

    // Pointer: the flow swirls and swells around the cursor
    vec2 mouse = vec2(uMouse.x * aspect, uMouse.y);
    vec2 toMouse = p - mouse;
    float falloff = exp(-dot(toMouse, toMouse) * 5.0);
    float angle = uHover * 1.2 * falloff;
    p = mouse + mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * toMouse;
    p -= toMouse * uHover * 0.2 * falloff;

    // Click: a shockwave ring that travels outwards and dies away
    vec2 fromRipple = p - vec2(uRipple.x * aspect, uRipple.y);
    float rippleDistance = length(fromRipple);
    float front = rippleDistance - uRipple.z * 0.75;
    float wave = sin(front * 26.0) * exp(-front * front * 28.0) * exp(-uRipple.z * 1.3);
    p += fromRipple / (rippleDistance + 1e-4) * wave * 0.04;

    // Domain warping: noise displaced by noise displaced by noise
    vec2 s = p * 0.75;
    vec2 q = vec2(fbm(s + vec2(0.0, t * 0.16)), fbm(s + vec2(5.2, 1.3) - vec2(t * 0.13, 0.0)));
    vec2 r = vec2(
      fbm(s + 1.3 * q + vec2(1.7, 9.2) + t * 0.1),
      fbm(s + 1.3 * q + vec2(8.3, 2.8) - t * 0.08)
    );
    float f = fbm(s + 1.5 * r);

    // Crescent: a soft band around a curved centre line, its edges pushed around by the flow
    float y = uv.y;
    float centre = 0.64 - 0.1 * sin(3.14159 * y) + 0.24 * (1.0 - y) * (1.0 - y);
    centre += r.x * 0.14 + 0.04 * sin(t * 0.35 + y * 3.0);
    float halfWidth = mix(0.24, 0.44, y);
    float band = 1.0 - smoothstep(0.0, 1.05, abs(uv.x - centre) / halfWidth + q.y * 0.15);

    float heat = band * (0.78 + 0.45 * f);
    heat += smoothstep(0.35, 1.0, uv.x * 0.8 + (1.0 - y)) * 0.25 * band;
    heat *= mix(1.0, 0.72, smoothstep(0.55, 1.0, y));

    // Intro: blooms out of the bottom-right corner
    float reach = uReveal * 2.0;
    heat *= 1.0 - smoothstep(reach - 0.6, reach, length(uv - vec2(1.0, 0.0)));
    heat = clamp(heat, 0.0, 1.0);

    vec3 color = ramp(heat);
    color = mix(color, vec3(0.933, 0.525, 0.51), smoothstep(0.9, 1.5, uv.x + (1.0 - y) * 0.9) * 0.55);

    // Silky highlights riding the flow
    float sheen = pow(clamp(0.5 + 0.5 * fbm(s * 1.2 + r * 1.4 - t * 0.06), 0.0, 1.0), 4.0);
    color += sheen * band * 0.22;

    float alpha = smoothstep(0.02, 0.55, heat);

    // Dither to keep the gradient free of banding
    float noise = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    color += (noise - 0.5) / 128.0;

    gl_FragColor = vec4(color * alpha, alpha);
  }
`

// Fine grain gives the gradient a printed texture
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

// Shown only when WebGL is unavailable
const FALLBACK =
  'radial-gradient(60% 45% at 62% 8%, #f8ba9c, transparent 70%), radial-gradient(48% 42% at 58% 45%, #ed8252, transparent 72%), radial-gradient(40% 32% at 78% 80%, #df5a30, transparent 70%), radial-gradient(35% 25% at 100% 100%, #ee8080, transparent 70%)'

type AnimatedGradientPanelProps = {
  className?: string
  children?: ReactNode
}

const AnimatedGradientPanel = ({ className, children }: AnimatedGradientPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null)
  const canvasHostRef = useRef<HTMLDivElement>(null)
  const fallbackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const panel = panelRef.current
      const host = canvasHostRef.current

      if (!panel || !host) return

      // Animated values, eased by GSAP and pushed to the shader every frame
      const state = { time: gsap.utils.random(0, 100), speed: 1, hover: 0, reveal: 0, mx: 0.5, my: 0.5 }
      const ripple = { x: 0.5, y: 0.5, age: 10 }

      let renderer: Renderer | null = null
      let mesh: Mesh | null = null
      let program: Program | null = null

      try {
        // The gradient is soft, so it renders at reduced resolution and scales up for free
        renderer = new Renderer({
          alpha: true,
          premultipliedAlpha: true,
          depth: false,
          dpr: Math.min(window.devicePixelRatio, 2) * 0.6
        })
        program = new Program(renderer.gl, {
          vertex,
          fragment,
          depthTest: false,
          uniforms: {
            uTime: { value: 0 },
            uResolution: { value: [1, 1] },
            uMouse: { value: [0.5, 0.5] },
            uHover: { value: 0 },
            uReveal: { value: 0 },
            uRipple: { value: [0.5, 0.5, 10] }
          }
        })
        mesh = new Mesh(renderer.gl, { geometry: new Triangle(renderer.gl), program })
      } catch {
        renderer = null
      }

      if (!renderer || !mesh || !program) {
        gsap.set(fallbackRef.current, { autoAlpha: 1 })
      }

      const canvas = renderer?.gl.canvas

      if (canvas) host.appendChild(canvas)

      const draw = () => {
        if (!renderer || !mesh || !program) return

        const { uniforms } = program

        uniforms.uTime.value = state.time
        uniforms.uMouse.value = [state.mx, state.my]
        uniforms.uHover.value = state.hover
        uniforms.uReveal.value = state.reveal
        uniforms.uRipple.value = [ripple.x, ripple.y, ripple.age]
        renderer.render({ scene: mesh })
      }

      const resize = () => {
        if (!renderer || !program || !canvas) return

        const { width, height } = host.getBoundingClientRect()

        if (!width || !height) return

        renderer.setSize(width, height)
        canvas.style.width = '100%'
        canvas.style.height = '100%'
        program.uniforms.uResolution.value = [width, height]
        draw()
      }

      const resizeObserver = new ResizeObserver(resize)

      resizeObserver.observe(host)

      const mm = gsap.matchMedia()

      // One of the two conditions always matches, so the callback always runs
      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', reduceMotion: '(prefers-reduced-motion: reduce)' },
        context => {
          // Reduced motion: a single still frame, no intro
          if (context.conditions?.reduceMotion) {
            state.reveal = 1
            draw()

            return
          }

          const safe = <T extends (event: PointerEvent) => void>(name: string, handler: T) =>
            context.add(name, handler) as T

          // Intro: the gradient blooms out of the corner with a burst of speed, then the content settles in.
          // The squiggle stays hidden until it starts drawing, otherwise its round line cap shows as a dot.
          gsap
            .timeline()
            .fromTo(state, { reveal: 0 }, { reveal: 1, duration: 2.6, ease: 'power2.out' })
            .fromTo(state, { speed: 5 }, { speed: 1, duration: 3, ease: 'power3.out' }, 0)
            .fromTo(
              '[data-reveal]',
              { autoAlpha: 0, y: 24 },
              { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1, ease: 'power3.out' },
              0.35
            )
            .fromTo(
              '[data-word]',
              { yPercent: 110 },
              { yPercent: 0, duration: 1.1, stagger: 0.09, ease: 'power4.out' },
              0.55
            )
            .fromTo(
              '[data-script]',
              { clipPath: 'inset(-20% 100% -20% 0)' },
              { clipPath: 'inset(-20% 0% -20% 0)', duration: 1, ease: 'power2.inOut' },
              0.9
            )
            .fromTo(
              '[data-squiggle]',
              { strokeDashoffset: 1, autoAlpha: 0 },
              { strokeDashoffset: 0, autoAlpha: 1, duration: 0.9, ease: 'power2.out' },
              1.5
            )

          // Render loop on GSAP's ticker, skipped while the panel is hidden or scrolled away
          let visible = true

          const tick = (_time: number, deltaTime: number) => {
            if (!visible) return

            const dt = Math.min(deltaTime, 50) / 1000

            state.time += dt * state.speed
            ripple.age += dt
            draw()
          }

          const intersectionObserver = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting
          })

          intersectionObserver.observe(panel)
          gsap.ticker.add(tick)

          const moveX = gsap.quickTo(state, 'mx', { duration: 1.2, ease: 'power3' })
          const moveY = gsap.quickTo(state, 'my', { duration: 1.2, ease: 'power3' })

          const toUv = (event: PointerEvent) => {
            const rect = panel.getBoundingClientRect()

            return { x: (event.clientX - rect.left) / rect.width, y: 1 - (event.clientY - rect.top) / rect.height }
          }

          const onPointerEnter = safe('onPointerEnter', event => {
            const { x, y } = toUv(event)

            // Start the swirl under the cursor instead of sweeping in from the centre
            moveX(x, x)
            moveY(y, y)
            gsap.to(state, { hover: 1, speed: 1.8, duration: 1.2, ease: 'power2.out', overwrite: 'auto' })
          })

          const onPointerMove = safe('onPointerMove', event => {
            const { x, y } = toUv(event)

            moveX(x)
            moveY(y)
          })

          const onPointerLeave = safe('onPointerLeave', () => {
            gsap.to(state, { hover: 0, speed: 1, duration: 1.6, ease: 'power2.out', overwrite: 'auto' })
          })

          const onPointerDown = safe('onPointerDown', event => {
            const { x, y } = toUv(event)

            ripple.x = x
            ripple.y = y
            ripple.age = 0

            // The flow surges, then settles back to its hover pace
            gsap.fromTo(state, { speed: 5 }, { speed: 1.8, duration: 1.8, ease: 'power3.out', overwrite: 'auto' })
          })

          panel.addEventListener('pointerenter', onPointerEnter)
          panel.addEventListener('pointermove', onPointerMove)
          panel.addEventListener('pointerleave', onPointerLeave)
          panel.addEventListener('pointerdown', onPointerDown)

          return () => {
            gsap.ticker.remove(tick)
            intersectionObserver.disconnect()
            panel.removeEventListener('pointerenter', onPointerEnter)
            panel.removeEventListener('pointermove', onPointerMove)
            panel.removeEventListener('pointerleave', onPointerLeave)
            panel.removeEventListener('pointerdown', onPointerDown)
          }
        },
        panel
      )

      return () => {
        mm.revert()
        resizeObserver.disconnect()
        canvas?.remove()
        renderer?.gl.getExtension('WEBGL_lose_context')?.loseContext()
      }
    },
    { scope: panelRef }
  )

  return (
    <div
      ref={panelRef}
      className={cn(
        '@container relative isolate flex flex-col justify-between overflow-hidden bg-(--gradient-panel-base) p-10 [--gradient-panel-base:color-mix(in_oklab,var(--background)_92%,var(--koyo-brand))] xl:p-12',
        className
      )}
    >
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
        <div ref={fallbackRef} className='invisible absolute inset-0' style={{ background: FALLBACK }} />
        <div ref={canvasHostRef} className='absolute inset-0' />

        {/* Grain */}
        <div
          className='absolute inset-0 opacity-[0.2] mix-blend-overlay dark:opacity-[0.1]'
          style={{ backgroundImage: GRAIN }}
        />
      </div>

      {children}
    </div>
  )
}

export default AnimatedGradientPanel
