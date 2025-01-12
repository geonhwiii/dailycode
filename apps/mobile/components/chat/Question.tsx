import { Icon, Text, View } from '@dailycode/core';

type Props = {
  question: string;
};

export function ChatQuestion({ question }: Props) {
  return (
    <View className='flex-row gap-3'>
      <View className='justify-center items-center rounded-full border border-gray-300 size-10'>
        <Icon.Bot className='text-black' size={20} />
      </View>
      <View className='flex-1'>
        <Text size='xl'>{question}</Text>
      </View>
    </View>
  );
}
