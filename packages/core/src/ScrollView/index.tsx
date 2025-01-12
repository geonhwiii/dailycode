import { cssInterop } from 'nativewind';
import { ScrollView as RNScrollView, type ScrollViewProps } from 'react-native';

cssInterop(ScrollView, {
	className: {
		target: 'contentContainerStyle',
	},
});

export function ScrollView({ style, ...props }: ScrollViewProps) {
	return <RNScrollView style={[{ flex: 1 }, style]} {...props} />;
}
