import { Icon, View, TextInput, TouchableOpacity } from '@dailycode/core';

export function ChatInput() {
  return (
    <View className='flex-row gap-2 py-2 pr-2 pl-4 bg-gray-100 rounded-3xl'>
      <TextInput
        className='flex-1 py-1 text-xl'
        autoCapitalize='none'
        autoFocus
        placeholder='답변을 입력하기...'
        enablesReturnKeyAutomatically
        multiline
      />
      <TouchableOpacity
        activeOpacity={0.6}
        className='justify-center items-center mt-auto w-10 h-10 bg-black rounded-full'
      >
        <Icon.ArrowUp strokeWidth={3} size={20} className='text-white' />
      </TouchableOpacity>
    </View>
  );
}
