// app/layout.tsx
'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../theme"

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
