import { DownloadIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'

const ButtonDownloadDemo = () => {
  return (
    <Button variant='outline' className='border-koyo-button-primary border-dashed shadow-none'>
      <DownloadIcon />
      Download
    </Button>
  )
}

export default ButtonDownloadDemo
