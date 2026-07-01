'use client'

import { useState } from 'react'

import {
  BadgeCheckIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
  SendIcon,
  UserPlusIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'

const CardTweetDemo = () => {
  const [liked, setLiked] = useState<boolean>(true)

  return (
    <Card className='max-w-md'>
      <CardHeader className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Avatar className='ring-koyo-brand-ring ring-2'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Priya George' />
            <AvatarFallback className='text-xs'>PG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>
              Priya George <BadgeCheckIcon className='size-4 fill-koyo-brand stroke-white' />
            </CardTitle>
            <CardDescription>@mentor-priya</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            <UserPlusIcon />
            Assign
          </Button>
          <Button variant='ghost' size='icon' aria-label='Toggle menu'>
            <EllipsisIcon />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-6.png?width=350&format=auto'
          alt='Banner'
          className='aspect-video w-full rounded-md object-cover'
        />
        <p>
          Strong candidate signal from the system design round. Recommending a focused follow-up on API ownership and
          incident debugging.{' '}
          <a href='#' className='text-koyo-brand'>
            #InterviewNotes
          </a>{' '}
          <a href='#' className='text-koyo-brand'>
            #BackendRole
          </a>{' '}
          <a href='#' className='text-koyo-brand'>
            #MentorReview
          </a>
        </p>
      </CardContent>
      <CardFooter className='flex items-center gap-1'>
        <Button variant='ghost' size='sm' onClick={() => setLiked(!liked)}>
          <HeartIcon className={cn(liked && 'fill-destructive stroke-destructive')} />
          2.1K
        </Button>
        <Button variant='ghost' size='sm'>
          <MessageCircleIcon />
          1.4K
        </Button>
        <Button variant='ghost' size='sm'>
          <RepeatIcon />
          669
        </Button>
        <Button variant='ghost' size='sm'>
          <SendIcon />
          1.1K
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardTweetDemo
