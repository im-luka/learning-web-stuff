import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exploring React Query",
  description: "Let's explore React Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1280px] mx-auto p-4 bg-slate-900">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
