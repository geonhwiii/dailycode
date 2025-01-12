import { Image as ExpoImage, type ImageProps } from 'expo-image';
import { cssInterop } from 'nativewind';

type Props = ImageProps;

cssInterop(Image, {
	className: {
		target: 'style',
	},
});

export function Image({ ...props }: Props) {
	return <ExpoImage {...props} />;
}
