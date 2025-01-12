import { SafeAreaView, View } from '@dailycode/core';
import { HomeDatePicker } from './_components/home.date-picker';

export function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <HomeDatePicker />
    </SafeAreaView>
  );
}
