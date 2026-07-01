// React Imports
import type { SVGAttributes } from 'react'

const Progress = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='220' height='84' viewBox='0 0 220 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 84L24 0' stroke='url(#progressPaint0)' strokeOpacity='0.4' />
      <path d='M196 84L196 0' stroke='url(#progressPaint1)' strokeOpacity='0.4' />
      <path d='M220 28L0 28' stroke='url(#progressPaint2)' strokeOpacity='0.4' />
      <path d='M220 56L0 56' stroke='url(#progressPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='28' width='172' height='28' rx='14' fill='var(--card)' />
      <rect x='34' y='37' width='96' height='10' rx='5' fill='var(--primary)' />
      <circle cx='132' cy='42' r='6' fill='var(--primary)' />
      <defs>
        <linearGradient id='progressPaint0' x1='24.5' y1='0' x2='24.5' y2='84' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='progressPaint1' x1='196.5' y1='0' x2='196.5' y2='84' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='progressPaint2' x1='0' y1='27.5' x2='220' y2='27.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='progressPaint3' x1='0' y1='55.5' x2='220' y2='55.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Progress
