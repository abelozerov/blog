// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Alexey Belozerov - Software Engineer",
  description:
    "Alexey Belozerov is a Software Engineer specializing in web applications using Next.js, React.js, TypeScript, and Chrome Extensions.",
  keywords: [
    "Alexey Belozerov",
    "Software Engineer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Chrome Extensions",
    "Web Development",
  ],
  authors: [{ name: "Alexey Belozerov" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
