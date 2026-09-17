"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround depends directly on the project's scale and duration. Standard short-form edits typically take 5–6 business days, while complex motion design and VFX-heavy edits require approximately 2 weeks."
  },
  {
    question: "How many revision rounds are included?",
    answer: "Every project includes 2 structured rounds of revisions to fine-tune pacing, color grading, sound design, and motion timing."
  },
  {
    question: "How does pricing work?",
    answer: "Rates are calculated per project based strictly on visual complexity, asset density, and post-production requirements rather than flat figures."
  },
  {
    question: "How do we transfer raw footage and assets?",
    answer: "All raw footage, audio files, and brand assets are organized and shared via dedicated Google Drive project folders."
  },
  {
    question: "What software and pipeline do you use?",
    answer: "The primary workflow relies on Adobe Premiere Pro for assembly and pacing, combined with Adobe After Effects for advanced motion graphics and compositing."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about my process and workflow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass overflow-hidden rounded-2xl transition-colors duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-green-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
