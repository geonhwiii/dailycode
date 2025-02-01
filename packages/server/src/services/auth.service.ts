import type { LoginInput } from '../schemas/auth.schema';
import type { LoginResponse } from '../types/auth.types';

export class AuthService {
  async login(input: LoginInput): Promise<LoginResponse> {
    // TODO: 실제 데이터베이스 연동 필요
    return {
      token: 'test_token',
      user: {
        id: '1',
        email: input.email,
      },
    };
  }
}
