'use client'

import { useState } from 'react'

import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Badge } from '@newtonschool/koyo-ui/badge'
import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Input } from '@newtonschool/koyo-ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@newtonschool/koyo-ui/table'

const data: CandidateReview[] = [
  {
    id: '1',
    candidate: 'Anika Rao',
    score: 84,
    stage: 'screening',
    email: 'anika.rao@koyo.example',
    role: 'Frontend Engineer'
  },
  {
    id: '2',
    candidate: 'Dev Mehta',
    score: 78,
    stage: 'interview',
    email: 'dev.mehta@koyo.example',
    role: 'Product Designer'
  },
  {
    id: '3',
    candidate: 'Isha Sen',
    score: 91,
    stage: 'offer',
    email: 'isha.sen@koyo.example',
    role: 'Data Analyst'
  },
  {
    id: '4',
    candidate: 'Kabir Suri',
    score: 88,
    stage: 'interview',
    email: 'kabir.suri@koyo.example',
    role: 'Backend Engineer'
  },
  {
    id: '5',
    candidate: 'Mira Kapoor',
    score: 82,
    stage: 'screening',
    email: 'mira.kapoor@koyo.example',
    role: 'Customer Success'
  }
]

export type CandidateReview = {
  id: string
  candidate: string
  score: number
  stage: 'screening' | 'interview' | 'offer' | 'archived'
  email: string
  role: string
}

const stageMeta = {
  screening: {
    label: 'Screening',
    variant: 'brand' as const
  },
  interview: {
    label: 'Interview',
    variant: 'purple' as const
  },
  offer: {
    label: 'Offer',
    variant: 'success' as const
  },
  archived: {
    label: 'Archived',
    variant: 'secondary' as const
  }
}

export const columns: ColumnDef<CandidateReview>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'candidate',
    header: 'Candidate',
    cell: ({ row }) => <div className='font-medium'>{row.getValue('candidate')}</div>
  },
  {
    accessorKey: 'stage',
    header: 'Stage',
    cell: ({ row }) => {
      const stage = stageMeta[row.getValue('stage') as CandidateReview['stage']]

      return (
        <Badge variant={stage.variant} shape='round'>
          {stage.label}
        </Badge>
      )
    }
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => <div>{row.getValue('role')}</div>
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>
  },
  {
    accessorKey: 'score',
    header: () => <div className='text-right'>Score</div>,
    cell: ({ row }) => {
      const score = Number(row.getValue('score'))

      return <div className='text-right font-medium'>{score}%</div>
    }
  }
]

const DataTableDemo = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  const selectedRows = table.getFilteredSelectedRowModel().rows.length
  const filteredRows = table.getFilteredRowModel().rows.length

  return (
    <div className='w-full max-w-5xl'>
      <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h3 className='text-sm font-semibold'>Candidate reviews</h3>
          <p className='text-muted-foreground text-sm'>Live shortlist for active hiring loops.</p>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
          <Input
            placeholder='Filter candidates...'
            value={(table.getColumn('candidate')?.getFilterValue() as string) ?? ''}
            onChange={event => table.getColumn('candidate')?.setFilterValue(event.target.value)}
            className='w-full sm:w-64'
          />
          <Button size='sm'>Shortlist selected</Button>
        </div>
      </div>
      <div className='border-border bg-card overflow-hidden rounded-lg border shadow-sm'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='text-muted-foreground mt-4 flex items-center justify-between text-sm'>
        <span>
          {selectedRows} of {filteredRows} row(s) selected
        </span>
        <span>Candidate review data table</span>
      </div>
    </div>
  )
}

export default DataTableDemo
