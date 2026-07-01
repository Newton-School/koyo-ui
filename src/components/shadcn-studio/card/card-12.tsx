'use client'

import { useState } from 'react'

import { HeartIcon } from 'lucide-react'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from '@newtonschool/koyo-ui/card'

import { cn } from '@/lib/utils'

const CardProductDemo = () => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <div className='relative max-w-md rounded-xl bg-gradient-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg'>
      <div className='flex h-60 items-center justify-center'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-11.png?width=300&format=auto'
          alt='Candidate workspace preview'
          className='w-75'
        />
      </div>
      <Button
        size='icon'
        onClick={() => setLiked(!liked)}
        className='bg-koyo-button-primary/10 hover:bg-koyo-button-primary/20 absolute top-4 right-4 rounded-full'
      >
        <HeartIcon className={cn(liked ? 'fill-destructive stroke-destructive' : 'stroke-white')} />
        <span className='sr-only'>Like</span>
      </Button>
      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Frontend Interview Kit</CardTitle>
          <CardDescription className='flex items-center gap-2'>
            <Badge variant='outline' className='rounded-sm'>
              React
            </Badge>
            <Badge variant='outline' className='rounded-sm'>
              Senior cohort
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            A reusable round plan with starter prompts, mentor rubric, and candidate-facing instructions.
          </p>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium uppercase'>Rounds</span>
            <span className='text-xl font-semibold'>3</span>
          </div>
          <Button size='lg'>Use kit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardProductDemo
