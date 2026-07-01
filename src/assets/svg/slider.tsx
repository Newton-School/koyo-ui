// React Imports
import type { SVGAttributes } from 'react'

const Slider = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='220' height='86' viewBox='0 0 220 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 86L24 0' stroke='url(#sliderPaint0)' strokeOpacity='0.4' />
      <path d='M196 86L196 0' stroke='url(#sliderPaint1)' strokeOpacity='0.4' />
      <path d='M220 43L0 43' stroke='url(#sliderPaint2)' strokeOpacity='0.4' />
      <rect x='24' y='36' width='172' height='14' rx='7' fill='var(--card)' />
      <rect x='35' y='40' width='91' height='6' rx='3' fill='var(--primary)' />
      <circle cx='130' cy='43' r='14' fill='var(--primary)' />
      <circle cx='130' cy='43' r='5' fill='var(--primary-foreground)' />
      <defs>
        <linearGradient id='sliderPaint0' x1='24.5' y1='0' x2='24.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='sliderPaint1' x1='196.5' y1='0' x2='196.5' y2='86' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='sliderPaint2' x1='0' y1='42.5' x2='220' y2='42.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Slider
