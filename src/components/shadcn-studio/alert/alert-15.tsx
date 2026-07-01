import { TriangleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@newtonschool/koyo-ui/alert'

const AlertPureDestructiveDemo = () => {
  return (
    <Alert variant='destructive' className='border-destructive'>
      <TriangleAlertIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
    </Alert>
  )
}

export default AlertPureDestructiveDemo
