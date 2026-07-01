import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const SheetWithNoOverlayDemo = () => {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button variant='outline'>No Overlay</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit candidate</SheetTitle>
          <SheetDescription>Update candidate details before the next interview round.</SheetDescription>
        </SheetHeader>
        <div className='grid flex-1 auto-rows-min gap-6 px-4'>
          <div className='grid gap-3'>
            <Label htmlFor='sheet-demo-name'>Candidate name</Label>
            <Input id='sheet-demo-name' defaultValue='Aarav Mehta' />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='sheet-demo-username'>Candidate email</Label>
            <Input id='sheet-demo-username' defaultValue='aarav@koyo.example' />
          </div>
        </div>
        <SheetFooter>
          <Button type='submit'>Save changes</Button>
          <SheetClose asChild>
            <Button variant='outline'>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithNoOverlayDemo
