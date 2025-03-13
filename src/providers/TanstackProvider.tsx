"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <h1>{children}</h1>
    </QueryClientProvider>
  );
}
