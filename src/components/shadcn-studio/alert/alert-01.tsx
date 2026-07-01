import { CheckCircle2Icon } from 'lucide-react'

import { Alert, AlertTitle } from '@newtonschool/koyo-ui/alert'

const AlertDemo = () => {
  return (
    <Alert className='border-koyo-brand/30 text-koyo-brand'>
      <CheckCircle2Icon />
      <AlertTitle>Cohort changes are ready to publish.</AlertTitle>
    </Alert>
  )
}

export default AlertDemo
