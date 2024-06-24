import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Системийн нэр",
  description: "Системийн тухай тайлбар",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className}`}>
        {/* theme wrap */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* global toast харагдах хэсэг */}
          <Toaster richColors toastOptions={{ duration: 4000 }} position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
