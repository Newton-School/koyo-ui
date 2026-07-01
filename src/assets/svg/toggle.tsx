// React Imports
import type { SVGAttributes } from 'react'

const Toggle = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='132' height='86' viewBox='0 0 132 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M25 86L25 0' stroke='url(#togglePaint0)' strokeOpacity='0.4' />
      <path d='M107 86L107 0' stroke='url(#togglePaint1)' strokeOpacity='0.4' />
      <path d='M132 18L0 18' stroke='url(#togglePaint2)' strokeOpacity='0.4' />
      <path d='M132 68L0 68' stroke='url(#togglePaint3)' strokeOpacity='0.4' />
      <rect x='25' y='18' width='82' height='50' rx='8' fill='var(--primary)' />
      <path d='M57 55V31' stroke='var(--primary-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M48 32H66' stroke='var(--primary-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M75 33V55' stroke='var(--primary-foreground)' strokeWidth='2' strokeLinecap='round' />
      <defs>
        <linearGradient id='togglePaint0' x1='25.5' y1='0' x2='25.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='togglePaint1' x1='107.5' y1='0' x2='107.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='togglePaint2' x1='0' y1='17.5' x2='132' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='togglePaint3' x1='0' y1='67.5' x2='132' y2='67.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Toggle
