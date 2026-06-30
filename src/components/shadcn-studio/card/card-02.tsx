import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'PS',
    name: 'Priya Shah'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'AM',
    name: 'Arjun Mehta'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'NR',
    name: 'Nisha Rao'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'VK',
    name: 'Vivaan Kapoor'
  }
]

const CardMeetingNotesDemo = () => {
  return (
    <Card className='max-w-md'>
      <CardHeader>
        <CardTitle>Interview debrief</CardTitle>
        <CardDescription>Panel notes from the technical screen.</CardDescription>
      </CardHeader>
      <CardContent className='text-sm'>
        <p>Anika showed strong product judgment and clean component reasoning.</p>
        <ol className='mt-4 flex list-decimal flex-col gap-2 pl-6'>
          <li>Clarified ambiguous requirements before coding</li>
          <li>Used accessible table semantics without prompting</li>
          <li>Handled async edge cases in the review exercise</li>
          <li>Recommended for hiring manager discussion</li>
        </ol>
      </CardContent>
      <CardFooter>
        <div className='flex -space-x-2 hover:space-x-1'>
          {avatars.map((avatar, index) => (
            <Avatar key={index} className='ring-background size-8 ring-2 transition-all duration-300 ease-in-out'>
              <AvatarImage src={avatar.src} alt={avatar.name} />
              <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardMeetingNotesDemo
