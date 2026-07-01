import { Separator } from '@newtonschool/koyo-ui/separator'

const Separator02 = () => {
  return (
    <div className='bg-card text-card-foreground flex h-24 w-full max-w-sm items-center justify-center rounded-lg border p-4 shadow-xs'>
      <div className='text-center'>
        <p className='text-lg font-semibold'>142</p>
        <p className='text-muted-foreground text-xs'>Candidates</p>
      </div>
      <Separator orientation='vertical' className='mx-6' />
      <div className='text-center'>
        <p className='text-lg font-semibold'>37</p>
        <p className='text-muted-foreground text-xs'>Interviews</p>
      </div>
      <Separator orientation='vertical' className='mx-6' />
      <div className='text-center'>
        <p className='text-lg font-semibold'>18</p>
        <p className='text-muted-foreground text-xs'>Offers</p>
      </div>
    </div>
  )
}

export default Separator02
