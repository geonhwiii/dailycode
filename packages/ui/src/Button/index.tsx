import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ActivityIndicator, Pressable } from 'react-native';
import { cn } from '@dailycode/utils';
import { Text } from '@dailycode/core';

const buttonVariants = cva('group flex items-center justify-center rounded-md', {
  variants: {
    variant: {
      default: 'bg-blue-600 active:opacity-90',
      darkgray: 'bg-gray-800 active:opacity-90',
      outline: 'border border-blue-600 bg-white active:bg-gray-100',
      outline_gray: 'border border-gray-200 bg-white active:bg-gray-100',
    },
    size: {
      default: 'h-12 px-5 py-3',
      lg: 'px-8 h-14',
      sm: 'px-3 h-10',
    },
    pill: {
      true: 'rounded-[100px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    pill: false,
  },
});

const buttonTextVariants = cva('text-base font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      darkgray: 'text-white',
      outline: 'text-blue-700',
      outline_gray: 'text-gray-700',
    },
    size: {
      default: '',
      lg: 'text-lg !font-bold',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = Omit<React.ComponentPropsWithoutRef<typeof Pressable>, 'children'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    children: React.ReactNode;
  };

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, pill, loading = false, children, ...props }, ref) => {
    return (
      <Pressable
        className={cn(props.disabled && 'opacity-80', buttonVariants({ variant, size, pill, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <ActivityIndicator className='text-gray-50' />
        ) : (
          <Text className={buttonTextVariants({ variant, size })}>{children}</Text>
        )}
      </Pressable>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
