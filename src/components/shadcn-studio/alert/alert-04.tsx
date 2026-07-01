import { ArrowRightIcon, CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertWithLinkDemo = () => {
  return (
    <Alert className='border-koyo-brand text-koyo-brand flex items-center justify-between [&>svg]:translate-y-0'>
      <CircleAlertIcon />
      <AlertTitle className='flex-1'>Candidate reply received</AlertTitle>
      <Button
        variant='outline'
        className='border-koyo-brand text-koyo-brand! hover:bg-koyo-brand/10 h-7 cursor-pointer rounded-lg px-2'
        asChild
      >
        <a href='#'>
          View
          <ArrowRightIcon />
        </a>
      </Button>
    </Alert>
  )
}

export default AlertWithLinkDemo
