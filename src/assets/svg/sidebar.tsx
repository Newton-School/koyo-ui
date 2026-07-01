// React Imports
import type { SVGAttributes } from 'react'

const Sidebar = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='238' height='150' viewBox='0 0 238 150' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 150L24 0' stroke='url(#sidebarPaint0)' strokeOpacity='0.4' />
      <path d='M214 150L214 0' stroke='url(#sidebarPaint1)' strokeOpacity='0.4' />
      <path d='M238 18L0 18' stroke='url(#sidebarPaint2)' strokeOpacity='0.4' />
      <path d='M238 132L0 132' stroke='url(#sidebarPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='18' width='190' height='114' rx='8' fill='var(--card)' fillOpacity='0.5' />
      <rect x='24' y='18' width='62' height='114' rx='8' fill='var(--card)' />
      <rect x='39' y='36' width='31' height='7' rx='3.5' fill='var(--primary)' />
      <rect x='37' y='58' width='34' height='22' rx='5' fill='var(--primary)' />
      <rect x='47' y='66' width='14' height='6' rx='3' fill='var(--primary-foreground)' />
      <rect x='39' y='95' width='30' height='6' rx='3' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='105' y='40' width='78' height='9' rx='4.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='105' y='64' width='58' height='8' rx='4' fill='var(--primary)' />
      <rect x='105' y='88' width='86' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <defs>
        <linearGradient id='sidebarPaint0' x1='24.5' y1='0' x2='24.5' y2='150' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='sidebarPaint1' x1='214.5' y1='0' x2='214.5' y2='150' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='sidebarPaint2' x1='0' y1='17.5' x2='238' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='sidebarPaint3' x1='0' y1='131.5' x2='238' y2='131.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Sidebar
