'use client';

import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-green-500 text-transparent bg-clip-text">
                Connect
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-blue-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <Link
              href="mailto:max.cabd@gmail.com"
              className="relative flex items-center gap-2 px-8 py-4 bg-card rounded-lg hover:bg-card/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">max.cabd@gmail.com</span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground max-w-md"
          >
            Have an exciting opportunity or just want to say hi? 
            Drop me a line and I'll get back to you as soon as possible!
          </motion.p>
        </div>
      </div>
    </main>
  );
}