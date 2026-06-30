'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupFormDemo = () => {
  const FormSchema = z.object({
    selectedOption: z.string().nonempty({
      message: 'Choose a review mode.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { selectedOption: 'technical interview' }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.custom(() => (
      <Alert>
        <CheckCheckIcon />
        <AlertTitle>Review mode updated: {data.selectedOption}</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        <FormField
          control={form.control}
          name='selectedOption'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Set candidate review mode</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='screening first' id='screening-first' />
                    <FormLabel htmlFor='screening-first' className='font-normal'>
                      Screening first
                    </FormLabel>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='technical interview' id='technical-interview' />
                    <FormLabel htmlFor='technical-interview' className='font-normal'>
                      Technical interview required
                    </FormLabel>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='portfolio review' id='portfolio-review' />
                    <FormLabel htmlFor='portfolio-review' className='font-normal'>
                      Portfolio review
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>Choose the workflow reviewers should use for this role.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Save Mode</Button>
      </form>
    </Form>
  )
}

export default RadioGroupFormDemo
