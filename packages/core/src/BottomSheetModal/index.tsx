import {
	BottomSheetBackdrop,
	BottomSheetScrollView,
	BottomSheetView,
	BottomSheetModal as PrimitiveBottomSheetModal,
	type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useMemo, type ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BottomSheetModalProps = {
	children: ReactNode[] | ReactNode;
	snapPoint?: string;
	enableContentPanningGesture?: boolean;
};

const BottomSheetModal = forwardRef<PrimitiveBottomSheetModal, BottomSheetModalProps>(
	({ children, snapPoint = '40%', enableContentPanningGesture }, ref) => {
		const snapPoints = useMemo(() => [snapPoint], [snapPoint]);
		const { bottom } = useSafeAreaInsets();

		const renderBackdrop = useCallback(
			({ ...props }: BottomSheetBackdropProps) => (
				<BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior='close' />
			),
			[],
		);

		return (
			<PrimitiveBottomSheetModal
				ref={ref}
				backdropComponent={renderBackdrop}
				snapPoints={snapPoints}
				enableDynamicSizing={false}
				enableContentPanningGesture={enableContentPanningGesture}
				handleIndicatorStyle={{ backgroundColor: '#dedede' }}
				backgroundStyle={{ borderRadius: 20 }}
				containerStyle={{ marginHorizontal: 8, marginBottom: bottom, borderRadius: 20 }}
				onChange={() => {}}
			>
				<BottomSheetScrollView contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: bottom }}>
					<BottomSheetView>{children}</BottomSheetView>
				</BottomSheetScrollView>
			</PrimitiveBottomSheetModal>
		);
	},
);

export { BottomSheetModal };
