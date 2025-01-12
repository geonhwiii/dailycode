import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import '@/styles/global.css';

SplashScreen.setOptions({
  duration: 1500,
  fade: true,
});

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(app)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
    </Stack>
  );
}
