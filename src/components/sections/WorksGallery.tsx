"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Work = {
  id: string;
  title: string;
  category: string;
  video_url: string;
};

const categories = ["All", "Commercial Ads", "Dynamic Promo", "Talking Head", "Logo Animation"];

export default function WorksGallery({ initialWorks }: { initialWorks: Work[] }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredWorks = activeTab === "All" 
    ? initialWorks 
    : initialWorks.filter(work => work.category === activeTab);

  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    // Google Drive
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^\/]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

    // Fallback for raw video files
    return url;
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === cat 
                ? "bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                : "glass text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className={`grid grid-cols-1 ${filteredWorks.length === 1 ? 'max-w-4xl mx-auto' : 'md:grid-cols-2'} gap-8`}
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => {
            const embedUrl = getEmbedUrl(work.video_url);
            const isIframe = embedUrl && (embedUrl.includes('youtube.com') || embedUrl.includes('vimeo.com') || embedUrl.includes('drive.google.com'));

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={work.id}
                className="glass-panel overflow-hidden group aspect-video relative flex items-center justify-center bg-black/50"
              >
                {isIframe ? (
                  <iframe 
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : embedUrl ? (
                  <video 
                    src={embedUrl} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    muted 
                    loop 
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <div className="text-gray-500">Video Placeholder</div>
                )}
                
                {/* Hide overlay if it's an iframe so users can click the play button */}
                {!isIframe && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{work.title}</h4>
                    <p className="text-green-400 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.category}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {filteredWorks.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500 glass-panel">
            No works found in this category yet.
          </div>
        )}
      </motion.div>
    </div>
  );
}
