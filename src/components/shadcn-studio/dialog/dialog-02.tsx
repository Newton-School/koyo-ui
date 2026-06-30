import { UploadIcon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const AlertDialogWithIconDemo = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>Alert Dialog (With Icon)</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className='bg-secondary text-secondary-foreground mb-4 flex size-9 items-center justify-center rounded-full sm:mx-0'>
            <UploadIcon className='size-4.5' />
          </div>
          <AlertDialogTitle>New Update is Available</AlertDialogTitle>
          <AlertDialogDescription>
            New update is available for your application. Please update to the latest version to enjoy new features.
          </AlertDialogDescription>
          <ol className='text-muted-foreground mt-4 flex list-decimal flex-col gap-2 pl-6 text-sm'>
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Update Now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogWithIconDemo
