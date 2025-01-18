import { Stack } from 'expo-router';
import * as React from 'react';

export default function ModalLayout() {
  return (
    <Stack
      initialRouteName='chat'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='chat' />
    </Stack>
  );
}
