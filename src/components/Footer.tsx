"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky bottom-4 z-40 p-4 mt-12"
    >
      <div className="max-w-2xl mx-auto glass rounded-full px-6 py-4 flex justify-center gap-8 text-sm">
        <Link href="#hero" className="hover:text-green-400 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-green-400 transition-colors">About</Link>
        <Link href="#services" className="hover:text-green-400 transition-colors">Services</Link>
        <Link href="#works" className="hover:text-green-400 transition-colors">Portfolio</Link>
        <Link href="#contact" className="hover:text-green-400 transition-colors">Contact</Link>
      </div>
    </motion.footer>
  );
}
