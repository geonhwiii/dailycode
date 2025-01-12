import React from 'react';
import { SafeAreaView, Text, View } from '@dailycode/core';
import { Button } from '@dailycode/ui';
import { Link, useRouter } from 'expo-router';

export default function WelcomePage() {
  const { navigate } = useRouter();
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <View className='flex-1 justify-center items-center'>
          <Text size='3xl' weight='bold'>
            {'하루코드'}
          </Text>
        </View>
        <View className='px-5'>
          <Button pill size='lg' className='w-full' onPress={() => navigate('/(app)/(tabs)/tab_1')}>
            {'시작하기'}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
