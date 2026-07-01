import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertSoftDemo = () => {
  return (
    <Alert className='bg-koyo-brand/10 border-none'>
      <CircleAlertIcon />
      <AlertTitle>Upload a PDF, DOCX, JPG, or PNG.</AlertTitle>
      <AlertDescription>Use one of these formats so the candidate profile can process the attachment.</AlertDescription>
    </Alert>
  )
}

export default AlertSoftDemo
