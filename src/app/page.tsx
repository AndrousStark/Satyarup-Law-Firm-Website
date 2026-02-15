"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PracticeAreas from "@/components/home/PracticeAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import NewsPreview from "@/components/home/NewsPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <NewsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
