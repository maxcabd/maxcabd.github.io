"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="font-bagel text-2xl bg-gradient-to-r from-pink-600 via-blue-500 to-green-500 text-transparent bg-clip-text">
                maxcabd
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4"
          >
            <div
              className={`nav-link home ${pathname === "/" ? "active" : ""}`}
            >
              <button type="button" className="text-[14px] text-center w-24 h-9 px-4 py-2 font-bold">
                <Link href="/">Home</Link>
              </button>
            </div>
            <div
              className={`nav-link projects ${pathname === "/projects" ? "active" : ""}`}
            >
              <button type="button" className="text-[14px] text-center w-24 h-9 px-4 py-2 font-bold">
                <Link href="/projects">Projects</Link>
              </button>
            </div>
            <div
              className={`nav-link blog ${pathname.startsWith("/blog") ? "active" : ""}`}
            >
              <button type="button" className="text-[14px] text-center w-24 h-9 px-4 py-2 font-bold">
                <Link href="/blog">Blog</Link>
              </button>
            </div>
            <div
              className={`nav-link contact ${pathname === "/contact" ? "active" : ""}`}
            >
              <button type="button" className="text-[14px] text-center w-24 h-9 px-4 py-2 font-bold">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/resume-pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-blue-500 to-green-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
