import { ShieldCheckIcon, ShieldXIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ButtonPermissionsDemo = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Button className='bg-koyo-button-error/10 text-koyo-button-error hover:bg-koyo-button-error/20 focus-visible:ring-koyo-button-error-ring'>
        Reject
        <ShieldXIcon />
      </Button>
      <Button className='bg-koyo-button-success/10 text-koyo-button-success hover:bg-koyo-button-success/20 focus-visible:ring-koyo-button-success-ring'>
        Approve
        <ShieldCheckIcon />
      </Button>
    </div>
  )
}

export default ButtonPermissionsDemo
