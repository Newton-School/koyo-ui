// React Imports
import type { SVGAttributes } from 'react'

const Chart = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='214' height='144' viewBox='0 0 214 144' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M22 144L22 0' stroke='url(#chartPaint0)' strokeOpacity='0.4' />
      <path d='M192 144L192 0' stroke='url(#chartPaint1)' strokeOpacity='0.4' />
      <path d='M214 18L0 18' stroke='url(#chartPaint2)' strokeOpacity='0.4' />
      <path d='M214 126L0 126' stroke='url(#chartPaint3)' strokeOpacity='0.4' />
      <rect x='22' y='18' width='170' height='108' rx='8' fill='var(--card)' />
      <path d='M44 103H172' stroke='var(--border)' strokeLinecap='round' />
      <path d='M44 78H172' stroke='var(--border)' strokeLinecap='round' strokeOpacity='0.7' />
      <path d='M44 53H172' stroke='var(--border)' strokeLinecap='round' strokeOpacity='0.7' />
      <rect x='54' y='74' width='18' height='29' rx='4' fill='var(--primary)' fillOpacity='0.35' />
      <rect x='86' y='55' width='18' height='48' rx='4' fill='var(--primary)' />
      <rect x='118' y='66' width='18' height='37' rx='4' fill='var(--primary)' fillOpacity='0.55' />
      <rect x='150' y='42' width='18' height='61' rx='4' fill='var(--primary)' />
      <path
        d='M54 84C75 72 82 84 101 66C118 50 126 60 141 48C153 38 161 36 172 31'
        stroke='var(--muted-foreground)'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient id='chartPaint0' x1='22.5' y1='0' x2='22.5' y2='144' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='chartPaint1' x1='192.5' y1='0' x2='192.5' y2='144' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='chartPaint2' x1='0' y1='17.5' x2='214' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='chartPaint3' x1='0' y1='125.5' x2='214' y2='125.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Chart
