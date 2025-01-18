import { type SubmitHandler, useFormContext } from 'react-hook-form';
import { LoginFormID, type LoginFormData } from './login.provider';
import { Button } from '@dailycode/ui';
import { FormInput } from '@/components/form/Input';
import { Text, Pressable, View } from '@dailycode/core';
import { useSession } from '@/components/auth/ctx';
import { useRouter } from 'expo-router';

export function LoginForm() {
  const { replace } = useRouter();
  const { signIn } = useSession();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<LoginFormData>();

  const onSubmitSignIn: SubmitHandler<LoginFormData> = async ({ email, password }) => {
    await signIn('TOKEN');
    replace('/(app)/(tabs)/tab_1');
  };
  return (
    <View className='flex-1 w-full'>
      <View className='flex-1' />
      <View className='flex-1 gap-5 mb-6 w-full'>
        <View className='gap-3'>
          <FormInput
            id={LoginFormID.이메일}
            control={control}
            placeholder='이메일을 입력해 주세요'
            errorMessage={errors[LoginFormID.이메일]?.message}
          />
          <FormInput
            id={LoginFormID.비밀번호}
            control={control}
            secureTextEntry
            placeholder='비밀번호를 입력해 주세요'
            errorMessage={errors[LoginFormID.비밀번호]?.message}
          />
        </View>
        <View className='gap-3'>
          <Button loading={isSubmitting} pill disabled={isSubmitting} size='lg' onPress={handleSubmit(onSubmitSignIn)}>
            {'로그인'}
          </Button>
          <Button size='lg' variant='outline' pill>
            {'회원가입'}
          </Button>
        </View>
      </View>
      <View className='flex-1' />
    </View>
  );
}
