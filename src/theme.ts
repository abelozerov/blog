// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Palette is borrowed from PerfectPixel: a cool design-tool canvas with the
// logo's magenta as the single accent (also the color of the hero overlay).
const config = defineConfig({
  globalCss: {
    html: {
      bg: "site.canvas",
      color: "site.ink",
      scrollPaddingTop: "6",
      // Read by Chakra's focus ring recipes; their color comes from gray.focusRing below.
      "--focus-ring-offset": "3px",
      _motionSafe: { scrollBehavior: "smooth" },
    },
    "*::selection": {
      bg: "site.accent",
      color: "site.canvas",
    },
    // Plain anchors (e.g. LinkOverlay); Link and IconButton recipes sit in a later
    // cascade layer and draw their own ring, styled via the token and var above.
    "a:focus-visible, button:focus-visible": {
      outline: "2px solid",
      outlineColor: "site.accent",
      outlineOffset: "3px",
      borderRadius: "2px",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-archivo), ui-sans-serif, system-ui, sans-serif" },
        body: { value: "var(--font-archivo), ui-sans-serif, system-ui, sans-serif" },
        mono: { value: "var(--font-martian), ui-monospace, Menlo, monospace" },
      },
    },
    semanticTokens: {
      colors: {
        site: {
          canvas: { value: { base: "#F2F3F6", _dark: "#111217" } },
          surface: { value: { base: "#FFFFFF", _dark: "#191B22" } },
          ink: { value: { base: "#14151B", _dark: "#ECEDF2" } },
          muted: { value: { base: "#5A5D6C", _dark: "#9A9EAD" } },
          rule: { value: { base: "#DCDEE5", _dark: "#2A2D38" } },
          accent: { value: { base: "#C2185F", _dark: "#FF6AA9" } },
        },
        // html's default colorPalette is gray, so this recolors every recipe focus ring.
        gray: {
          focusRing: { value: "{colors.site.accent}" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
