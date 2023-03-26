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
import { PlusCircle } from '~/primitives/lucide-icons';

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
            <div className='flex items-center space-x-4'>
              <Input id='amount' name='amount' label='Amount' />
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
