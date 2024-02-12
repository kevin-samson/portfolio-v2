import type { Metadata } from "next";
import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/context/smoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin | Personal Portfolio",
  description: "This is Kevin personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background no-scrollbar text-text transition-colors overflow-x-hidden `}
      >
        <SmoothScrollProvider options={{ smooth: true }}>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
