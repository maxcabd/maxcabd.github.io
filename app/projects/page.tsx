"use client";

import { Navbar } from "@/components/navbar";
import { Github, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold mb-16">Projects</h1>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.slug}>
              <div
                className={`grid grid-cols-1 ${project.image ? "md:grid-cols-[1fr,300px]" : ""} gap-6 items-start`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {project.youtube && (
                        <Link
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Youtube className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  {project.stats && (
                    <p className="text-xs text-muted-foreground">
                      {project.stats}
                    </p>
                  )}
                </div>
                {project.image && (
                  <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-secondary/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority={index === 0}
                    />
                  </div>
                )}
              </div>
              {index < projects.length - 1 && (
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
