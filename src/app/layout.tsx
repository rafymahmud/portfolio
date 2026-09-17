import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafy Mahmud",
  description: "Portfolio of Rafy Mahmud, Video Editor and Motion Designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col text-white`}>
        <Header />
        <main className="flex-grow pt-24">{children}</main>
      </body>
    </html>
  );
}
