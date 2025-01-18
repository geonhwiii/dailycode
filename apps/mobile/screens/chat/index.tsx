import { Chat } from '@/components/chat';
import { View } from '@dailycode/core';
import { ChatNav } from './_components/chat.nav';
import { ChatLayout } from './_components/chat.layout';

export function ChatScreen() {
  return (
    <ChatLayout>
      <ChatNav />
      <View className='flex-1 p-5'>
        <View className='flex-1'>{/* Messages will be rendered here */}</View>
        <Chat.Input />
      </View>
    </ChatLayout>
  );
}
