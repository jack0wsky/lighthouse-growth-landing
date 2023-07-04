"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { PreferredLanguageWrapper } from "@/shared/utils/PreferedLanguage.context";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PreferredLanguageWrapper>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PreferredLanguageWrapper>
  );
};
