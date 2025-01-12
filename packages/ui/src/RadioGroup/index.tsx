import { Pressable, Text, View, Icon } from '@specter/core';
import { cn, platform } from '@specter/utils';
import type { StyleProp, ViewStyle } from 'react-native';

type Option = {
	label: string;
	value: string;
};

export type RadioGroupProps = {
	options: Option[];
	numberOfColumns?: 1 | 2;
	value?: string;
	onChange: (value: string) => void;
};

const RadioGroup = ({ options, value, numberOfColumns = 2, onChange }: RadioGroupProps) => {
	return (
		<View
			className={cn('flex flex-row flex-wrap gap-2', {
				'flex-col': numberOfColumns === 1,
			})}
		>
			{options.map(({ label, value: optionValue }) => {
				const selected = value === optionValue;
				return (
					<Pressable
						key={optionValue}
						className={cn('flex-row items-center gap-2 px-3 h-12 border border-gray-300 rounded-md bg-white', {
							'w-full': numberOfColumns === 1,
							'w-[49%]': numberOfColumns === 2,
							'border-blue-500': optionValue === value,
						})}
						style={[selected && shadowStyle]}
						onPress={() => onChange(optionValue)}
					>
						<Icon.Check
							size={20}
							strokeWidth={2.5}
							className={cn('text-gray-300', {
								'text-blue-500': selected,
							})}
						/>
						<Text
							weight={selected ? 'semibold' : 'normal'}
							className={cn({
								'text-blue-600': selected,
							})}
						>
							{label}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
};

const shadowStyle: StyleProp<ViewStyle> = {
	shadowColor: platform.isIos ? 'black' : 'gray',
	shadowOffset: { width: 0, height: 2 },
	shadowOpacity: 0.1,
	shadowRadius: 4,
	elevation: 5,
};

export { RadioGroup };
