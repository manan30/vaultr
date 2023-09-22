'use client';

import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { ChevronDown, CheckIcon } from '~/primitives/lucide-icons';

import { Label } from './label';

type SelectProps<TValue> = {
  options: { value: TValue; label: string }[];
  value: TValue;
  onChange: (value: TValue) => void;
  displayValue: string;
  label?: string;
  placeholder?: string;
};

export function Select<TValue>({
  value,
  onChange,
  options,
  displayValue,
  label,
  placeholder
}: SelectProps<TValue>) {
  return (
    <div className='flex w-full flex-col space-y-2'>
      {label ? <Label>{label}</Label> : null}
      <Listbox value={value} onChange={onChange}>
        <div className='relative mt-1 w-full'>
          <Listbox.Button
            className='ph-shown group flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm
            placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder={placeholder}
          >
            <span className='block truncate'>
              {displayValue || placeholder}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronDown
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-slate-100 text-slate-800' : 'text-slate-700'
                    }`
                  }
                  value={option.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600'>
                          <CheckIcon className='h-4 w-4' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
