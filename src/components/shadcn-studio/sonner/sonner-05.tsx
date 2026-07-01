'use client'

import { toast } from 'sonner'

import { Button } from '@newtonschool/koyo-ui/button'

const ClosableSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast('Action completed successfully!', {
          closeButton: true
        })
      }
    >
      Closable Toast
    </Button>
  )
}

export default ClosableSonnerDemo
