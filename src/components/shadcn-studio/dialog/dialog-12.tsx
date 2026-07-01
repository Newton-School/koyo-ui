'use client'

import { useEffect, useRef, useState } from 'react'

import { CheckIcon, MailIcon } from 'lucide-react'

import { OTPInput, type SlotProps } from 'input-otp'

import { Button } from '@newtonschool/koyo-ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@newtonschool/koyo-ui/dialog'

import { cn } from '@/lib/utils'

const CORRECT_CODE = '11208'

const DialogOTPVerificationDemo = () => {
  const [value, setValue] = useState('')
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined)
  const inputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus()
    }
  }, [hasGuessed])

  async function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.()

    inputRef.current?.select()
    await new Promise(r => setTimeout(r, 1_00))

    setHasGuessed(value === CORRECT_CODE)

    setValue('')
    setTimeout(() => {
      inputRef.current?.blur()
    }, 20)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>OTP code</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <div className='flex flex-col items-center gap-2'>
          <div
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full bg-koyo-brand/10',
              { 'bg-green-600/10 dark:bg-green-400/10': hasGuessed }
            )}
            aria-hidden='true'
          >
            {hasGuessed ? (
              <CheckIcon className='text-green-600 dark:text-green-400' strokeWidth={1} />
            ) : (
              <MailIcon className='text-koyo-brand' strokeWidth={1} />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className='sm:text-center'>
              {hasGuessed ? 'Account verified!' : 'Check Your Email'}
            </DialogTitle>
            <DialogDescription className='sm:text-center'>
              {hasGuessed ? (
                <span>
                  Your Koyo UI workspace email <strong>he**o@koyo-ui.com</strong> has been verified.
                </span>
              ) : (
                <span>
                  We sent a verification code to <strong>he**o@koyo-ui.com</strong>. Enter it below to activate your
                  workspace. Try {CORRECT_CODE}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
        </div>

        {hasGuessed ? (
          <div className='text-center'>
            <DialogClose asChild>
              <Button type='button' ref={closeButtonRef}>
                Continue
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className='space-y-4'>
            <div className='flex justify-center'>
              <OTPInput
                id='confirmation-code'
                ref={inputRef}
                value={value}
                onChange={setValue}
                containerClassName='flex items-center gap-3 has-disabled:opacity-50'
                maxLength={5}
                onFocus={() => setHasGuessed(undefined)}
                render={({ slots }) => (
                  <div className='flex gap-2'>
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
                onComplete={onSubmit}
              />
            </div>
            {hasGuessed === false && (
              <p className='text-muted-foreground text-center text-xs' role='alert' aria-live='polite'>
                Invalid code. Please try again.
              </p>
            )}
            <p className='text-center text-sm'>
              Didn&apos;t get a code?{' '}
              <a className='text-koyo-brand hover:underline' href='#'>
                Resend
              </a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        'border-border bg-background text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]',
        { 'border-koyo-brand ring-koyo-brand-ring z-10 ring-[3px]': props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}

export default DialogOTPVerificationDemo
