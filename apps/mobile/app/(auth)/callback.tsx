import { useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSession } from '@/components/auth/ctx';
import { ActivityIndicator, View } from '@dailycode/core';
import { supabase } from '@/utils/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const { signIn } = useSession();
  const params = useLocalSearchParams<{ code?: string; error?: string; error_description?: string }>();

  useEffect(() => {
    async function handleAuth() {
      try {
        if (params.error) {
          throw new Error(`${params.error}: ${params.error_description}`);
        }
        if (!params.code) {
          throw new Error('No code received');
        }
        const { data, error } = await supabase.auth.exchangeCodeForSession(params.code);
        if (error) throw error;
        if (data.session) {
          signIn(data.session);
          router.replace('/(app)/(tabs)/tab_1');
        }
      } catch (error) {
        router.replace('/');
      }
    }

    handleAuth();
  }, [params, router, signIn]);

  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator />
    </View>
  );
}
