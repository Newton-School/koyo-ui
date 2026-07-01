import { Button } from '@newtonschool/koyo-ui/button'

const ButtonDemo = () => {
  return (
    <div className='flex max-w-2xl flex-wrap items-center justify-center gap-3'>
      <Button>Koyo</Button>
      <Button variant='brand'>Brand</Button>
      <Button variant='success'>Success</Button>
      <Button variant='yellow'>Yellow</Button>
      <Button variant='purple'>Purple</Button>
      <Button variant='error'>Error</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='black'>Black</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button shape='round'>Round</Button>
      <Button className='ring-koyo-brand-ring ring-[3px]'>Focus</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export default ButtonDemo
