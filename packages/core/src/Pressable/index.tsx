import { cssInterop } from 'nativewind';
import { Pressable as RNPressable, type PressableProps } from 'react-native';
import type React from 'react';
import { forwardRef } from 'react';

cssInterop(RNPressable, {
	className: {
		target: 'style',
	},
});

export type PressableRef = React.ComponentRef<typeof RNPressable>;

export const Pressable = forwardRef<PressableRef, PressableProps>((props, ref) => {
	return <RNPressable {...props} ref={ref} />;
});

Pressable.displayName = 'Pressable';
