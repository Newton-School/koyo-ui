import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardOverlayDemo = () => {
  return (
    <Card className='before:bg-koyo-button-primary/80 relative max-w-md py-0 before:absolute before:size-full before:rounded-xl'>
      <CardContent className='px-0'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-8.png?widht=448&height=280&format=auto'
          alt='Banner'
          className='h-70 w-112 rounded-xl'
        />
      </CardContent>
      <div className='absolute'>
        <CardHeader className='text-koyo-button-primary-foreground w-full pt-6'>
          <CardTitle>Interview Launch Plan</CardTitle>
        </CardHeader>
        <CardContent className='text-koyo-button-primary-foreground/80'>
          Align the candidate brief, mentor roster, and round schedule before publishing the interview workflow to the
          cohort team.
        </CardContent>
      </div>
    </Card>
  )
}

export default CardOverlayDemo
