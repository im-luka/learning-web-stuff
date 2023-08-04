import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exploring TypeScript",
  description: "Learning TypeScript! #letsgo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1280px] mx-auto px-4 py-1">{children}</main>
      </body>
    </html>
  );
}
