import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ayoub Nasrallah | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Angular, .NET Core, and enterprise financial systems. 3.5+ years building scalable capital-markets platforms.",
  keywords: [
    "Full-Stack Developer",
    "Angular",
    ".NET Core",
    "TypeScript",
    "Azure",
    "Ayoub Nasrallah",
  ],
  authors: [{ name: "Ayoub Nasrallah" }],
  openGraph: {
    title: "Ayoub Nasrallah | Full-Stack Developer",
    description:
      "Building enterprise-grade financial systems with Angular & .NET Core",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
