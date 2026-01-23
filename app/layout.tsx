import type { Metadata } from "next";
import { Inter, Bangers, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import SilenceConsole from "@/components/SilenceConsole";

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
      <body
        className={`${inter.variable} ${bangers.variable} ${montserrat.variable} bg-black`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var origError = console.error;
                var origWarn = console.warn;
                console.error = function() {
                  var args = Array.prototype.slice.call(arguments);
                  var msg = args.join(' ');
                  if (msg.indexOf('WebGL') === -1 && 
                      msg.indexOf('GL_INVALID') === -1 && 
                      msg.indexOf('Framebuffer') === -1 && 
                      msg.indexOf('THREE') === -1 &&
                      msg.indexOf('glTexStorage') === -1 && 
                      msg.indexOf('glClear') === -1 && 
                      msg.indexOf('glDraw') === -1 &&
                      msg.indexOf('Texture dimensions') === -1) {
                    origError.apply(console, args);
                  }
                };
                console.warn = function() {
                  var args = Array.prototype.slice.call(arguments);
                  var msg = args.join(' ');
                  if (msg.indexOf('THREE') === -1 && 
                      msg.indexOf('Multiple instances') === -1) {
                    origWarn.apply(console, args);
                  }
                };
              })();
            `,
          }}
        />
        <SilenceConsole />
        <Loader>
          <Navbar />
          <main className="pt-24">{children}</main>
        </Loader>
      </body>
    </html>
  );
}