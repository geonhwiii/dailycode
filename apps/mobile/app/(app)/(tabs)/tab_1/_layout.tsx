import { Stack } from 'expo-router';

export default function Tab1Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
    </Stack>
  );
}
