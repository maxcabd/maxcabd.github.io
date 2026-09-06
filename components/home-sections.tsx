"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, format } from "date-fns";

const bioLink =
  "text-white/90 underline decoration-warm/40 underline-offset-2 hover:text-white hover:decoration-white/60 transition-colors duration-300";

export function HeroSection() {
  const lastUpdated = allPosts
    .filter((post) => post.published && new Date(post.date) <= new Date())
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))[0];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-28 pb-16 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="font-ginto text-[15px] font-normal text-white">
          Max Abdullahi
        </h1>

        {lastUpdated && (
          <p className="mt-1 text-[13px] text-warm/70">
            Updated {format(new Date(lastUpdated.date), "MMM d, yyyy")}
          </p>
        )}

        <div className="mt-8 space-y-5 max-w-xl font-ginto text-[15px] leading-relaxed text-white/80">
          <p>
            I&apos;m a computer science student, currently working at Taffi as
            a software engineer.
          </p>

          <p>
            I founded{" "}
            <Link href="/projects" className={bioLink}>
              Taffi
            </Link>
            , a consumer fintech app that lets people send money to each
            other across borders for free. I&apos;ve also interned at the CRA
            and the CNSC.
          </p>

          <p>
            I enjoy building and maintaining open source tools, such as{" "}
            <Link
              href="https://github.com/maxcabd/ap2-rs"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              ap2-rs
            </Link>
            ,{" "}
            <Link
              href="https://github.com/maxcabd/defi-savings"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              defi-savings
            </Link>
            ,{" "}
            <Link
              href="https://github.com/maxcabd/debin"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              debin
            </Link>
            , and{" "}
            <Link
              href="https://github.com/maxcabd/nuccbin"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              nuccbin
            </Link>
            .
          </p>

          <p>
            You can find me on{" "}
            <Link
              href="https://github.com/maxcabd"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              GitHub
            </Link>{" "}
            and{" "}
            <Link
              href="https://linkedin.com/in/maxcabd"
              target="_blank"
              rel="noopener noreferrer"
              className={bioLink}
            >
              LinkedIn
            </Link>
            , or reach me at{" "}
            <Link href="mailto:max.cabd@gmail.com" className={bioLink}>
              max.cabd@gmail.com
            </Link>
            .
          </p>
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
      <div className="max-w-2xl mx-auto">
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
                  <h3 className="font-ginto text-[15px] text-white/85 font-normal leading-snug group-hover:text-white transition-colors duration-300">
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