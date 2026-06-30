import { ArrowRightIcon, CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertWithLinkDemo = () => {
  return (
    <Alert className='border-primary text-primary flex items-center justify-between [&>svg]:translate-y-0'>
      <CircleAlertIcon />
      <AlertTitle className='flex-1'>New message!</AlertTitle>
      <Button
        variant='outline'
        className='border-primary text-primary! hover:bg-secondary hover:text-secondary-foreground h-7 cursor-pointer rounded-lg px-2'
        asChild
      >
        <a href='#'>
          Link
          <ArrowRightIcon />
        </a>
      </Button>
    </Alert>
  )
}

export default AlertWithLinkDemo
