"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { allPosts, allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import { CardItem } from "@/components/card-item";
import Image from "next/image";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-5xl font-extrabold tracking-tight">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-pink-600 via-blue-600 to-green-500 text-transparent bg-clip-text">
          Mohamed
        </span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Full-stack developer passionate about building beautiful, functional,
        and user-centered digital experiences.
      </p>

      <div className="flex gap-4 pt-4">
        {[
          { icon: Github, href: "https://github.com/maxcabd", label: "GitHub" },
          {
            icon: Linkedin,
            href: "https://linkedin.com/in/maxcabd",
            label: "LinkedIn",
          },
          { icon: Mail, href: "mailto:contact@maxcabd.dev", label: "Email" },
        ].map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export function BlogSection() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="sticky top-24"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <Link
          href="/blog"
          className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          View all
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <CardItem
            key={post.slug}
            title={post.title}
            date={formatDate(post.date)}
            tags={post.tags}
            href={post.url}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const projects = allProjects
    .filter((project) => project.featured)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <Link
          href="/projects"
          className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          View all
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group relative h-48 rounded-lg overflow-hidden bg-secondary/50"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 p-4 flex flex-col justify-end">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.youtube && (
                    <Link
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm text-white/70 mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
