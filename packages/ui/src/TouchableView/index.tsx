import { cn } from '@specter/utils';
import { TouchableOpacity } from '@specter/core';
import type { TouchableOpacityProps } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type TouchableViewProps = Omit<TouchableOpacityProps, 'className' | 'onPressIn' | 'onPressOut'> & {
	classNames?: {
		root?: string;
		inner?: string;
	};
};

export function TouchableView({ classNames, activeOpacity = 1, children, onPress, ...props }: TouchableViewProps) {
	const backgroundColor = useSharedValue('transparent');
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: backgroundColor.value,
			transform: [{ scale: scale.value }],
		};
	});

	const handlePressIn = () => {
		backgroundColor.value = withTiming('rgba(128, 128, 128, 0.1)', {
			duration: 200,
			easing: Easing.inOut(Easing.ease),
		});
		scale.value = withTiming(0.97, {
			duration: 200,
			easing: Easing.inOut(Easing.ease),
		});
	};

	const handlePressOut = () => {
		backgroundColor.value = withTiming('transparent', {
			duration: 200,
			easing: Easing.inOut(Easing.ease),
		});
		scale.value = withTiming(1, {
			duration: 200,
			easing: Easing.inOut(Easing.ease),
		});
	};

	return (
		<Animated.View style={animatedStyle} className={cn('overflow-hidden rounded-xl', classNames?.root)} {...props}>
			<TouchableOpacity
				activeOpacity={activeOpacity}
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
				className={cn('px-4', classNames?.inner)}
				onPress={onPress}
			>
				{children}
			</TouchableOpacity>
		</Animated.View>
	);
}
