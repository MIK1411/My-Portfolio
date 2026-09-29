import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  {
    num: "01",
    title: "FRONTEND DEVELOPMENT",
    desc: "Building responsive, interactive and user-focused web experiences using modern frontend technologies.",
    tech: "HTML / CSS / JavaScript / React / TypeScript / Tailwind CSS"
  },
  {
    num: "02",
    title: "AI + WEB",
    desc: "Exploring ways to combine AI tools, APIs and web technologies to create useful applications.",
    tech: "Google Gemini / ChatGPT / Claude / GitHub Copilot / AI APIs"
  },
  {
    num: "03",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Learning software development fundamentals through practical projects, experimentation and hackathons.",
    tech: "Python / JavaScript / Firebase / Express.js / Git / GitHub"
  }
];

export default function WhatIBuild() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-brand-text text-brand-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10vw] md:text-[6vw] leading-[0.9] font-display font-bold tracking-tighter mb-16 md:mb-24"
        >
          WHAT
          <br />
          I BUILD
        </motion.h2>

        <div className="flex flex-col border-t border-brand-bg/20">
          {skills.map((skill, idx) => (
            <div 
              key={skill.num}
              className="group relative border-b border-brand-bg/20 py-8 md:py-12 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10">
                <span className="text-2xl md:text-4xl font-display font-light opacity-50 transition-opacity group-hover:opacity-100">
                  {skill.num}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                  {skill.title}
                </h3>
              </div>

              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 md:pl-[88px] max-w-3xl">
                      <p className="text-lg md:text-2xl mb-6 opacity-80 leading-relaxed">
                        {skill.desc}
                      </p>
                      <div className="text-brand-accent font-medium tracking-wider text-sm md:text-base uppercase">
                        {skill.tech}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
