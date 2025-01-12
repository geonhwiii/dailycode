import { cssInterop } from 'nativewind';
import { Platform, KeyboardAvoidingView as RNKeyboardAvoidingView, type KeyboardAvoidingViewProps } from 'react-native';

const defaultBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

cssInterop(KeyboardAvoidingView, {
	classNamKeyboardAvoidingView: {
		target: 'style',
	},
});

export function KeyboardAvoidingView({ ...props }: Omit<KeyboardAvoidingViewProps, 'behavior'>) {
	return <RNKeyboardAvoidingView className='flex-col flex-1 justify-center' behavior={defaultBehavior} {...props} />;
}
