import { Button } from '@dailycode/ui';
import { supabase } from '@/utils/supabase';
import { Linking } from 'react-native';

type Props = {
  className?: string;
};

export function GithubLoginButton({ className }: Props) {
  const onSignWithGithub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: __DEV__ ? 'exp://localhost:8081/--/(auth)/callback' : 'dailycode://(auth)/callback',
          skipBrowserRedirect: true,
        },
      });
      if (error) throw error;
      if (data?.url) {
        await Linking.openURL(data.url);
      }
    } catch (error) {
      console.error('GitHub 로그인 에러:', error);
    }
  };

  return (
    <Button className={className} size='lg' pill onPress={onSignWithGithub}>
      {'Github으로 시작하기'}
    </Button>
  );
}
