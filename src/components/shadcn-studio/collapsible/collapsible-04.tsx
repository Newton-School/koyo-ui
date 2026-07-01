import { ChevronRightIcon, PanelsTopLeftIcon, PlusIcon, UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    bio: 'Senior mentor reviewing product and systems interviews for the July cohort.',
    projects: 5,
    reviews: 120
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    bio: 'Interview coach focused on React, Node.js, and cloud architecture practice.',
    projects: 3,
    reviews: 95,
    followed: true
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    bio: 'Design mentor helping learners prepare portfolio walkthroughs and UX critiques.',
    projects: 4,
    reviews: 80
  }
]

const CollapsibleProfileDemo = () => {
  return (
    <ul className='flex w-full max-w-[350px] flex-col gap-4'>
      {users.map(user => (
        <Collapsible key={user.name} asChild>
          <li className='flex flex-col gap-2'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4'>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src={user.image} alt={user.fallback} />
                  <AvatarFallback>{user.fallback}</AvatarFallback>
                </Avatar>
                <span className='font-medium'>{user.name}</span>
              </div>
              <ChevronRightIcon className='size-4 transition-transform [[data-state=open]_&]:rotate-90' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='flex flex-col gap-2'>
                <p className='text-muted-foreground text-sm'>{user.bio}</p>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2'>
                      <UserIcon className='size-4' />
                      <span className='text-sm'>{user.reviews}</span>
                    </span>
                    <span className='flex items-center gap-2'>
                      <PanelsTopLeftIcon className='size-4' />
                      <span className='text-sm'>{user.projects}</span>
                    </span>
                  </div>
                  {user.followed ? (
                    <Button variant='outline' className='h-7 rounded-full px-3 py-1 text-xs'>
                      Assigned
                    </Button>
                  ) : (
                    <Button className='h-7 rounded-full px-3 py-1 text-xs'>
                      Assign
                      <PlusIcon />
                    </Button>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

export default CollapsibleProfileDemo
