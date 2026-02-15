"use client";

import Link from "next/link";

const navigation = [
  { name: "Writing", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="px-6 pb-16">
      <div className="max-w-3xl mx-auto border-t border-warm/20 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] text-warm hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}