import { Form } from '@remix-run/react';

import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export default function Login() {
  return (
    <Form method='post'>
      <div className='flex w-full flex-col items-start space-y-6'>
        <Input type='email' placeholder='Email' label='Email' id='email' />
        <Input
          type='password'
          placeholder='Password'
          label='Password'
          id='password'
        />
        <Button type='submit' className='w-full'>
          Login
        </Button>
      </div>
    </Form>
  );
}
