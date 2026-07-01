import { Trash2Icon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonDiscardDemo = () => {
  return (
    <Button
      variant='outline'
      className='border-koyo-button-error! text-koyo-button-error! hover:bg-koyo-button-error/10! focus-visible:ring-koyo-button-error-ring'
    >
      <Trash2Icon />
      Discard
    </Button>
  )
}

export default ButtonDiscardDemo
