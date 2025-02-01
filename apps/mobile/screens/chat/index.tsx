import React from 'react';
import { View, Text } from '@dailycode/core';
import { ChatLayout } from './_components/chat.layout';
import { ChatNav } from './_components/chat.nav';
import { Chat } from '@/components/chat';

export function ChatScreen() {
  return (
    <ChatLayout>
      <ChatNav />
      <View className='flex-1 p-5'>
        <View className='flex-1'>
          <Text>{''}</Text>
        </View>
        <Chat.Input />
      </View>
    </ChatLayout>
  );
}
