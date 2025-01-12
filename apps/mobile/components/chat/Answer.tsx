import { Icon, Text, View } from '@dailycode/core';

type Props = {
  answer: string;
};

export function ChatAnswer({ answer }: Props) {
  return (
    <View className='flex-1 items-end'>
      <View className='max-w-[80%] bg-gray-100 rounded-2xl px-4 py-2'>
        <Text size='xl' className='text-black'>
          {answer}
        </Text>
      </View>
    </View>
  );
}
