import { View } from '@dailycode/core';
import { LoginProvider } from './_components/login.provider';
import { LoginForm } from './_components/login.form';

export function LoginScreen() {
  return (
    <View className='flex-1 justify-center items-center p-4'>
      <LoginProvider>
        <LoginForm />
      </LoginProvider>
    </View>
  );
}
