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
    "Full-Stack Developer with 3.5+ years of experience developing and supporting enterprise financial applications using Angular, .NET Core, SQL Server, and Azure.",
  keywords: [
    "Full-Stack Developer",
    "Angular",
    ".NET Core",
    "TypeScript",
    "SQL Server",
    "Azure",
    "Ayoub Nasrallah",
  ],
  authors: [{ name: "Ayoub Nasrallah" }],
  openGraph: {
    title: "Ayoub Nasrallah | Full-Stack Developer",
    description:
      "Full-Stack Developer with enterprise experience in Angular and .NET Core — currently expanding into AI Engineering.",
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
