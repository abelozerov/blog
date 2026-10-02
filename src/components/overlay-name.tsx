'use client';

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { caption } from "./caption";

// PerfectPixel's trick applied to the name: a semi-transparent copy laid over
// the real text. It loads misaligned and settles into place pixel by pixel;
// on hover it drifts with the pointer and snaps back on leave.
//
// Everything visual derives from two unitless CSS vars (--overlay-x/y). CSS sets
// the starting offset only when JS will run and motion is allowed, so without
// JS, before hydration, and with reduced motion the name renders aligned.
const START = { x: 18, y: -12 };
const MAX_DRIFT = 14;
const OVERLAY_OPACITY = 0.5;

const animatedStart = "@media (scripting: enabled) and (prefers-reduced-motion: no-preference)";

const clamp = (n: number) => Math.max(-MAX_DRIFT, Math.min(MAX_DRIFT, n));

const nameType = {
  fontFamily: "heading",
  fontWeight: "800",
  fontStretch: "125%",
  fontSize: { base: "clamp(2.5rem, 12.4vw, 3.75rem)", md: "clamp(3.5rem, 6.4vw, 5.75rem)" },
  lineHeight: "0.94",
  letterSpacing: "-0.03em",
} as const;

const handle = {
  position: "absolute",
  boxSize: "5px",
  bg: "site.accent",
} as const;

export function OverlayName({ lines }: { lines: string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Start from wherever CSS actually painted the overlay. Browsers without the
    // `scripting` media query never applied START, so animating from it would
    // knock an aligned name out of place at hydration.
    const paintedAtStart =
      getComputedStyle(root).getPropertyValue("--overlay-x").trim() === String(START.x);
    const current = paintedAtStart ? { ...START } : { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frame = 0;
    let rendered = { x: NaN, y: NaN };

    // The easing tail moves by sub-pixel steps; skip DOM writes until the rounded
    // offset actually changes.
    const render = () => {
      const x = Math.round(current.x) || 0;
      const y = Math.round(current.y) || 0;
      if (x === rendered.x && y === rendered.y) return;
      rendered = { x, y };
      root.style.setProperty("--overlay-x", String(x));
      root.style.setProperty("--overlay-y", String(y));
      root.dataset.aligned = String(x === 0 && y === 0);
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5) {
        current.x = target.x;
        current.y = target.y;
        frame = 0;
      } else {
        frame = requestAnimationFrame(tick);
      }
      render();
    };

    const animate = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const snapHome = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      current.x = target.x = 0;
      current.y = target.y = 0;
      render();
    };

    render();
    const settle = window.setTimeout(animate, 450);

    // Measuring on every pointermove forces layout right after render() dirtied
    // the tree; measure once per hover and again after the page moves.
    let rect: DOMRect | null = null;
    const invalidateRect = () => {
      rect = null;
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || motionQuery.matches) return;
      rect ??= root.getBoundingClientRect();
      target.x = clamp((event.clientX - (rect.left + rect.width / 2)) / 18);
      target.y = clamp((event.clientY - (rect.top + rect.height / 2)) / 8);
      animate();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      animate();
    };
    const onMotionChange = () => {
      if (motionQuery.matches) snapHome();
    };

    root.addEventListener("pointerenter", invalidateRect);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", invalidateRect);
    window.addEventListener("scroll", invalidateRect, { passive: true });
    motionQuery.addEventListener("change", onMotionChange);
    return () => {
      window.clearTimeout(settle);
      cancelAnimationFrame(frame);
      root.removeEventListener("pointerenter", invalidateRect);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", invalidateRect);
      window.removeEventListener("scroll", invalidateRect);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  const name = lines.map((line, i) => (
    <Box as="span" key={i} display="block">
      {line}
      {i < lines.length - 1 && " "}
    </Box>
  ));

  return (
    <Box
      ref={rootRef}
      data-overlay-root=""
      position="relative"
      isolation="isolate"
      css={{
        "--overlay-x": "0",
        "--overlay-y": "0",
        counterReset: "overlay-x var(--overlay-x) overlay-y var(--overlay-y)",
        [animatedStart]: {
          "&:not([data-aligned])": {
            "--overlay-x": String(START.x),
            "--overlay-y": String(START.y),
          },
        },
      }}
    >
      <Heading as="h1" {...nameType} color="site.ink">
        {name}
      </Heading>

      <Box
        aria-hidden
        position="absolute"
        top="0"
        left="0"
        pointerEvents="none"
        userSelect="none"
        transform="translate(calc(var(--overlay-x) * 1px), calc(var(--overlay-y) * 1px))"
        mixBlendMode={{ base: "multiply", _dark: "screen" }}
        opacity={OVERLAY_OPACITY}
        color="site.accent"
        {...nameType}
      >
        {name}
        {/* Layer selection frame, as a design tool draws it; shown only while misaligned */}
        <Box
          position="absolute"
          inset="-6px"
          borderWidth="1px"
          borderColor="site.accent"
          opacity="0"
          transition="opacity 0.3s"
          css={{
            "[data-aligned=false] &": { opacity: 1 },
            [animatedStart]: { "[data-overlay-root]:not([data-aligned]) &": { opacity: 1 } },
          }}
        >
          <Box {...handle} top="-3px" left="-3px" />
          <Box {...handle} top="-3px" right="-3px" />
          <Box {...handle} bottom="-3px" left="-3px" />
          <Box {...handle} bottom="-3px" right="-3px" />
        </Box>
      </Box>

      <Flex
        aria-hidden
        userSelect="none"
        mt={{ base: "4", md: "5" }}
        align="center"
        gap="3"
        {...caption}
        fontSize="xs"
      >
        <Box boxSize="2.5" bg="site.accent" opacity={OVERLAY_OPACITY} />
        <Text as="span">Overlay {Math.round(OVERLAY_OPACITY * 100)}%</Text>
        <Text as="span">
          X <Box as="span" display="inline-block" minW="3ch" _after={{ content: "counter(overlay-x)" }} />
        </Text>
        <Text as="span">
          Y <Box as="span" display="inline-block" minW="3ch" _after={{ content: "counter(overlay-y)" }} />
        </Text>
      </Flex>
    </Box>
  );
}
