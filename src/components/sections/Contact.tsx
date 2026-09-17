"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's <span className="text-green-400">Work Together</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
            Ready to take your content to the next level? Get in touch through any of the platforms below to discuss your next project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.instagram.com/editbyrafy/" target="_blank" rel="noopener noreferrer" className="glass px-8 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-2 hover:bg-white/10 transition-all group">
              <svg className="w-6 h-6 fill-green-700 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="font-medium text-white">Instagram</span>
            </a>
            
            <a href="https://discord.com/users/1549766566944444507" target="_blank" rel="noopener noreferrer" className="glass px-8 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-2 hover:bg-white/10 transition-all group">
              <svg className="w-6 h-6 fill-green-700 group-hover:scale-110 transition-transform" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
                <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.08 0A72.37 72.37 0 0045.67 0 105.89 105.89 0 0019.44 8.07C2.79 33 -1.69 57.2.54 81.16a105.73 105.73 0 0032.17 16.15 77.7 77.7 0 006.89-11.1 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.68 2a67.75 67.75 0 01-10.88 5.18 77 77 0 006.89 11.1 105.25 105.25 0 0032.22-16.15c2.59-27.42-3.8-51.13-18.49-73.09zM42.49 65.16c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.84 9.71-10.84c5.45 0 9.79 4.89 9.71 10.84 0 5.98-4.26 10.84-9.71 10.84zm42.16 0c-5.32 0-9.71-4.86-9.71-10.84s4.3-10.84 9.71-10.84c5.45 0 9.79 4.89 9.71 10.84 0 5.98-4.26 10.84-9.71 10.84z"/>
              </svg>
              <span className="font-medium text-white">Discord</span>
            </a>
            
            <a href="https://wa.me/8801710138187" target="_blank" rel="noopener noreferrer" className="glass px-8 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-2 hover:bg-white/10 transition-all group">
              <svg className="w-6 h-6 fill-green-700 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="font-medium text-white">WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
