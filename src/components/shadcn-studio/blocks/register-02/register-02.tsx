import AuthBrandPanel from '@/components/shadcn-studio/blocks/auth-brand-panel'
import RegisterForm from '@/components/shadcn-studio/blocks/register-02/register-form'

const Register = () => {
  return (
    <div className='bg-background flex min-h-svh'>
      <AuthBrandPanel />

      <div className='flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
