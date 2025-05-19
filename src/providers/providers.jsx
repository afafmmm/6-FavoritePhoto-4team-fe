"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ModalProvider } from "./ModalProvider";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
    </QueryClientProvider>
  );
}

export default Providers;
