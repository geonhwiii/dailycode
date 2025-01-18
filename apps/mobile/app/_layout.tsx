import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import '@/styles/global.css';
import { SessionProvider, useSession } from '@/components/auth/ctx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from '@dailycode/core';

SplashScreen.setOptions({
  duration: 1500,
  fade: true,
});

export default function RootLayout() {
  return (
    <SessionProvider>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(app)' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
      </GestureHandlerRootView>
    </SessionProvider>
  );
}
