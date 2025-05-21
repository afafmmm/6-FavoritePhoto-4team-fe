"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StateModalProvider } from "./StateModalProvider";
import { AlertModalProvider } from "./AlertModalProvider";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertModalProvider>
        <StateModalProvider>{children}</StateModalProvider>
      </AlertModalProvider>
    </QueryClientProvider>
  );
}

export default Providers;
