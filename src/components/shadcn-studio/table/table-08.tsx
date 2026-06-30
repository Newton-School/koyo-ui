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

const candidates = [
  {
    id: 'KOYO-1024',
    candidate: 'Anika Rao',
    status: 'Recommended',
    score: '84%',
    variant: 'success' as const
  },
  {
    id: 'KOYO-1025',
    candidate: 'Dev Mehta',
    status: 'Needs panel',
    score: '78%',
    variant: 'yellow' as const
  },
  {
    id: 'KOYO-1026',
    candidate: 'Isha Sen',
    status: 'Priority',
    score: '91%',
    variant: 'brand' as const
  },
  {
    id: 'KOYO-1027',
    candidate: 'Kabir Suri',
    status: 'System design',
    score: '88%',
    variant: 'purple' as const
  },
  {
    id: 'KOYO-1028',
    candidate: 'Mira Kapoor',
    status: 'Final discussion',
    score: '82%',
    variant: 'success' as const
  },
  {
    id: 'KOYO-1029',
    candidate: 'Neil Bose',
    status: 'Hold',
    score: '70%',
    variant: 'secondary' as const
  },
  {
    id: 'KOYO-1030',
    candidate: 'Riya Das',
    status: 'Archived',
    score: '64%',
    variant: 'error' as const
  }
]

const TableHighlightedRowDemo = () => {
  return (
    <div className='w-full max-w-3xl'>
      <div className='border-border bg-card overflow-hidden rounded-lg border shadow-sm'>
        <Table>
          <TableCaption>Highlighted priority candidate.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-32'>Review ID</TableHead>
              <TableHead>Candidate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map(candidate => (
              <TableRow
                key={candidate.id}
                className='nth-3:bg-koyo-button-primary-ring/20 nth-3:hover:bg-koyo-button-primary-ring/30'
              >
                <TableCell className='font-medium'>{candidate.id}</TableCell>
                <TableCell>{candidate.candidate}</TableCell>
                <TableCell>
                  <Badge variant={candidate.variant} shape='round'>
                    {candidate.status}
                  </Badge>
                </TableCell>
                <TableCell className='text-right font-medium'>{candidate.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Priority review</TableCell>
              <TableCell className='text-right'>Isha Sen</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default TableHighlightedRowDemo
