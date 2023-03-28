import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export default function RegistrationForm() {
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await axios.post('/api/users/register', {
            email: 'manan@vaultr.iooo',
            password: 'valence@30',
            firstName: 'Manan',
            lastName: 'Joshi'
          });
          router.push('/dashboard');
        } catch (err) {}
      }}
    >
      <div className='flex w-full flex-col items-start space-y-6'>
        <div className=' align-center grid w-full grid-cols-1 space-x-0 space-y-4 sm:grid-cols-2 sm:space-x-4 sm:space-y-0'>
          <Input
            placeholder='First name'
            label='First Name'
            id='firstName'
            name='firstName'
          />
          <Input
            placeholder='Last Name'
            label='Last Name'
            id='lastName'
            name='lastName'
          />
        </div>
        <Input
          type='email'
          placeholder='Email'
          label='Email'
          id='email'
          name='email'
        />
        <Input
          type='password'
          placeholder='Password'
          label='Password'
          id='password'
          name='password'
        />
        <Button type='submit' className='w-full'>
          Register
        </Button>
      </div>
    </form>
  );
}
