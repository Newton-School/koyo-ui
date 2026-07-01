import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertSolidDemo = () => {
  return (
    <Alert className='bg-koyo-button-primary text-koyo-button-primary-foreground border-none'>
      <CircleAlertIcon />
      <AlertTitle>Editing learner details</AlertTitle>
      <AlertDescription className='text-koyo-button-primary-foreground/80'>
        Changes won&apos;t be saved until you click &quot;Update learner.&quot;
      </AlertDescription>
    </Alert>
  )
}

export default AlertSolidDemo
