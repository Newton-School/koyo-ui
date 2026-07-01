// React Imports
import type { SVGAttributes } from 'react'

const Carousel = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='230' height='126' viewBox='0 0 230 126' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M22 126L22 0' stroke='url(#carouselPaint0)' strokeOpacity='0.4' />
      <path d='M208 126L208 0' stroke='url(#carouselPaint1)' strokeOpacity='0.4' />
      <path d='M230 20L0 20' stroke='url(#carouselPaint2)' strokeOpacity='0.4' />
      <path d='M230 106L0 106' stroke='url(#carouselPaint3)' strokeOpacity='0.4' />
      <rect x='52' y='20' width='126' height='86' rx='8' fill='var(--card)' />
      <rect x='66' y='35' width='98' height='42' rx='6' fill='var(--primary)' fillOpacity='0.18' />
      <rect x='78' y='86' width='45' height='7' rx='3.5' fill='var(--primary)' />
      <rect x='129' y='86' width='23' height='7' rx='3.5' fill='var(--card-foreground)' fillOpacity='0.2' />
      <rect x='22' y='42' width='42' height='42' rx='8' fill='var(--card)' />
      <rect x='166' y='42' width='42' height='42' rx='8' fill='var(--card)' />
      <path
        d='M42 56L35 63L42 70'
        stroke='var(--muted-foreground)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M188 56L195 63L188 70'
        stroke='var(--muted-foreground)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient id='carouselPaint0' x1='22.5' y1='0' x2='22.5' y2='126' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='carouselPaint1' x1='208.5' y1='0' x2='208.5' y2='126' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='carouselPaint2' x1='0' y1='19.5' x2='230' y2='19.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='carouselPaint3' x1='0' y1='105.5' x2='230' y2='105.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='var(--muted-foreground)' stopOpacity='0' />
          <stop offset='0.245' stopColor='var(--muted-foreground)' />
          <stop offset='0.75' stopColor='var(--muted-foreground)' />
          <stop offset='1' stopColor='var(--muted-foreground)' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Carousel
