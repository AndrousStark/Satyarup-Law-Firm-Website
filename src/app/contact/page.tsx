"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const contactInfo = [
  { label: "Address", value: "123 Legal Avenue, Suite 500\nNew Delhi, India - 110001", icon: "&#9962;" },
  { label: "Phone", value: "+91-11-2205-3080\n+91-11-2202-3821", icon: "&#9742;" },
  { label: "Email", value: "info@satyaruplawfirm.com", icon: "&#9993;" },
  { label: "Hours", value: "Monday - Friday\n9:00 AM - 6:00 PM IST", icon: "&#9200;" },
];

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Open mailto link as fallback for static site
    const subject = encodeURIComponent(formData.subject || "Contact from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:info@satyaruplawfirm.com?subject=${subject}&body=${body}`, "_blank");

    setStatus("success");
    setStatusMessage("Thank you! Your email client has been opened. Please send the pre-filled email.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-charcoal overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
              alt="Contact"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <span className="text-warm-gold text-xs uppercase tracking-[0.4em] mb-4 block">Reach Out</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display">Contact Us</h1>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Info */}
              <motion.div
                variants={prefersReducedMotion ? {} : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <SectionHeading label="Get In Touch" title="Let's Start a Conversation" align="left" />
                <p className="text-warm-gray leading-relaxed mb-8">
                  Ready to discuss your legal needs? Reach out to us for a confidential consultation.
                  Our team is here to provide expert guidance.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <span className="text-2xl text-warm-gold" dangerouslySetInnerHTML={{ __html: info.icon }} />
                      <div>
                        <p className="text-sm font-semibold text-charcoal uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-warm-gray whitespace-pre-line mt-1">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                variants={prefersReducedMotion ? {} : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="glass-card shimmer p-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-warm-gold/20 bg-white px-4 py-3 text-charcoal placeholder-warm-gray/50 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-warm-gold/20 bg-white px-4 py-3 text-charcoal placeholder-warm-gray/50 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-warm-gold/20 bg-white px-4 py-3 text-charcoal placeholder-warm-gray/50 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 transition-all"
                        placeholder="+91-XXXXX-XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-lg border border-warm-gold/20 bg-white px-4 py-3 text-charcoal placeholder-warm-gray/50 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-warm-gold/20 bg-white px-4 py-3 text-charcoal placeholder-warm-gray/50 focus:border-warm-gold focus:outline-none focus:ring-2 focus:ring-warm-gold/20 transition-all resize-none"
                      placeholder="Describe your legal needs..."
                    />
                  </div>

                  {statusMessage && (
                    <div className={`rounded-lg px-4 py-3 text-center text-sm ${
                      status === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
                    }`}>
                      {statusMessage}
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full">
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
