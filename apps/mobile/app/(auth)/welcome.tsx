import React from 'react';
import { SafeAreaView, Text, View } from '@dailycode/core';
import { Button } from '@dailycode/ui';
import { Link } from 'expo-router';

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
          <Link href='/'>
            <Button pill size='lg' className='w-full'>
              {'시작하기'}
            </Button>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
