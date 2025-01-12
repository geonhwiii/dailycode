import { useSession } from '@/components/auth/ctx';
import { Redirect } from 'expo-router';

export default function AuthRedirectPage() {
  // const { session } = useSession();
  // console.log()

  // if (session) return <Redirect href='/' />;

  return <Redirect href='/(auth)/welcome' />;
}
