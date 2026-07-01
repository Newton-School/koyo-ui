// React Imports
import type { SVGAttributes } from 'react'

const Separator = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='210' height='84' viewBox='0 0 210 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 84L24 0' stroke='url(#separatorPaint0)' strokeOpacity='0.4' />
      <path d='M186 84L186 0' stroke='url(#separatorPaint1)' strokeOpacity='0.4' />
      <path d='M210 42L0 42' stroke='url(#separatorPaint2)' strokeOpacity='0.4' />
      <rect x='38' y='21' width='58' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='38' y='55' width='92' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <path d='M24 42H186' stroke='var(--primary)' strokeWidth='2' strokeLinecap='round' />
      <defs>
        <linearGradient id='separatorPaint0' x1='24.5' y1='0' x2='24.5' y2='84' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='separatorPaint1' x1='186.5' y1='0' x2='186.5' y2='84' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='separatorPaint2' x1='0' y1='41.5' x2='210' y2='41.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Separator
