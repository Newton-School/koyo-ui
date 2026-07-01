import { ShieldAlertIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const IconButtonGradientDemo = () => {
  return (
    <Button
      size='icon'
      className='from-koyo-button-error via-koyo-button-error/70 to-koyo-button-error focus-visible:ring-koyo-button-error-ring bg-transparent bg-gradient-to-r [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center]'
    >
      <ShieldAlertIcon />
      <span className='sr-only'>Security</span>
    </Button>
  )
}

export default IconButtonGradientDemo
