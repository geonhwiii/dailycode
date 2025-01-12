import { cssInterop } from 'nativewind';
import { forwardRef, type Ref } from 'react';
import { View as RNView, type ViewProps } from 'react-native';

const View = forwardRef(({ ...props }: ViewProps, ref: Ref<RNView>) => {
	return <RNView ref={ref} {...props} />;
});

cssInterop(View, {
	className: {
		target: 'style',
	},
});

export { View };
