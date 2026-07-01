import { useId } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@newtonschool/koyo-ui/avatar'
import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@newtonschool/koyo-ui/popover'

const members = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product mentor'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Engineering mentor'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'Design mentor'
  }
]

const PopoverSlideInBottomDemo = () => {
  const id = useId()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Slide-in from bottom</Button>
      </PopoverTrigger>
      <PopoverContent className='data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400'>
        <div className='grid gap-4'>
          <div className='space-y-1'>
            <div className='font-medium'>Share with mentors</div>
            <p className='text-muted-foreground text-sm'>
              Give mentors access to this cohort and coordinate interview feedback in real time.
            </p>
          </div>
          <div className='w-full space-y-1.5'>
            <Label htmlFor={id} className='text-muted-foreground text-xs font-normal'>
              Mentor email
            </Label>
            <div className='flex gap-2'>
              <Input id={id} type='email' placeholder='mentor@koyo.example' className='h-8' />
              <Button type='submit' size='sm'>
                Share invite
              </Button>
            </div>
          </div>
          <div className='space-y-1.5'>
            <Label className='text-muted-foreground text-xs font-normal'>Mentors</Label>
            <ul className='grid gap-2'>
              {members.map((member, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <Checkbox id={`member-${index + 1}`} />
                  <Label htmlFor={`member-${index + 1}`} className='flex flex-1 items-center gap-2'>
                    <div className='flex flex-1 items-center gap-2'>
                      <Avatar className='size-6'>
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className='text-xs'>{member.fallback}</AvatarFallback>
                      </Avatar>
                      <span className='text-sm font-medium'>{member.name}</span>
                    </div>
                    <span className='text-muted-foreground text-xs'>{member.designation}</span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSlideInBottomDemo
