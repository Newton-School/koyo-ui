'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { round: 'Screen', completed: 36, shortlisted: 22 },
  { round: 'Tech', completed: 28, shortlisted: 16 },
  { round: 'System', completed: 18, shortlisted: 11 },
  { round: 'Final', completed: 12, shortlisted: 8 }
]

const chartConfig = {
  completed: {
    label: 'Completed',
    color: 'var(--koyo-brand)'
  },
  shortlisted: {
    label: 'Shortlisted',
    color: 'var(--chart-2)'
  }
} satisfies ChartConfig

const ChartDemo = () => {
  return (
    <Card className='w-full max-w-md shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle>Interview funnel</CardTitle>
        <CardDescription>Candidate movement across active rounds.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='aspect-auto h-52 w-full'>
          <BarChart accessibilityLayer data={chartData} margin={{ left: 0, right: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey='round' tickLine={false} tickMargin={8} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
            <Bar dataKey='completed' fill='var(--color-completed)' radius={[4, 4, 0, 0]} />
            <Bar dataKey='shortlisted' fill='var(--color-shortlisted)' radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartDemo
