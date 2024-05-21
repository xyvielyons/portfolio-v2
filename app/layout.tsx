import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const roboto = Roboto({ 
  subsets: ["latin"],
  weight:['400','700','500'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "xyvielyons developer portfolio",
  description: "xyvie lyons portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-backgroundColor`}>
      <Providers>
        {children}
      </Providers>
        </body>
    </html>
  );
}
