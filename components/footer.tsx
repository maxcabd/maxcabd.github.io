'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/maxcabd', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/maxcabd', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@maxcabd.dev', icon: Mail },
  ],
};

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 md:gap-4">
          <div className="space-y-8">
            <div>
              <Link href="/" className="font-bagel text-2xl bg-gradient-to-r from-pink-600 via-blue-500 to-green-500 text-transparent bg-clip-text">
                maxcabd
              </Link>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Full-stack developer passionate about building beautiful, functional, and user-centered digital experiences.
              </p>
            </div>
            <nav className="flex gap-6">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-8">
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} maxcabd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}