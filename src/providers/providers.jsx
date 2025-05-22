"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StateModalProvider } from "./StateModalProvider";
import { AlertModalProvider } from "./AlertModalProvider";
import AuthProvider from "./AuthProvider";

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AlertModalProvider>
          <StateModalProvider>{children}</StateModalProvider>
        </AlertModalProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default Providers;
