import { useSession } from '@/components/auth/ctx';
import { Text } from '@dailycode/core';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href='/(auth)/login' />;
  }
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='(modal)' options={{ headerShown: false, presentation: 'fullScreenModal' }} />
    </Stack>
  );
}
