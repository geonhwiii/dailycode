import { type BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export function useBottomSheet() {
	const ref = useRef<BottomSheetModal>(null);
	const { dismiss, dismissAll } = useBottomSheetModal();

	const open = () => ref.current?.present();

	return { ref, open, close: dismiss, closeAll: dismissAll };
}
