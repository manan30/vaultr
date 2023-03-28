'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export default function Form() {
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await axios.post('/api/users/login', {
            email: 'manan@vaultr.io',
            password: 'valence@30'
          });
          router.push('/dashboard');
        } catch (err) {}
      }}
    >
      <div className='flex w-full flex-col items-start space-y-6'>
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
        <Button className='w-full'>Login</Button>
      </div>
    </form>
  );
}
