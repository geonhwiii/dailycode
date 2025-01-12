import { LinearGradient as PrimitiveLinearGradient, type LinearGradientProps } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

cssInterop(LinearGradient, {
	className: {
		target: 'style',
	},
});

export function LinearGradient(props: LinearGradientProps) {
	return <PrimitiveLinearGradient {...props} />;
}
