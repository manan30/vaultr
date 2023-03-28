'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '~/primitives/select';

export default function Recurring() {
  return (
    <div>
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
          <div className='flex w-full flex-col items-start space-y-4'>
            <Input id='name' name='name' label='Name' />
            <div className='flex w-full items-center space-x-4'>
              <div className='flex w-full flex-col space-y-2'>
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className='w-full' placeholder='Category'>
                    <SelectValue placeholder='' />
                  </SelectTrigger>
                  <SelectContent>
                    {/* {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.name}
                        className='capitalize'
                      >
                        {category.name}
                      </SelectItem>
                    ))} */}
                  </SelectContent>
                </Select>
              </div>
              <Input id='amount' name='amount' label='Amount' />
            </div>
            <div className='flex items-center space-x-4'>
              <Input id='amount' name='amount' label='Amount' />
              <Input id='amount' name='amount' label='Amount' />
            </div>
            <div className='flex items-center space-x-4'>
              <Input id='amount' name='amount' label='Amount' />
              <Input id='amount' name='amount' label='Amount' />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
