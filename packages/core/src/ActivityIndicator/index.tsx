import { cssInterop } from 'nativewind';
import { ActivityIndicator as RNActivityIndicator, type ActivityIndicatorProps } from 'react-native';

cssInterop(ActivityIndicator, {
	className: {
		target: 'style',
	},
});

export function ActivityIndicator({ ...props }: ActivityIndicatorProps) {
	return <RNActivityIndicator {...props} />;
}
