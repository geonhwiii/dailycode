import React from 'react';
import { View, Text } from '@dailycode/core';
import { trpc } from '../../utils/trpc';
import { ChatLayout } from './_components/chat.layout';
import { ChatNav } from './_components/chat.nav';
import { Chat } from '@/components/chat';

export function ChatScreen() {
  const { data, isLoading } = trpc.hello.useQuery('world');

  if (isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ChatLayout>
      <ChatNav />
      <View className='flex-1 p-5'>
        <View className='flex-1'>
          <Text>{data}</Text>
        </View>
        <Chat.Input />
      </View>
    </ChatLayout>
  );
}
