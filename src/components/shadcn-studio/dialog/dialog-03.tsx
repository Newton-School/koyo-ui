import { TriangleAlertIcon } from 'lucide-react'

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
} from '@newtonschool/koyo-ui/alert-dialog'
import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Label } from '@newtonschool/koyo-ui/label'

const AlertDialogDestructiveDemo = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>Alert Dialog Destructive</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className='items-center'>
          <div className='bg-destructive/10 mx-auto mb-2 flex size-12 items-center justify-center rounded-full'>
            <TriangleAlertIcon className='text-destructive size-6' />
          </div>
          <AlertDialogTitle>Are you absolutely sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className='text-center'>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
            <span className='mt-4 flex items-center justify-center gap-3'>
              <Checkbox id='terms' />
              <Label htmlFor='terms'>Don&apos;t ask next again</Label>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-destructive hover:bg-destructive/90 focus-visible:ring-koyo-focus-error/30 text-white'>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogDestructiveDemo
