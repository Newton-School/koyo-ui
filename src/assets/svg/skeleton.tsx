// React Imports
import type { SVGAttributes } from 'react'

const Skeleton = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='220' height='120' viewBox='0 0 220 120' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 120L24 0' stroke='url(#skeletonPaint0)' strokeOpacity='0.4' />
      <path d='M196 120L196 0' stroke='url(#skeletonPaint1)' strokeOpacity='0.4' />
      <path d='M220 20L0 20' stroke='url(#skeletonPaint2)' strokeOpacity='0.4' />
      <path d='M220 100L0 100' stroke='url(#skeletonPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='20' width='172' height='80' rx='8' fill='var(--card)' />
      <circle cx='52' cy='48' r='14' fill='var(--muted)' />
      <rect x='78' y='36' width='82' height='9' rx='4.5' fill='var(--muted)' />
      <rect x='78' y='53' width='52' height='8' rx='4' fill='var(--muted)' />
      <rect x='38' y='77' width='138' height='8' rx='4' fill='var(--muted)' />
      <rect x='38' y='88' width='92' height='8' rx='4' fill='var(--muted)' />
      <defs>
        <linearGradient id='skeletonPaint0' x1='24.5' y1='0' x2='24.5' y2='120' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='skeletonPaint1' x1='196.5' y1='0' x2='196.5' y2='120' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='skeletonPaint2' x1='0' y1='19.5' x2='220' y2='19.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='skeletonPaint3' x1='0' y1='99.5' x2='220' y2='99.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Skeleton
