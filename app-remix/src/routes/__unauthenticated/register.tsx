import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

import type { AxiosHeaders } from 'axios';
import axios from 'axios';
import { createNewUser } from '~/lib/api/users';
import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const firstName = body.get('firstName') as string;
  const lastName = body.get('lastName') as string;
  const email = body.get('email') as string;
  const password = body.get('password') as string;

  if (!firstName || !lastName || !email || !password) {
    return json({ error: 'All form fields required' }, { status: 400 });
  }

  try {
    const response = await createNewUser(
      {
        firstName,
        lastName,
        email,
        password
      },
      { headers: request.headers as unknown as AxiosHeaders }
    );

    return redirect('/dashboard', {
      headers: response.headers as HeadersInit
    });
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

export default function Register() {
  const data = useActionData();

  return (
    <>
      <Form method='post'>
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
      </Form>
      {data?.error ? (
        <div className='text-medium mt-4 rounded-md border border-solid border-red-500 p-4 text-red-500'>
          {data.error}
        </div>
      ) : null}
    </>
  );
}