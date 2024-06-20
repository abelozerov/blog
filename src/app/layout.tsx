// app/layout.tsx
'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../theme";
import { ColorModeScript } from "@chakra-ui/react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Alexey Belozerov is a Software Engineer specializing in web applications using Next.js, React.js, TypeScript, and Chrome Extensions." />
        <meta name="keywords" content="Alexey Belozerov, Software Engineer, Next.js, React.js, TypeScript, Chrome Extensions, Web Development" />
        <meta name="author" content="Alexey Belozerov" />
        <link rel="icon" href="/favicon.ico" />
        <title>Alexey Belozerov - Software Engineer</title>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
