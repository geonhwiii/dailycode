import { cssInterop } from 'nativewind';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView as RNWebView, type WebViewProps } from 'react-native-webview';
type Props = WebViewProps;

cssInterop(WebView, {
	className: {
		target: 'style',
	},
});

export function WebView({ ...props }: Props) {
	const [hideIndicator, setHideInidicator] = useState<boolean>(false);
	return (
		<View className='relative flex-1'>
			<RNWebView onLoad={() => setHideInidicator(true)} {...props} />
			{!hideIndicator && (
				<View className='absolute top-0 right-0 bottom-0 left-0 justify-center items-center'>
					<ActivityIndicator />
				</View>
			)}
		</View>
	);
}
