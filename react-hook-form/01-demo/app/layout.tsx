import "./globals.css";
import type { Metadata } from "next";
import { Aboreto } from "next/font/google";

const font = Aboreto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exploring React Hook Form",
  description: "Learning React Hook Form! #letsgo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="max-w-[700px] min-h-[90vh] mx-auto p-4 border border-slate-500">
          {children}
        </main>
      </body>
    </html>
  );
}
