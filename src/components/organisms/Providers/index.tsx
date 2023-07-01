'use client';

import { queryClientConfig } from '@lib/query-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

const Providers = ({ children }: React.PropsWithChildren) => {
  // Ensures data isn't shared among authenticated users
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
