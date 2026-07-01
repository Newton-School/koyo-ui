import { TrashIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonDeleteDemo = () => {
  return (
    <Button className='from-koyo-button-error via-koyo-button-error/70 to-koyo-button-error focus-visible:ring-koyo-button-error-ring bg-transparent bg-gradient-to-r [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center]'>
      <TrashIcon />
      Delete
    </Button>
  )
}

export default ButtonDeleteDemo
