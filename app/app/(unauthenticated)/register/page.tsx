'use client';

import axios from 'axios';
import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export default function Register() {
  return (
    <div
      onSubmit={async (e) => {
        e.preventDefault();
        const data = await axios.post(
          'http://localhost:2130/api/users/create',
          {
            test: 'test'
          }
        );
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
    </div>
  );
}
