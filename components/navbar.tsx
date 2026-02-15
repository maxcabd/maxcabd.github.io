"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-warm/20"
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="group relative inline-block">
          <span className="text-2xl font-bagel text-white transition-opacity duration-300 group-hover:opacity-0">
            maxcabd
          </span>
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-2xl font-bagel bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap"
          >
            maxcabd
          </span>
        </Link>

        <div className="flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] transition-colors duration-300 ${isActive ? "text-white" : "text-warm hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}