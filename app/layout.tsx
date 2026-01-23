import type { Metadata } from "next";
import { Inter, Bangers, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import SilenceConsole from "@/components/SilenceConsole";
import ConsoleFilter from './console-filter';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
});

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
      <body
        className={`${inter.variable} ${bangers.variable} ${montserrat.variable}`}
      >
      <ConsoleFilter/>
        <SilenceConsole />
        <Loader>
          <Navbar />
          <main className="pt-24">{children}</main>
        </Loader>
      </body>
    </html>
  );
}
