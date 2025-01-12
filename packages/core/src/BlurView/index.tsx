import { BlurView as ExpoBlurView, type BlurViewProps } from 'expo-blur';
import { Platform } from 'react-native';
import { View } from '../View';

export function BlurView({ ...props }: BlurViewProps) {
	return Platform.OS === 'ios' ? <ExpoBlurView {...props} /> : <View {...props} />;
}
