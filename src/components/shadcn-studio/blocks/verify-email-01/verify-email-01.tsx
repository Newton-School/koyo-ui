import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Logo from '@/components/layout/logo'
import AuthBackgroundShape from '@/assets/svg/auth-background-shape'

const VerifyEmail = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
        <CardHeader className='gap-6'>
          <Logo className='gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>Verify your email</CardTitle>
            <CardDescription className='text-base'>
              An activation link has been sent to hello@koyo-ui.com. Please check your inbox and click the link to
              finish setting up your Koyo UI workspace.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className='space-y-4'>
            <Button className='w-full' asChild>
              <a href='#'>Skip for now</a>
            </Button>

            <p className='text-muted-foreground text-center'>
              Didn&apos;t get the mail?{' '}
              <a href='#' className='text-card-foreground hover:underline'>
                Resend
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VerifyEmail
