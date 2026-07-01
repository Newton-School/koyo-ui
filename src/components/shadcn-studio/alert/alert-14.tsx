import { TriangleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@newtonschool/koyo-ui/alert'

const AlertDestructiveDemo = () => {
  return (
    <Alert variant='destructive'>
      <TriangleAlertIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
    </Alert>
  )
}

export default AlertDestructiveDemo
