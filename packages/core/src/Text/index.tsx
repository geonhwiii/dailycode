import { cssInterop } from 'nativewind';
import { Text as RNText, type TextProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

cssInterop(Text, {
	className: {
		target: 'style',
	},
});

const textVariants = cva('text-black', {
	variants: {
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
		},
		weight: {
			normal: 'font-normal',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
	},
	defaultVariants: {
		size: 'md',
		weight: 'normal',
	},
});

type TextVariantProps = VariantProps<typeof textVariants>;

interface CustomTextProps extends TextProps, TextVariantProps {}

export function Text({ size, weight, className, ...props }: CustomTextProps) {
	return <RNText className={textVariants({ size, weight, className })} {...props} />;
}
