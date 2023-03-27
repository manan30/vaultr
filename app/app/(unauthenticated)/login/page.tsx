import { Button } from '~/primitives/button';
import { Input } from '~/primitives/input';

export default function Login() {
  return (
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
  );
}
