import { cn } from '@specter/utils';
import * as React from 'react';
import { TextInput } from 'react-native';

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, React.ComponentPropsWithoutRef<typeof TextInput>>(
	(
		{ className, autoCapitalize = 'none', autoComplete = 'off', autoCorrect = false, spellCheck = false, ...props },
		ref,
	) => {
		return (
			<TextInput
				ref={ref}
				className={cn(
					'h-14 rounded-lg border border-gray-300 bg-white px-3 text-lg leading-[1.25] text-foreground focus:border focus:border-blue-700 placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium',
					props.editable === false && 'opacity-50',
					className,
				)}
				placeholderTextColor={placeholderTextColor}
				autoCapitalize={autoCapitalize}
				autoCorrect={autoCorrect}
				autoComplete={autoComplete}
				spellCheck={spellCheck}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

export { Input };

const placeholderTextColor = '#C7C7CD';
