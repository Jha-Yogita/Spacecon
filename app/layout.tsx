import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "SpaceCon 2026",
  description: "Multiverse Menace — SpaceCon Tech Fest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        
          <Navbar />
          <main className="pt-24">{children}</main>
      
      </body>
    </html>
  );
}
