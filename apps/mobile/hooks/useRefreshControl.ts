import { useCallback, useState } from 'react';

export function useRefreshControl(delay = 1_000) {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, delay);
  }, [delay]);

  return { refreshing, onRefresh };
}
