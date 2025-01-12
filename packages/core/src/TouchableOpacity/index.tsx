import { cssInterop } from 'nativewind';
import { TouchableOpacity as RNTouchableOpacity, type TouchableOpacityProps } from 'react-native';

cssInterop(TouchableOpacity, {
	className: {
		target: 'style',
	},
});

export function TouchableOpacity({ ...props }: TouchableOpacityProps) {
	return <RNTouchableOpacity {...props} />;
}
