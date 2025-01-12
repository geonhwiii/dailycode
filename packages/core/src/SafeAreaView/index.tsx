import { cssInterop } from 'nativewind';
import { SafeAreaView as RNSafeAreaView, type ViewProps } from 'react-native';

cssInterop(SafeAreaView, {
	className: {
		target: 'style',
	},
});

export function SafeAreaView({ ...props }: ViewProps) {
	return <RNSafeAreaView {...props} />;
}
