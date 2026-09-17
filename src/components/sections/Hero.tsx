"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-green-400 mb-2 font-medium tracking-wide uppercase">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Rafy Mahmud
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Video Editor & Motion Designer
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#works" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="glass px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent z-10 pointer-events-none"></div>
            <Image 
              src="/portrait.jpg" 
              alt="Rafy Mahmud" 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-4 right-0 md:-right-4 bg-gradient-to-br from-green-950 to-green-900/90 border border-green-500/30 px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20"
          >
            <p className="text-white font-bold text-sm md:text-base leading-tight">
              2+ Years Of<br />Experience!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
