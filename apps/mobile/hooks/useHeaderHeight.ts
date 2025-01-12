import { useHeaderHeight as useHeaderHeightPrimivitive } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useHeaderHeight() {
  const headerHeight = useHeaderHeightPrimivitive();
  const { bottom } = useSafeAreaInsets();
  return { paddingTop: headerHeight, paddingBottom: headerHeight + bottom };
}
