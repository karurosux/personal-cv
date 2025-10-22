import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Gonzalez | Senior Software Engineer",
  description: "Senior Software Engineer with 11 years of experience. Expert in Angular, React, TypeScript, and full-stack development. Employee of the Year at Semantic AI.",
  keywords: ["Carlos Gonzalez", "Software Engineer", "Frontend Developer", "Angular", "React", "TypeScript", "Full Stack Developer"],
  authors: [{ name: "Carlos Javier Gonzalez Vasquez" }],
  openGraph: {
    title: "Carlos Gonzalez | Senior Software Engineer",
    description: "Senior Software Engineer with 11 years of experience specializing in frontend technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
