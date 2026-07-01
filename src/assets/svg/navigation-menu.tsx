// React Imports
import type { SVGAttributes } from 'react'

const NavigationMenu = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='242' height='140' viewBox='0 0 242 140' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 140L24 0' stroke='url(#navigationMenuPaint0)' strokeOpacity='0.4' />
      <path d='M218 140L218 0' stroke='url(#navigationMenuPaint1)' strokeOpacity='0.4' />
      <path d='M242 18L0 18' stroke='url(#navigationMenuPaint2)' strokeOpacity='0.4' />
      <path d='M242 122L0 122' stroke='url(#navigationMenuPaint3)' strokeOpacity='0.4' />
      <rect x='24' y='18' width='194' height='42' rx='8' fill='var(--card)' />
      <rect x='40' y='35' width='42' height='8' rx='4' fill='var(--primary)' />
      <rect x='96' y='35' width='36' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.35' />
      <rect x='146' y='35' width='51' height='8' rx='4' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='54' y='70' width='134' height='52' rx='8' fill='var(--card)' />
      <rect x='69' y='84' width='47' height='7' rx='3.5' fill='var(--primary)' />
      <rect x='69' y='101' width='72' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='130' y='84' width='43' height='24' rx='5' fill='var(--primary)' fillOpacity='0.18' />
      <defs>
        <linearGradient id='navigationMenuPaint0' x1='24.5' y1='0' x2='24.5' y2='140' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='navigationMenuPaint1' x1='218.5' y1='0' x2='218.5' y2='140' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='navigationMenuPaint2' x1='0' y1='17.5' x2='242' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='navigationMenuPaint3' x1='0' y1='121.5' x2='242' y2='121.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default NavigationMenu
