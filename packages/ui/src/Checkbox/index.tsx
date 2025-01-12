import * as React from 'react';
import { Pressable, Icon, View, Text } from '@specter/core';
import { cn } from '@specter/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxVariants = cva('shrink-0 rounded-md border-[2px] border-gray-400 justify-center items-center', {
	variants: {
		size: {
			default: 'w-6 h-6',
			lg: 'w-7 h-7',
		},
		checked: {
			true: 'bg-blue-600 border-blue-600',
			false: '',
		},
		disabled: {
			true: 'opacity-50 cursor-not-allowed',
			false: '',
		},
	},
	defaultVariants: {
		size: 'default',
		checked: false,
		disabled: false,
	},
});

const textVariants = cva('', {
	variants: {
		size: {
			default: 'text-base',
			lg: 'text-lg',
		},
		disabled: {
			true: 'opacity-50',
			false: 'opacity-100',
		},
	},
	defaultVariants: {
		size: 'default',
		disabled: false,
	},
});

type CheckboxProps = Omit<React.ComponentPropsWithoutRef<typeof Pressable>, 'disabled'> &
	VariantProps<typeof checkboxVariants> & {
		checked?: boolean;
		label?: string;
	};

const Checkbox = React.forwardRef<React.ElementRef<typeof Pressable>, CheckboxProps>(
	({ className, size, checked, disabled, label, ...props }, ref) => {
		return (
			<Pressable ref={ref} disabled={disabled} {...props}>
				<View className='flex-row gap-2 items-center'>
					<View className={cn(checkboxVariants({ size, checked, disabled }), className)}>
						<Icon.Check size={16} strokeWidth={4} className='text-white' />
					</View>
					{label && <Text className={cn(textVariants({ size, disabled }))}>{label}</Text>}
				</View>
			</Pressable>
		);
	},
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
