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
    default: "Satyarup Law Firm | Expert Legal Services",
    template: "%s | Satyarup Law Firm",
  },
  description:
    "Satyarup Law Firm is a litigation-focused practice led by Dr. Ashwani Bhardwaj, Advocate-on-Record, Supreme Court of India. Over three decades of experience in Supreme Court litigation, High Court matters, arbitration, banking, and government representation.",
  keywords: [
    "law firm",
    "Supreme Court India",
    "Advocate-on-Record",
    "litigation",
    "arbitration",
    "High Court",
    "banking litigation",
    "government representation",
    "Dr Ashwani Bhardwaj",
    "Satyarup Law Firm",
    "legal counsel India",
    "dispute resolution",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Satyarup Law Firm",
    title: "Satyarup Law Firm | Expert Legal Services",
    description:
      "Litigation-focused legal practice with over three decades of experience before the Supreme Court, High Courts, and tribunals across India.",
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
