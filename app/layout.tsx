import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from '@/components/Loader';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spacecon",
  description: "Premium navbar example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader>
          <Navbar />
          <main className="pt-24">
            {children}
          </main>
        </Loader>
      </body>
    </html>
  );
}