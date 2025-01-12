import { FlashList as ShopifiyFlashList, type FlashListProps } from '@shopify/flash-list';

export function FlashList<T>({ ...props }: FlashListProps<T>) {
	return <ShopifiyFlashList {...props} />;
}
