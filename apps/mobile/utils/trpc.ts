import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@dailycode/server';

export const trpc = createTRPCReact<AppRouter>();
