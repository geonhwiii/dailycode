import { Icon, Text, TouchableOpacity, View } from '@dailycode/core';
import { useRouter } from 'expo-router';

export function ChatNav() {
  const { back } = useRouter();
  return (
    <View className='flex-row justify-between items-center px-4'>
      <TouchableOpacity className='p-2' onPress={back}>
        <Icon.X strokeWidth={2} size={24} className='text-black' />
      </TouchableOpacity>
      <TouchableOpacity className='p-2' onPress={back}>
        <Text className='text-xl font-bold'>완료</Text>
      </TouchableOpacity>
    </View>
  );
}
