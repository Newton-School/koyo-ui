// React Imports
import { useId } from 'react'
import type { SVGAttributes } from 'react'

const KoyoMark = (props: SVGAttributes<SVGElement>) => {
  const gradientId = useId()

  return (
    <svg width='1em' height='1em' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <defs>
        <linearGradient id={gradientId} x1='6' y1='2' x2='34' y2='38' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EE7A45' />
          <stop offset='1' stopColor='#C9461C' />
        </linearGradient>
      </defs>
      <rect width='40' height='40' rx='9' fill={`url(#${gradientId})`} />
      <rect x='13' y='8' width='14' height='3.5' rx='1.75' fill='white' />
      <circle cx='20' cy='24' r='7.5' stroke='white' strokeWidth='4.5' />
    </svg>
  )
}

export default KoyoMark
