'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import system from "../theme";
import { ColorModeProvider } from "../components/ui/color-mode";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
