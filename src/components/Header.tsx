"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 mt-4"
    >
      <div className="max-w-5xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center text-sm sm:text-base font-medium">
        <Link href="/" className="text-xl font-bold tracking-wider">
          RAFY.
        </Link>
        <nav className="hidden md:flex justify-center gap-8">
          <Link href="#hero" className="hover:text-green-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-green-400 transition-colors">About</Link>
          <Link href="#services" className="hover:text-green-400 transition-colors">Services</Link>
          <Link href="#works" className="hover:text-green-400 transition-colors">Portfolio</Link>
          <Link href="#faq" className="hover:text-green-400 transition-colors">FAQ</Link>
          <Link href="#contact" className="hover:text-green-400 transition-colors">Contact</Link>
        </nav>
        <Link 
          href="#contact" 
          className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(22,163,74,0.5)]"
        >
          Hire Me
        </Link>
      </div>
    </motion.header>
  );
}
