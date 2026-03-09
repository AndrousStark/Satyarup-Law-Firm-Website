"use client";

import { useState, useEffect, useCallback } from "react";

export default function Disclaimer() {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("disclaimer-accepted");
    setAccepted(stored === "true");
  }, []);

  const handleProceed = useCallback(() => {
    if (!checked) return;
    sessionStorage.setItem("disclaimer-accepted", "true");
    setAccepted(true);
  }, [checked]);

  // Still loading from sessionStorage
  if (accepted === null) return null;
  // Already accepted this session
  if (accepted) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-light-gold/40">
          <h2 className="text-warm-gold font-display text-xl font-semibold tracking-wide">
            Disclaimer
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-charcoal text-sm leading-relaxed space-y-4">
          <p>
            The Bar Council of India does not permit advertisement or solicitation
            by advocates in any form or manner. By accessing this website,{" "}
            <span className="font-medium">www.satyaruplaw.com</span>, you
            acknowledge and confirm that you are seeking information relating to
            Satyarup Law Firm of your own accord and that there has been no form
            of solicitation, advertisement or inducement by Satyarup Law Firm or
            its members.
          </p>
          <p>
            The content of this website is for informational purposes only and
            should not be interpreted as soliciting or advertisement. No
            material/information provided on this website should be construed as
            legal advice. Satyarup Law Firm shall not be liable for consequences
            of any action taken by relying on the material/information provided on
            this website.
          </p>
          <p>
            The contents of this website are the intellectual property of Satyarup
            Law Firm.
          </p>
        </div>

        {/* Checkbox + Button */}
        <div className="px-6 pb-6 pt-2 space-y-4">
          <label className="flex items-center gap-3 cursor-pointer select-none group">
            <div className="relative flex-shrink-0">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded border-2 border-warm-gray/40 peer-checked:border-warm-gold peer-checked:bg-warm-gold transition-all duration-200 flex items-center justify-center">
                {checked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-charcoal">
              I accept the above.
            </span>
          </label>

          <button
            onClick={handleProceed}
            disabled={!checked}
            className={`
              px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide uppercase transition-all duration-300
              ${
                checked
                  ? "bg-warm-gold text-white hover:bg-warm-gold/90 shadow-md hover:shadow-lg cursor-pointer"
                  : "bg-warm-gray/20 text-warm-gray/60 cursor-not-allowed"
              }
            `}
          >
            Proceed to Website
          </button>
        </div>
      </div>
    </div>
  );
}
