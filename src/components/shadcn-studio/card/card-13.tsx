import { StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardFooter, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

const CardTestimonialDemo = () => {
  return (
    <Card className='max-w-md border-none'>
      <CardContent>
        <p>
          Koyo keeps our interview loop moving. The shared workspace is{' '}
          <span className='bg-koyo-brand/10 text-koyo-brand'>easy for mentors to scan</span>, and candidate feedback
          lands in the right place without extra follow-up.
        </p>
      </CardContent>
      <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
        <div className='flex items-center gap-3'>
          <Avatar className='ring-koyo-brand-ring ring-2'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Samira Gupta' />
            <AvatarFallback className='text-xs'>SG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>Samira Gupta</CardTitle>
            <CardDescription>Program manager</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardTestimonialDemo
