'use client'

import { Line, LineChart, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { day: 'Mon', score: 71 },
  { day: 'Tue', score: 76 },
  { day: 'Wed', score: 74 },
  { day: 'Thu', score: 82 },
  { day: 'Fri', score: 86 },
  { day: 'Sat', score: 84 }
]

const chartConfig = {
  score: {
    label: 'Avg score',
    color: 'var(--koyo-brand)'
  }
} satisfies ChartConfig

const ChartDemo = () => {
  return (
    <Card className='w-full max-w-md shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle>Interview quality</CardTitle>
        <CardDescription>Average AI score from this week&apos;s interviews.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='aspect-auto h-48 w-full'>
          <LineChart accessibilityLayer data={chartData} margin={{ left: -24, right: 8 }}>
            <XAxis dataKey='day' tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis domain={[60, 90]} tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <Line
              dataKey='score'
              type='monotone'
              stroke='var(--color-score)'
              strokeWidth={2}
              dot={{ fill: 'var(--color-score)' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartDemo
