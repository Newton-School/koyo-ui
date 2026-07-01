'use client'

import { toast } from 'sonner'

import { Button } from '@newtonschool/koyo-ui/button'

const SonnerDemo = () => {
  return (
    <Button variant='outline' onClick={() => toast('Action completed successfully!')}>
      Default Toast
    </Button>
  )
}

export default SonnerDemo
