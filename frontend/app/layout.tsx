"use client";

import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const charming = localFont({
  src: "./fonts/charming.otf",
  display: "swap",
  variable: "--font-charming",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${charming.variable}  bg-white`}>
      <head />
      <body className="font-sans">{children}</body>
    </html>
  );
}
