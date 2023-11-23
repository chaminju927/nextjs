"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export default function Providers({
  children,
}: PropsWithChildren): JSX.Element {
  // const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
