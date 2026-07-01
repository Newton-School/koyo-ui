import { Button } from '@newtonschool/koyo-ui/button'
import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@newtonschool/koyo-ui/sheet'

const SheetSidesDemo = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Top</Button>
        </SheetTrigger>
        <SheetContent side='top'>
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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Right</Button>
        </SheetTrigger>
        <SheetContent side='right'>
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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </SheetTrigger>
        <SheetContent side='bottom'>
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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Left</Button>
        </SheetTrigger>
        <SheetContent side='left'>
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
    </div>
  )
}

export default SheetSidesDemo
