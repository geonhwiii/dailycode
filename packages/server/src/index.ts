import { Hono } from 'hono';
import { initTRPC } from '@trpc/server';
import { trpcServer } from '@hono/trpc-server';
import { z } from 'zod';

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? 'World'}!`;
  }),
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
