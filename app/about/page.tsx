"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";


/* ── Work Experience Data (add more entries here) ── */
const experience = [
  {
    company: "Railo",
    role: "Founding Engineer",
    description: "Building SDKs to power platform payouts using the benefits of stablecoin rails.",
    year: "2026-Present",
  },
  {
    company: "Blinked",
    role: "Founding Engineer",
    description: "Built the end-to-end platform in React Native as well as the backend in FastAPI making it seemless to sell expirable digital assets.",
    year: "2025-Present",
  },
  {
    company: "Canada Revenue Agency",
    role: "Frontend Engineer",
    description: "React · WET4 · PostgreSQL",
    year: "2024",
  },

];

/* ── Social Links ── */
const socials = [
  { icon: Mail, href: "mailto:max.cabd@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/maxcabd", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/maxcabd", label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-28 pb-32">
        {/* ── Hero: Photo + Bio ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-8 sm:gap-10"
        >
          {/* Photo */}
          <div className="w-36 h-44 sm:w-44 sm:h-52 relative rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/images/me.jpg"
              alt="Max"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-garamond font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Max Abdullahi
            </h1>
            <p className="mt-3 text-[15px] sm:text-[16px] text-warm leading-relaxed max-w-md">
              Building frictionless global payment systems at scale. Let's connect.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center justify-center sm:justify-start gap-5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-warm hover:text-white transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <hr className="border-warm/15 my-16" />

        {/* ── Work Experience ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
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