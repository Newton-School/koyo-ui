'use client'

// React Imports
import { useRef } from 'react'
import type { ReactNode } from 'react'

// Third-party Imports
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

// Util Imports
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP)

type GradientBlob = {
  color: string
  opacity?: number

  // Resting centre, in % of the panel
  x: number
  y: number

  // Size, in % of the panel width
  width: number
  height: number

  // Pointer parallax travel in px; negative values move against the cursor
  depth: number

  // How far the blob wanders, in % of its own size
  drift: number
}

// Solid ellipses under one heavy blur melt into a single mesh gradient; as they drift, stretch and turn,
// the silhouette keeps reshaping. Laid out as a warm crescent sweeping from the top edge to the bottom-right
// corner, with the two base-coloured blobs carving its inner and outer edges.
const BLOBS: GradientBlob[] = [
  { color: '#f8ba9c', x: 62, y: 8, width: 74, height: 46, depth: 28, drift: 16 },
  { color: '#ed8252', x: 56, y: 44, width: 62, height: 84, depth: 60, drift: 14 },
  { color: '#e66636', x: 72, y: 70, width: 50, height: 62, depth: -44, drift: 18 },
  { color: '#db4c28', x: 84, y: 90, width: 44, height: 40, depth: 90, drift: 20 },
  { color: '#ee8080', x: 102, y: 104, width: 52, height: 42, depth: -72, drift: 18 },
  { color: '#ffcc9c', opacity: 0.85, x: 42, y: 28, width: 30, height: 26, depth: -36, drift: 30 },
  { color: 'var(--gradient-panel-base)', x: 2, y: 64, width: 56, height: 92, depth: 38, drift: 12 },
  { color: 'var(--gradient-panel-base)', opacity: 0.8, x: 106, y: 22, width: 30, height: 52, depth: -30, drift: 14 }
]

// Fine grain keeps the large gradients from banding and gives them a printed texture
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

type AnimatedGradientPanelProps = {
  className?: string
  children?: ReactNode
}

const AnimatedGradientPanel = ({ className, children }: AnimatedGradientPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const panel = panelRef.current

      if (!panel) return

      const mm = gsap.matchMedia()

      // With reduced motion nothing runs and the panel renders as a still gradient
      mm.add(
        '(prefers-reduced-motion: no-preference)',
        context => {
          const anchors = gsap.utils.toArray<HTMLElement>('[data-blob-anchor]', panel)
          const blobs = gsap.utils.toArray<HTMLElement>('[data-blob]', panel)
          const glow = panel.querySelector<HTMLElement>('[data-glow]')
          const ripple = panel.querySelector<HTMLElement>('[data-ripple]')
          const { random } = gsap.utils

          // Handlers created through the context are cleaned up with it
          const safe = <T extends (event: PointerEvent) => void>(name: string, handler: T) =>
            context.add(name, handler) as T

          // Intro: the gradient blooms outward, then the content settles in. The squiggle stays hidden until it
          // starts drawing, otherwise its round line cap shows as a dot.
          gsap
            .timeline({ defaults: { ease: 'expo.out' } })
            .fromTo(
              anchors,
              { autoAlpha: 0, scale: 0.45 },
              { autoAlpha: 1, scale: 1, duration: 2.4, stagger: { each: 0.12, from: 'end' } }
            )
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

          // Ambient drift: every blob wanders, stretches and turns towards a new random pose on each loop
          const drifts = blobs.map((blob, index) => {
            const { drift } = BLOBS[index]

            return gsap.to(blob, {
              xPercent: () => random(-drift, drift),
              yPercent: () => random(-drift, drift),
              scaleX: () => random(0.82, 1.22),
              scaleY: () => random(0.82, 1.22),
              rotation: () => random(-32, 32),
              duration: random(4.5, 8),
              ease: 'sine.inOut',
              repeat: -1,
              repeatRefresh: true
            })
          })

          // Pause the loop while the panel is hidden or scrolled away
          const observer = new IntersectionObserver(([entry]) => {
            drifts.forEach(tween => (entry.isIntersecting ? tween.resume() : tween.pause()))
          })

          observer.observe(panel)

          // Pointer parallax: each layer follows the cursor at its own depth
          const moveX = anchors.map(anchor => gsap.quickTo(anchor, 'x', { duration: 1.4, ease: 'power3' }))
          const moveY = anchors.map(anchor => gsap.quickTo(anchor, 'y', { duration: 1.4, ease: 'power3' }))
          const glowX = glow ? gsap.quickTo(glow, 'x', { duration: 0.9, ease: 'power3' }) : null
          const glowY = glow ? gsap.quickTo(glow, 'y', { duration: 0.9, ease: 'power3' }) : null
          const offsets = anchors.map(() => ({ x: 0, y: 0 }))
          let settle: gsap.core.Tween | undefined

          const applyOffsets = () => {
            offsets.forEach((offset, index) => {
              moveX[index](offset.x)
              moveY[index](offset.y)
            })
          }

          const onPointerEnter = safe('onPointerEnter', event => {
            // The gradient wakes up while you're around
            gsap.to(drifts, { timeScale: 2.2, duration: 1.2, ease: 'power2.out', overwrite: 'auto' })

            if (glow) {
              const rect = panel.getBoundingClientRect()
              const px = event.clientX - rect.left
              const py = event.clientY - rect.top

              // Start the glow under the cursor instead of sweeping in from the corner
              glowX?.(px, px)
              glowY?.(py, py)
              gsap.to(glow, { autoAlpha: 0.75, duration: 0.6, overwrite: 'auto' })
            }
          })

          const onPointerMove = safe('onPointerMove', event => {
            const rect = panel.getBoundingClientRect()
            const px = event.clientX - rect.left
            const py = event.clientY - rect.top
            const nx = px / rect.width - 0.5
            const ny = py / rect.height - 0.5

            BLOBS.forEach((blob, index) => {
              offsets[index] = { x: nx * blob.depth * 2, y: ny * blob.depth * 2 }
            })

            if (!settle?.isActive()) applyOffsets()

            glowX?.(px)
            glowY?.(py)
          })

          const onPointerLeave = safe('onPointerLeave', () => {
            gsap.to(drifts, { timeScale: 1, duration: 1.6, ease: 'power2.out', overwrite: 'auto' })

            if (glow) gsap.to(glow, { autoAlpha: 0, duration: 0.8, overwrite: 'auto' })

            offsets.forEach(offset => {
              offset.x = 0
              offset.y = 0
            })
            applyOffsets()
          })

          // Click: a soft ripple, and the blobs scatter away from the tap before drifting back
          const onPointerDown = safe('onPointerDown', event => {
            const rect = panel.getBoundingClientRect()
            const px = event.clientX - rect.left
            const py = event.clientY - rect.top
            const reach = rect.width * 0.9

            if (ripple) {
              gsap.fromTo(
                ripple,
                { x: px, y: py, scale: 0, autoAlpha: 0.75 },
                { scale: 1, autoAlpha: 0, duration: 1.4, ease: 'expo.out', overwrite: true }
              )
            }

            BLOBS.forEach((blob, index) => {
              const dx = (blob.x / 100) * rect.width - px
              const dy = (blob.y / 100) * rect.height - py
              const distance = Math.hypot(dx, dy) || 1
              const force = 110 * Math.max(0, 1 - distance / reach)

              moveX[index](offsets[index].x + (dx / distance) * force)
              moveY[index](offsets[index].y + (dy / distance) * force)
            })

            settle?.kill()
            settle = gsap.delayedCall(0.35, applyOffsets)
          })

          panel.addEventListener('pointerenter', onPointerEnter)
          panel.addEventListener('pointermove', onPointerMove)
          panel.addEventListener('pointerleave', onPointerLeave)
          panel.addEventListener('pointerdown', onPointerDown)

          return () => {
            observer.disconnect()
            panel.removeEventListener('pointerenter', onPointerEnter)
            panel.removeEventListener('pointermove', onPointerMove)
            panel.removeEventListener('pointerleave', onPointerLeave)
            panel.removeEventListener('pointerdown', onPointerDown)
          }
        },
        panel
      )

      return () => mm.revert()
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
        <div className='absolute inset-0 transform-gpu blur-[clamp(40px,9cqw,88px)]'>
          {BLOBS.map((blob, index) => (
            <div
              key={index}
              data-blob-anchor
              className='absolute size-0 motion-safe:invisible'
              style={{ left: `${blob.x}%`, top: `${blob.y}%` }}
            >
              <div
                data-blob
                className='absolute rounded-[50%] will-change-transform'
                style={{
                  width: `${blob.width}cqw`,
                  height: `${blob.height}cqw`,
                  left: `${-blob.width / 2}cqw`,
                  top: `${-blob.height / 2}cqw`,
                  backgroundColor: blob.color,
                  opacity: blob.opacity
                }}
              />
            </div>
          ))}

          {/* Cursor glow */}
          <div data-glow className='invisible absolute top-0 left-0 size-0'>
            <div className='absolute -top-[12cqw] -left-[12cqw] size-[24cqw] rounded-full bg-[rgb(255_196_162)]' />
          </div>
        </div>

        {/* Click ripple */}
        <div data-ripple className='invisible absolute top-0 left-0 size-0'>
          <div
            className='absolute -top-[40cqw] -left-[40cqw] size-[80cqw] rounded-full border border-white/60'
            style={{
              background: 'radial-gradient(closest-side, rgb(255 255 255 / 0) 55%, rgb(255 255 255 / 0.4) 100%)'
            }}
          />
        </div>

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
