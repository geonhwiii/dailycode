import React from 'react';
import { SafeAreaView, Text, View } from '@dailycode/core';
import { GithubLoginButton } from '@/components/auth/github-login-button';

export default function WelcomePage() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <View className='flex-1 justify-center items-center'>
          <Text size='3xl' weight='bold'>
            {'하루코드'}
          </Text>
        </View>
        <View className='px-5'>
          <GithubLoginButton className='w-full' />
        </View>
      </View>
    </SafeAreaView>
  );
}
