import AuthBrandPanel from '@/components/shadcn-studio/blocks/auth-brand-panel'
import LoginForm from '@/components/shadcn-studio/blocks/login-page-02/login-form'

const Login = () => {
  return (
    <div className='bg-background flex min-h-svh'>
      <AuthBrandPanel />

      <div className='flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
