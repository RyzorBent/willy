import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MobileDonateBar from "@/components/MobileDonateBar";
import A11yToolbar from "@/components/A11yToolbar";
import CookieBanner from "@/components/CookieBanner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willy Foundation — Strength · Legacy · Community",
  description:
    "The permanent home of the Bra Willy Back-A-Buddy & Legacy Project. Strength, legacy, community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
        <MobileDonateBar />
        <A11yToolbar />
        <CookieBanner />
      </body>
    </html>
  );
}
