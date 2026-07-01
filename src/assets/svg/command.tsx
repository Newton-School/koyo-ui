// React Imports
import type { SVGAttributes } from 'react'

const Command = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='220' height='148' viewBox='0 0 220 148' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M25 148L25 0' stroke='url(#commandPaint0)' strokeOpacity='0.4' />
      <path d='M195 148L195 0' stroke='url(#commandPaint1)' strokeOpacity='0.4' />
      <path d='M220 18L0 18' stroke='url(#commandPaint2)' strokeOpacity='0.4' />
      <path d='M220 130L0 130' stroke='url(#commandPaint3)' strokeOpacity='0.4' />
      <rect x='25' y='18' width='170' height='112' rx='8' fill='var(--card)' />
      <rect x='41' y='34' width='138' height='30' rx='6' fill='var(--background)' stroke='var(--border)' />
      <circle cx='55' cy='49' r='5' stroke='var(--muted-foreground)' strokeWidth='1.5' />
      <path d='M59 53L63 57' stroke='var(--muted-foreground)' strokeWidth='1.5' strokeLinecap='round' />
      <rect x='74' y='46' width='68' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='41' y='76' width='138' height='14' rx='4' fill='var(--primary)' />
      <rect x='52' y='80' width='58' height='6' rx='3' fill='var(--primary-foreground)' />
      <rect x='41' y='99' width='72' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='41' y='115' width='104' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <defs>
        <linearGradient id='commandPaint0' x1='25.5' y1='0' x2='25.5' y2='148' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='commandPaint1' x1='195.5' y1='0' x2='195.5' y2='148' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='commandPaint2' x1='0' y1='17.5' x2='220' y2='17.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='commandPaint3' x1='0' y1='129.5' x2='220' y2='129.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Command
