'use client'

import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@newtonschool/koyo-ui/button'
import { Input } from '@newtonschool/koyo-ui/input'
import { Label } from '@newtonschool/koyo-ui/label'
import { Separator } from '@newtonschool/koyo-ui/separator'

import { cn } from '@/lib/utils'

import KoyoMark from '@/assets/svg/koyo-mark'

// Staggered fade-up on first paint; CSS-only so the form never waits on JavaScript
const reveal =
  'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out'

const stagger = (step: number) => ({ animationDelay: `${150 + step * 70}ms` })

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='w-full max-w-110'>
      <div className={cn('mb-10 flex flex-col items-center text-center', reveal)} style={stagger(0)}>
        <KoyoMark className='mb-8 size-13' />
        <h1 className='text-3xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-muted-foreground mt-2.5'>Sign in to keep hiring with your team.</p>
      </div>

      <Button variant='outline' className={cn('h-11 w-full text-[0.9375rem]', reveal)} style={stagger(1)} asChild>
        <a href='#'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
            alt=''
            className='size-5'
          />
          Continue with Google
        </a>
      </Button>

      <div className={cn('my-8 flex items-center gap-4', reveal)} style={stagger(2)}>
        <Separator className='flex-1' />
        <span className='text-muted-foreground text-xs'>or</span>
        <Separator className='flex-1' />
      </div>

      <form className='space-y-5' onSubmit={e => e.preventDefault()}>
        {/* Work email */}
        <div className={cn('space-y-2', reveal)} style={stagger(3)}>
          <Label htmlFor='workEmail'>Work email</Label>
          <Input id='workEmail' type='email' autoComplete='email' placeholder='you@company.com' className='h-11' />
        </div>

        {/* Password */}
        <div className={cn('space-y-2', reveal)} style={stagger(4)}>
          <div className='flex items-center justify-between'>
            <Label htmlFor='password'>Password</Label>
            <a href='#' className='text-muted-foreground hover:text-foreground text-sm hover:underline'>
              Forgot password?
            </a>
          </div>
          <div className='relative'>
            <Input
              id='password'
              type={isVisible ? 'text' : 'password'}
              autoComplete='current-password'
              placeholder='Enter your password'
              className='h-11 pr-11'
            />
            <Button
              type='button'
              variant='ghost'
              size='icon'
              onClick={() => setIsVisible(prevState => !prevState)}
              className='text-muted-foreground focus-visible:ring-koyo-brand-ring absolute inset-y-0 right-0 h-full w-11 rounded-l-none hover:bg-transparent'
            >
              {isVisible ? <EyeOffIcon /> : <EyeIcon />}
              <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
            </Button>
          </div>
        </div>

        <Button
          type='submit'
          variant='orange'
          className={cn('h-11 w-full text-[0.9375rem]', reveal)}
          style={stagger(5)}
        >
          Sign in
        </Button>
      </form>

      <p className={cn('text-muted-foreground mt-8 text-center text-sm', reveal)} style={stagger(6)}>
        New to Koyo?{' '}
        <a href='#' className='text-foreground font-semibold hover:underline'>
          Create an account
        </a>
      </p>
    </div>
  )
}

export default LoginForm
