// React Imports
import type { SVGAttributes } from 'react'

const Drawer = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='244' height='150' viewBox='0 0 244 150' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 150L24 0' stroke='url(#drawerPaint0)' strokeOpacity='0.4' />
      <path d='M220 150L220 0' stroke='url(#drawerPaint1)' strokeOpacity='0.4' />
      <path d='M244 22L0 22' stroke='url(#drawerPaint2)' strokeOpacity='0.4' />
      <path d='M244 128L0 128' stroke='url(#drawerPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='22' width='196' height='106' rx='8' fill='var(--card)' fillOpacity='0.45' />
      <rect x='24' y='66' width='196' height='62' rx='8' fill='var(--card)' />
      <rect x='100' y='76' width='44' height='4' rx='2' fill='var(--border)' />
      <rect x='42' y='93' width='92' height='8' rx='4' fill='var(--primary)' />
      <rect x='42' y='111' width='138' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <defs>
        <linearGradient id='drawerPaint0' x1='24.5' y1='0' x2='24.5' y2='150' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='drawerPaint1' x1='220.5' y1='0' x2='220.5' y2='150' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='drawerPaint2' x1='0' y1='21.5' x2='244' y2='21.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='drawerPaint3' x1='0' y1='127.5' x2='244' y2='127.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Drawer
