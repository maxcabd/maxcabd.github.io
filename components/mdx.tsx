"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import React from "react";

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && "props" in node) {
    return extractText((node as React.ReactElement).props.children);
  }
  return "";
}

function slugify(node: React.ReactNode): string {
  return extractText(node)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      id={slugify(children)}
      className="mt-16 mb-6 font-semibold text-[clamp(1.8rem,5vw,2.5rem)] font-normal leading-tight tracking-[-0.01em] text-white scroll-mt-24"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={slugify(children)}
      className="mt-14 mb-6 font-garamond text-[clamp(1.5rem,4vw,2rem)] font-normal leading-tight tracking-[-0.01em] text-white scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={slugify(children)}
      className="mt-10 mb-4 font-garamond text-[clamp(1.25rem,3vw,1.6rem)] font-normal leading-tight text-white scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mt-8 mb-4 font-garamond text-[1.25rem] font-normal leading-tight text-white"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="font-garamond text-[1.25rem] sm:text-[1.35rem] leading-[1.75] text-white/90 mb-7"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-5 sm:ml-6 list-disc" {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-5 sm:ml-6 list-decimal" {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="mt-2 font-garamond text-[1.2rem] sm:text-[1.25rem] leading-[1.7] text-white/90"
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 mb-6 border-l-2 border-warm/30 pl-5 sm:pl-6 font-garamond italic text-warm text-[1.2rem] sm:text-[1.3rem] leading-[1.7]"
      {...props}
    />
  ),
  a: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className="bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 bg-clip-text text-transparent underline decoration-warm/30 underline-offset-4 hover:decoration-white/60 transition-all duration-300"
      {...props}
      href={(props as any).href ?? "#"}
    >
      {children}
    </Link>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className?.includes("language-");
    if (isInline) {
      return (
        <code
          className="relative rounded bg-[#1e1e1e] border border-warm/10 px-[0.4rem] py-[0.15rem] font-mono text-[0.85em] text-white/90"
          {...props}
        />
      );
    }
    return <code className={className} {...props} />;
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-8 overflow-x-auto rounded-xl bg-[#141414] border border-warm/15 p-4 sm:p-5 text-[0.875rem] sm:text-[0.9rem] leading-relaxed -mx-2 sm:mx-0"
      {...props}
    />
  ),
  img: ({
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="mx-auto my-8 max-w-full rounded-lg"
      {...props}
      alt={props.alt ?? ""}
    />
  ),
  hr: ({ ...props }) => <hr className="my-12 border-warm/20" {...props} />,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}