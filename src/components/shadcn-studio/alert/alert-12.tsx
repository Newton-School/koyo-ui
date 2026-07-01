import { UserRoundXIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@newtonschool/koyo-ui/alert'

const AlertIndicatorDestructiveDemo = () => {
  return (
    <Alert className='border-destructive bg-destructive/10 text-destructive rounded-lg border-0 border-l-4'>
      <UserRoundXIcon />
      <AlertTitle>Your request to join the team is denied.</AlertTitle>
    </Alert>
  )
}

export default AlertIndicatorDestructiveDemo
