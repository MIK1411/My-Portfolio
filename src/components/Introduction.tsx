import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[10vw] md:text-[6vw] leading-[0.9] font-display font-bold tracking-tighter"
          >
            I BUILD
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </motion.h2>
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-xl md:text-2xl leading-relaxed font-medium"
          >
            <p>
              I'm Milind Kumar, a first-year B.Tech Computer Science & IT student interested in frontend development, AI-powered applications, and software development.
            </p>
            <p className="text-brand-muted">
              I enjoy learning by building — experimenting with modern technologies, developing web applications, participating in hackathons, and turning ideas into practical digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-24 md:mt-48 h-64 md:h-96 w-full bg-brand-text flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:20px_20px]"></div>
        <div className="flex gap-4 md:gap-8 items-center z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ height: 20 }}
              whileInView={{ height: [20, Math.random() * 100 + 50, 20] }}
              transition={{ repeat: Infinity, duration: 2 + i * 0.5, ease: "easeInOut" }}
              className="w-1 md:w-2 bg-brand-bg rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
