"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-40 pb-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-garamond font-semibold leading-[1.05] tracking-[-0.02em] text-white">
          Max Abdullahi
        </h1>

        <p className="mt-6 text-[15px] font-light tracking-wide italic font-garamond text-warm">

        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-[13px] text-warm tracking-widest">
          <span>Also on</span>
          {[
            { label: "GitHub", href: "https://github.com/maxcabd" },
            { label: "LinkedIn", href: "https://linkedin.com/in/maxcabd" },
            { label: "Email", href: "mailto:max.cabd@gmail.com" },
          ].map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              {i > 0 && <span>·</span>}
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function BlogSection() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="px-6 pb-32"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-[13px] text-warm mb-6">
          Writing
        </p>

        <div className="space-y-0">
          {posts.map((post, index) => (
            <Link key={post.slug} href={post.url}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group py-3.5 border-b border-warm/10 first:pt-0 cursor-pointer
                  hover:bg-warm/[0.03] -mx-4 px-4 rounded-lg transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] text-white/85 font-normal leading-snug group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-[12px] text-warm/70">
                    {format(new Date(post.date), "MMM yyyy")}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 mt-8 text-[12px] text-warm hover:text-white transition-colors duration-300"
        >
          All posts
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.section>
  );
}