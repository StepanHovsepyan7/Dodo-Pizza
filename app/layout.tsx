import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

// Load Nunito font once with all needed weights and subsets
const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
        <head>
            <link data-rh="true" rel="icon" href="/logo.png"/>
        </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
