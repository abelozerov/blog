'use client';

import { ThemeProvider, useTheme, type ThemeProviderProps } from "next-themes";

export type ColorMode = "light" | "dark";

export function ColorModeProvider(props: ThemeProviderProps) {
  // Matches the previous Chakra v2 defaults: start in light mode, ignore the OS preference.
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const colorMode = resolvedTheme as ColorMode | undefined;

  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode: () => setTheme(colorMode === "dark" ? "light" : "dark"),
  };
}
