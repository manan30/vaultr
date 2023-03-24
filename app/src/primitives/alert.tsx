import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '~/utils/functions';

const alertVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100',
        subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        ghost: 'bg-transparent hover:bg-slate-100',
        link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent'
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export type AlertProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(alertVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Alert.displayName = 'Alert';

export { Alert, alertVariants };
