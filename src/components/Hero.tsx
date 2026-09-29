import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 relative overflow-hidden">
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col justify-between h-full flex-grow pb-12">
        <div className="mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] font-display font-extrabold tracking-tighter">
              MILIND
              <br />
              KUMAR
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end gap-8 justify-between"
          >
            <div className="max-w-xl">
              <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                FRONTEND DEVELOPER / AI ENTHUSIAST
              </h2>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                Building digital experiences, exploring AI-powered applications, and turning ideas into functional products.
              </p>
            </div>
            
            <div className="text-sm font-medium tracking-widest uppercase opacity-70">
              KANPUR, INDIA / CURRENTLY IN PUNE
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 group text-lg font-medium tracking-wide"
          >
            EXPLORE PROJECTS
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Subtle abstract visual */}
      <div className="absolute right-0 top-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] opacity-5 pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
