import type { Metadata } from "next";
import { Inter, Bangers, Montserrat } from "next/font/google";
import Script from "next/script";
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
    <html lang="en" className="bg-black">
      <head />
      <body
        className={`${inter.variable} ${bangers.variable} ${montserrat.variable} bg-black`}
      >
        <Script
          id="suppress-console"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalError = console.error;
                const originalWarn = console.warn;
                
                console.error = function() {
                  const args = Array.from(arguments);
                  const msg = String(args[0] || '');
                  if (
                    msg.includes('WebGL') || 
                    msg.includes('GL_INVALID') || 
                    msg.includes('Framebuffer') || 
                    msg.includes('THREE') ||
                    msg.includes('glTexStorage') || 
                    msg.includes('glClear') || 
                    msg.includes('glDraw') ||
                    msg.includes('Texture dimensions')
                  ) {
                    return;
                  }
                  originalError.apply(console, args);
                };
                
                console.warn = function() {
                  const args = Array.from(arguments);
                  const msg = String(args[0] || '');
                  if (
                    msg.includes('THREE') || 
                    msg.includes('Multiple instances')
                  ) {
                    return;
                  }
                  originalWarn.apply(console, args);
                };
              })();
            `,
          }}
        />
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