import type { Children } from '@/types/utils';
import { KeyboardAvoidingView, SafeAreaView } from '@dailycode/core';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export function ChatLayout({ children }: Children) {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView className='flex-1'>{children}</KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
