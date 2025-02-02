import { useSession } from '@/components/auth/ctx';
import { Button } from '@dailycode/ui';
import { View } from 'react-native';

export default function Tab3Page() {
  const { signOut } = useSession();
  return (
    <View className='flex-1 p-5 bg-white'>
      <Button onPress={signOut} pill className='mt-5'>
        {'로그아웃'}
      </Button>
    </View>
  );
}
