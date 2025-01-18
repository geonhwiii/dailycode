import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import type { Children } from '@/types/utils';

export enum LoginFormID {
  이메일 = 'email',
  비밀번호 = 'password',
}

const LoginFormSchema = z.object({
  [LoginFormID.이메일]: z.string().min(1, '이메일을 입력해 주세요.').email('이메일 형식을 입력해 주세요.'),
  [LoginFormID.비밀번호]: z.string().min(1, '비밀번호를 입력해 주세요.').min(4, '비밀번호를 4자리 이상 입력해 주세요.'),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;

export function LoginProvider({ children }: Children) {
  const method = useForm<LoginFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      [LoginFormID.이메일]: '',
      [LoginFormID.비밀번호]: '',
    },
  });

  return <FormProvider {...method}>{children}</FormProvider>;
}
