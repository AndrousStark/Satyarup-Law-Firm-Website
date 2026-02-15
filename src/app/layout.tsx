import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Satyarup Law Firm Group | Expert Legal Services",
    template: "%s | Satyarup Law Firm Group",
  },
  description:
    "Satyarup Law Firm Group delivers strategic legal solutions with integrity and precision across corporate law, criminal defence, civil litigation, family law, property, labour, and intellectual property.",
  keywords: [
    "law firm",
    "legal services",
    "corporate law",
    "criminal defence",
    "civil litigation",
    "family law",
    "property law",
    "labour law",
    "intellectual property",
    "India law firm",
    "attorney",
    "legal counsel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Satyarup Law Firm Group",
    title: "Satyarup Law Firm Group | Expert Legal Services",
    description:
      "Premier full-service law firm delivering strategic legal solutions across diverse practice areas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white text-charcoal antialiased font-sans">
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
