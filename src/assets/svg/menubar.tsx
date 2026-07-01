// React Imports
import type { SVGAttributes } from 'react'

const Menubar = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='230' height='88' viewBox='0 0 230 88' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 88L24 0' stroke='url(#menubarPaint0)' strokeOpacity='0.4' />
      <path d='M206 88L206 0' stroke='url(#menubarPaint1)' strokeOpacity='0.4' />
      <path d='M230 20L0 20' stroke='url(#menubarPaint2)' strokeOpacity='0.4' />
      <path d='M230 68L0 68' stroke='url(#menubarPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='20' width='182' height='48' rx='8' fill='var(--card)' />
      <rect x='38' y='35' width='43' height='18' rx='4' fill='var(--primary)' />
      <rect x='50' y='41' width='19' height='6' rx='3' fill='var(--primary-foreground)' />
      <rect x='92' y='41' width='29' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.45' />
      <rect x='134' y='41' width='33' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='180' y='41' width='12' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.2' />
      <defs>
        <linearGradient id='menubarPaint0' x1='24.5' y1='0' x2='24.5' y2='88' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='menubarPaint1' x1='206.5' y1='0' x2='206.5' y2='88' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='menubarPaint2' x1='0' y1='19.5' x2='230' y2='19.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='menubarPaint3' x1='0' y1='67.5' x2='230' y2='67.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Menubar
