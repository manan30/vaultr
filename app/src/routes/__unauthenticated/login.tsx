import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

import axios from 'axios';
import { loginUser } from '~/lib/api/users';
import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const email = body.get('email') as string;
  const password = body.get('password') as string;

  if (!email || !password) {
    return json({ error: 'All form fields required' }, { status: 400 });
  }

  try {
    const response = await loginUser(
      {
        email,
        password
      }
      // { headers: request.headers }
    );
    return json(
      { user: response.data },
      { status: response.status, headers: response.headers as HeadersInit }
    );
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return json(
        { error: err.response?.data.message },
        { status: err.response?.data.status }
      );
    }
  }

  return json({ error: 'Something went wrong' }, { status: 500 });
}

export default function Login() {
  const data = useActionData();

  return (
    <>
      <Form method='post'>
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
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </div>
      </Form>
      {data?.error ? (
        <div className='text-medium mt-4 rounded-md border border-solid border-red-500 p-4 text-red-500'>
          {data.error}
        </div>
      ) : null}
    </>
  );
}
