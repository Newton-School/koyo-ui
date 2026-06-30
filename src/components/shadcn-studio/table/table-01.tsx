import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const reviews = [
  {
    candidate: 'Anika Rao',
    role: 'Frontend Engineer',
    stage: 'Technical screen',
    score: '84%',
    variant: 'brand' as const
  },
  {
    candidate: 'Dev Mehta',
    role: 'Product Designer',
    stage: 'Portfolio review',
    score: '78%',
    variant: 'yellow' as const
  },
  {
    candidate: 'Isha Sen',
    role: 'Data Analyst',
    stage: 'Hiring manager',
    score: '91%',
    variant: 'success' as const
  },
  {
    candidate: 'Kabir Suri',
    role: 'Backend Engineer',
    stage: 'System design',
    score: '88%',
    variant: 'purple' as const
  },
  {
    candidate: 'Mira Kapoor',
    role: 'Customer Success',
    stage: 'Final discussion',
    score: '82%',
    variant: 'success' as const
  }
]

const TableDemo = () => {
  return (
    <div className='w-full max-w-3xl'>
      <div className='border-border bg-card overflow-hidden rounded-lg border shadow-sm'>
        <Table>
          <TableCaption>Candidate review queue.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-40'>Candidate</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead className='text-right'>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map(review => (
              <TableRow key={review.candidate}>
                <TableCell className='font-medium'>{review.candidate}</TableCell>
                <TableCell>{review.role}</TableCell>
                <TableCell>
                  <Badge variant={review.variant} shape='round'>
                    {review.stage}
                  </Badge>
                </TableCell>
                <TableCell className='text-right font-medium'>{review.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Ready for shortlist</TableCell>
              <TableCell className='text-right'>3 candidates</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default TableDemo
