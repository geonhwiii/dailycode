import { SafeAreaView, View } from '@dailycode/core';
import { HomeDatePicker } from './_components/home.date-picker';
import { HomeContent } from './_components/home.content';

export function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <HomeDatePicker />
      <HomeContent />
    </SafeAreaView>
  );
}
