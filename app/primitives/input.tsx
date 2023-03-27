'use client';

import * as React from 'react';

import { cn } from '~/utils/functions';

import { Label } from './label';

export type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className='flex w-full flex-col space-y-2'>
        {label ? <Label htmlFor={props.id}>{label}</Label> : null}
        <input
          className={cn(
            'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
