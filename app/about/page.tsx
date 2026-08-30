"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";


/* ── Work Experience Data ── */
const experience = [
  {
    company: "Taffi",
    role: "Founder & Software Engineer",
    description: "Built a cross-border payments mobile app from 0-to-1 using React Native, TypeScript, Expo, FastAPI, PostgreSQL, and Redis, owning the mobile experience, backend APIs, and transaction workflows.",
    year: "Jan 2026 - Present",
  },
  {
    company: "Canada Revenue Agency",
    role: "Software Engineer Intern",
    description: "Optimized PostgreSQL queries reducing latency by 30% across production tax reconciliation systems, and built backend services supporting audit and compliance workflows used by thousands of CRA employees.",
    year: "Aug 2024 - Dec 2024",
  },
  {
    company: "Canadian Nuclear Safety Commission",
    role: "Software Engineer Intern",
    description: "Built a local-first React application for regulatory inspectors, implementing offline workflows, structured data collection, and reusable components across regulatory inspection workflows.",
    year: "Sep 2021 - Jan 2022",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-28 pb-32">

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
