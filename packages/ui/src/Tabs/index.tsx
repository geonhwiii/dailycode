import type React from 'react';
import { createContext, useContext } from 'react';
import { cn } from '@specter/utils';
import { Text, View, Pressable } from '@specter/core';
import type { StyleProp, ViewStyle } from 'react-native';

type TabsContextValue<T extends string> = {
	value: T;
	onChange: (value: T) => void;
};

function createTabsComponents<T extends string>() {
	const TabsContext = createContext<TabsContextValue<T> | null>(null);

	const useTabsContext = () => {
		const context = useContext(TabsContext);
		if (!context) {
			throw new Error('[WARNING] : <Tabs.Root>를 찾을 수 없어요.');
		}
		return context;
	};

	type TabsRootProps = {
		value: T;
		onChange: (value: T) => void;
		children: React.ReactNode;
	};

	function TabsRoot({ value, onChange, children }: TabsRootProps) {
		return <TabsContext.Provider value={{ value, onChange }}>{children}</TabsContext.Provider>;
	}

	type TabsListProps = {
		className?: string;
		children: React.ReactNode;
	};

	function TabsList({ children, className }: TabsListProps) {
		return <View className={cn('flex-row', className)}>{children}</View>;
	}

	type TabsTriggerProps = {
		value: T;
		children: React.ReactNode;
		classNames?: {
			layout?: string;
			text?: string;
		};
	};

	function TabsTrigger({ value, children, classNames }: TabsTriggerProps) {
		const { value: selectedValue, onChange } = useTabsContext();
		const isSelected = value === selectedValue;
		return (
			<Pressable
				className={cn(
					'flex-1 justify-center items-center py-3 border-b border-gray-300',
					{
						'border-black': isSelected,
					},
					classNames?.layout,
				)}
				onPress={() => onChange(value)}
			>
				<Text
					weight={isSelected ? 'semibold' : 'normal'}
					size='lg'
					className={cn(
						'text-gray-400',
						{
							'text-black': isSelected,
						},
						classNames?.text,
					)}
				>
					{children}
				</Text>
			</Pressable>
		);
	}

	type TabsContentProps = {
		style?: StyleProp<ViewStyle>;
		className?: string;
		value: T;
		children: React.ReactNode;
	};

	function TabsContent({ style, className, value, children }: TabsContentProps) {
		const { value: selectedValue } = useTabsContext();
		if (value !== selectedValue) {
			return null;
		}
		return (
			<View style={style} className={className}>
				{children}
			</View>
		);
	}

	return {
		Root: TabsRoot,
		List: TabsList,
		Trigger: TabsTrigger,
		Content: TabsContent,
	};
}

export const createTabs = <T extends string>() => createTabsComponents<T>();
