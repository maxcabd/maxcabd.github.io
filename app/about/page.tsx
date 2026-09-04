"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Link from "next/link";


/* ── Work Experience Data ── */
const experience = [
  {
    company: "Taffi",
    role: "Founder & Software Engineer",
    description: "Built the cross-border peer-to-peer stablecoin payments app for iOS and Android.",
    year: "Present",
  },
  {
    company: "Canada Revenue Agency",
    role: "Software Engineer Intern",
    description: "Worked on the WET4 framework to modernize tax reconciliation tooling.",
    year: "2024",
  },
  {
    company: "Canadian Nuclear Safety Commission",
    role: "Software Engineer Intern",
    description: "Created the React app for offline compliance checks for regulatory inspectors.",
    year: "2022",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-28 pb-32">

        {/* ── Resume ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left mb-10"
        >
          <Link
            href="/resume-pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-warm hover:text-white transition-colors duration-300 underline underline-offset-4"
          >
            View Resume (PDF)
          </Link>
        </motion.div>

        {/* ── Work Experience ── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center sm:text-left text-[clamp(1.5rem,3vw,1.8rem)] font-garamond font-normal text-white mb-2">
            Work Experience
          </h2>
          <p className="text-center sm:text-left text-[14px] text-warm mb-10">
            Selected roles and projects.
          </p>

          <div>
            {experience.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr] sm:grid-cols-[160px_1fr_auto] gap-1 sm:gap-6 py-6 border-b border-warm/15 items-baseline text-center sm:text-left"
              >
                {/* Company */}
                <span className="text-[15px] font-medium text-white">
                  {item.company}
                </span>

                {/* Role + Description */}
                <div>
                  <span className="text-[15px] text-white/90">
                    {item.role}
                  </span>
                  {item.description && (
                    <p className="text-[13px] text-warm mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Year */}
                <span className="text-[14px] text-warm tabular-nums">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
