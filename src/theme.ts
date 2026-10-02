// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Palette is borrowed from PerfectPixel: a cool design-tool canvas (charcoal in dark
// mode), plum ink, and the logo's magenta as the single accent and hero overlay color.
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
      },
      // Bringhurst's classic scale: 21px replaces Chakra's 20px.
      fontSizes: {
        xl: { value: "1.3125rem" },
      },
    },
    semanticTokens: {
      colors: {
        site: {
          canvas: { value: { base: "#F2F3F6", _dark: "#1F2028" } },
          surface: { value: { base: "#FFFFFF", _dark: "#282A33" } },
          ink: { value: { base: "#22182E", _dark: "#ECEDF2" } },
          muted: { value: { base: "#5C5868", _dark: "#A6A9B7" } },
          rule: { value: { base: "#DCDEE5", _dark: "#3A3D4A" } },
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
