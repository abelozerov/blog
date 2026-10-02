// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import { ReactNode } from "react";
import Providers from "./providers";

// Variable width axes: the display type is set expanded, labels slightly condensed.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
});

export const metadata: Metadata = {
  title: "Alexey Belozerov - Software Engineer",
  description:
    "Alexey Belozerov is a Software Engineer specializing in web applications using Next.js, React.js, TypeScript, and Chrome Extensions, who also works on AI: MCP, agents, agent harnesses, and skills.",
  keywords: [
    "Alexey Belozerov",
    "Software Engineer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Chrome Extensions",
    "Web Development",
    "AI",
    "MCP",
    "AI Agents",
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
    <html
      lang="en"
      className={`${archivo.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
