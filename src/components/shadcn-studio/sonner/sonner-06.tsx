'use client'

import { toast } from 'sonner'

import { Button } from '@newtonschool/koyo-ui/button'

const SonnerWithActionDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast('Action completed successfully!', {
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo')
          }
        })
      }
    >
      Toast with action
    </Button>
  )
}

export default SonnerWithActionDemo
