// React Imports
import type { SVGAttributes } from 'react'

const ToggleGroup = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='216' height='86' viewBox='0 0 216 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 86L24 0' stroke='url(#toggleGroupPaint0)' strokeOpacity='0.4' />
      <path d='M192 86L192 0' stroke='url(#toggleGroupPaint1)' strokeOpacity='0.4' />
      <path d='M216 18L0 18' stroke='url(#toggleGroupPaint2)' strokeOpacity='0.4' />
      <path d='M216 68L0 68' stroke='url(#toggleGroupPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='18' width='168' height='50' rx='8' fill='var(--card)' />
      <rect x='30' y='24' width='48' height='38' rx='6' fill='var(--primary)' />
      <rect x='84' y='24' width='48' height='38' rx='6' fill='var(--background)' />
      <rect x='138' y='24' width='48' height='38' rx='6' fill='var(--background)' />
      <path d='M48 53V33' stroke='var(--primary-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M40 34H56' stroke='var(--primary-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M102 52V34' stroke='var(--muted-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M100 43H110' stroke='var(--muted-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M154 34H170' stroke='var(--muted-foreground)' strokeWidth='2' strokeLinecap='round' />
      <path d='M154 52H170' stroke='var(--muted-foreground)' strokeWidth='2' strokeLinecap='round' />
      <defs>
        <linearGradient id='toggleGroupPaint0' x1='24.5' y1='0' x2='24.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='toggleGroupPaint1' x1='192.5' y1='0' x2='192.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='toggleGroupPaint2' x1='0' y1='17.5' x2='216' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='toggleGroupPaint3' x1='0' y1='67.5' x2='216' y2='67.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ToggleGroup
