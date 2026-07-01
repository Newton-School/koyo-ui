'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@newtonschool/koyo-ui/alert'
import { Button } from '@newtonschool/koyo-ui/button'
import { Checkbox } from '@newtonschool/koyo-ui/checkbox'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@newtonschool/koyo-ui/form'

const CheckboxFormDemo = () => {
  const FormSchema = z.object({
    acceptTerms: z.boolean().refine(val => val === true, {
      message: 'Confirm candidate consent before continuing.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { acceptTerms: true }
  })

  function onSubmit() {
    toast.custom(() => (
      <Alert>
        <CheckCheckIcon />
        <AlertTitle>Candidate consent recorded.</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        <FormField
          control={form.control}
          name='acceptTerms'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center space-x-2'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Candidate has shared interview consent</FormLabel>
              </div>
              <FormDescription>
                Confirm that the candidate has agreed to recording, transcript review, and scorecard sharing.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Save Consent</Button>
      </form>
    </Form>
  )
}

export default CheckboxFormDemo
