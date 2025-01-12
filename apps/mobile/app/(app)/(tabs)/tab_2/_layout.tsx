import { Stack } from 'expo-router';

export default function Tab2Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
    </Stack>
  );
}
