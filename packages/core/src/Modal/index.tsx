import { type ModalProps, Modal as RNModal } from 'react-native';
import { SafeAreaView } from '../SafeAreaView';
import { View } from '../View';
import { ChevronLeft } from '../Icons/ChevronLeft';
import { TouchableOpacity } from '../TouchableOpacity';

type Props = ModalProps;

export function Modal({
	visible,
	animationType = 'fade',
	onRequestClose,
	presentationStyle = 'fullScreen',
	children,
}: Props) {
	return (
		<RNModal
			visible={visible}
			animationType={animationType}
			presentationStyle={presentationStyle}
			onRequestClose={onRequestClose}
		>
			<SafeAreaView className='flex-1 bg-white'>
				<View className='px-2'>
					<TouchableOpacity onPress={onRequestClose}>
						<ChevronLeft size={32} className='text-black' />
					</TouchableOpacity>
				</View>
				{children}
			</SafeAreaView>
		</RNModal>
	);
}
