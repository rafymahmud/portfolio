"use client";

import { motion } from "framer-motion";
import { PlaySquare, MonitorPlay, Film, Presentation } from "lucide-react";

const services = [
  {
    icon: <PlaySquare className="w-10 h-10 text-green-400" />,
    title: "Dynamic Promo",
    description: "High-energy, fast-paced promotional videos that grab attention and drive action. Perfect for social media and product launches."
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-green-400" />,
    title: "Logo Animation",
    description: "Bring your brand to life with sleek, custom 2D/3D logo animations that leave a lasting impression on your audience."
  },
  {
    icon: <Film className="w-10 h-10 text-green-400" />,
    title: "Commercial Ads",
    description: "Professional grade commercials optimized for various platforms to elevate your brand's presence and increase conversions."
  },
  {
    icon: <Presentation className="w-10 h-10 text-green-400" />,
    title: "Talking Head",
    description: "Clean, crisp editing for interviews, podcasts, and corporate messages with color grading, audio enhancement, and lower thirds."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-green-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in high-retention editing and dynamic motion graphics designed to keep viewers engaged from the first frame to the last.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
