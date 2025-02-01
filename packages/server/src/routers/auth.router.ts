import { router, publicProcedure } from '../trpc';
import { loginSchema } from '../schemas/auth.schema';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ input }) => {
    return authService.login(input);
  }),
});
