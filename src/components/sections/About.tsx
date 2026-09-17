"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 flex justify-center">
      <div className="max-w-3xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-6 text-white">
            <span className="text-green-400">About</span> Me
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-lg relative z-10 font-light">
            I am a video editor and motion designer with over two years of experience. My post-production workflow prioritizes hyper-retention pacing, precise sound design, kinetic motion graphics, and seamless transitions to maximize viewer engagement. For the past year, I have led video production for the Notre Dame Information Technology Club (NDITC), where I won the video editing championship at the NDITC Pixel Contest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
