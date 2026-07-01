// React Imports
import type { SVGAttributes } from 'react'

const ContextMenu = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='184' height='148' viewBox='0 0 184 148' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M22 148L22 0' stroke='url(#contextMenuPaint0)' strokeOpacity='0.4' />
      <path d='M162 148L162 0' stroke='url(#contextMenuPaint1)' strokeOpacity='0.4' />
      <path d='M184 22L0 22' stroke='url(#contextMenuPaint2)' strokeOpacity='0.4' />
      <path d='M184 126L0 126' stroke='url(#contextMenuPaint3)' strokeOpacity='0.4' />
      <rect x='22' y='22' width='140' height='104' rx='8' fill='var(--card)' />
      <circle cx='43' cy='42' r='5' fill='var(--primary)' />
      <rect x='57' y='38' width='68' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='34' y='59' width='116' height='1' fill='var(--border)' />
      <rect x='34' y='74' width='86' height='8' rx='4' fill='var(--primary)' />
      <rect x='34' y='95' width='52' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='111' y='95' width='28' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <path
        d='M143 75L148 79L143 83'
        stroke='var(--primary)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient id='contextMenuPaint0' x1='22.5' y1='0' x2='22.5' y2='148' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='contextMenuPaint1' x1='162.5' y1='0' x2='162.5' y2='148' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='contextMenuPaint2' x1='0' y1='21.5' x2='184' y2='21.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='contextMenuPaint3' x1='0' y1='125.5' x2='184' y2='125.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ContextMenu
