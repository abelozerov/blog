'use client';

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./color-mode";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const next = colorMode === "dark" ? "light" : "dark";

  return (
    <ClientOnly fallback={<Skeleton boxSize="9" rounded="md" />}>
      <IconButton
        aria-label={`Switch to ${next} theme`}
        onClick={toggleColorMode}
        variant="ghost"
        size="sm"
        color="site.ink"
        _hover={{ bg: "site.rule" }}
      >
        {colorMode === "dark" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  );
}
