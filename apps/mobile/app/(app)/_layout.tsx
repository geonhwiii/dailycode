import { Stack } from 'expo-router';
import { Text, View } from '@dailycode/core';

export default function AppLayout() {
  return (
    <Stack>
      <View className='bg-blue-500'>
        <Text className='text-red-200'>HELLO WORLD</Text>
        <Text className='text-red-500'>HELLO WORLD</Text>
      </View>
    </Stack>
  );
}
