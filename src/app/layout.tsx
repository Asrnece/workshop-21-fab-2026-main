import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${portfolioConfig.personalInfo.name} | ${portfolioConfig.personalInfo.title}`,
  description: portfolioConfig.personalInfo.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
