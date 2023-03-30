'use client';

import { useForm } from 'react-hook-form';

import { Button } from '~/primitives/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/primitives/dialog';
import { Input } from '~/primitives/input';
import { Label } from '~/primitives/label';
import { PlusCircle } from '~/primitives/lucide-icons';
import { Select } from '~/primitives/select';

export const frequency = [
  'DAILY',
  'WEEKLY',
  'BIWEEKLY',
  'MONTHLY',
  'BIMONTHLY',
  'QUARTERLY',
  'YEARLY'
];

type FormData = {
  name: string;
  amount: string;
  frequency: string;
};

export default function RecurringEntryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
    watch
  } = useForm<FormData>({
    defaultValues: { amount: '', name: '', frequency: '' }
  });

  const frequencyVal = watch('frequency');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='fixed bottom-6 right-10 min-w-[3rem]'>
          <PlusCircle className='mr-2 h-4 w-4' />
          <span>Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[28rem]'>
        <DialogHeader>
          <DialogTitle>Add Entry</DialogTitle>
          <DialogDescription>
            Create new recurring transaction
          </DialogDescription>
        </DialogHeader>
        <form
          className='flex w-full flex-col items-start space-y-4'
          onSubmit={handleSubmit((data) => {
            console.log({ data });
          })}
        >
          <Input
            id='name'
            label='Name'
            error={errors.name?.message}
            {...register('name', { required: 'Required field' })}
          />
          <div className='flex w-full items-center space-x-4'>
            <Select
              value={frequencyVal}
              onChange={(value) => {
                setValue('frequency', value);
              }}
              options={frequency.map((f) => ({
                value: f,
                label: `${f[0]}${f.slice(1).toLowerCase()}`
              }))}
              displayValue={
                frequencyVal !== ''
                  ? `${frequencyVal[0]}${frequencyVal.slice(1).toLowerCase()}`
                  : ''
              }
              label='Frequency'
            />
            {/* <div className='flex w-full flex-col space-y-2'>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className='w-full' placeholder='Category'>
                  <SelectValue placeholder='' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.name}
                      className='capitalize'
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div> */}
            {/* <Input
              id='amount'
              label='Amount'
              error={errors.amount?.message}
              {...register('amount', { required: 'Required field' })}
            /> */}
          </div>
          <div className='flex items-center space-x-4'>
            {/* <Input id='amount' name='amount' label='Amount' /> */}
            {/* <Input id='amount' name='amount' label='Amount' /> */}
          </div>
          <div className='flex items-center space-x-4'>
            {/* <Input id='amount' name='amount' label='Amount' /> */}
            {/* <Input id='amount' name='amount' label='Amount' /> */}
          </div>
          <DialogFooter className='w-full'>
            <Button type='submit' className='ml-auto'>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
