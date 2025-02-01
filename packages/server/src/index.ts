import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { router } from './trpc';
import { authRouter } from './routers/auth.router';

export const appRouter = router({
  auth: authRouter,
});

const app = new Hono();

app.use(
  '/api/*',
  trpcServer({
    router: appRouter,
  }),
);

export type AppRouter = typeof appRouter;
export type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export default app;
