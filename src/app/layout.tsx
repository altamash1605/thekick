import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseTracker } from "@/components/MouseTracker";
import { CursorGlow } from "@/components/CursorGlow";
import { SplashScreen } from "@/components/SplashScreen";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Kick Martial Arts Academy",
  description: "Develop Discipline. Improve Fitness. Registered with India Taekwondo.",
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-neutral-950 text-neutral-300 antialiased selection:bg-red-900 selection:text-white overflow-x-hidden relative")}>
        <MouseTracker />
        <CursorGlow />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
