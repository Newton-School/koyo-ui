import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Koyo dialog</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Publish cohort changes?</DialogTitle>
          <DialogDescription>
            Learners and mentors will see the updated schedule after you publish this cohort.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button>Publish changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDemo
