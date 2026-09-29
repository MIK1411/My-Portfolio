import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-brand-text/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-6xl md:text-8xl font-display font-light opacity-30 tracking-tighter">01</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold mt-4 tracking-tight">EDUCATION</h3>
          </motion.div>
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <h4 className="text-2xl md:text-4xl font-display font-bold mb-4 tracking-tight transition-colors group-hover:text-brand-accent">
              B.Tech — Computer Science & IT
            </h4>
            <div className="text-lg md:text-2xl font-medium text-brand-muted space-y-2">
              <p className="text-brand-text">Ajeenkya D.Y. Patil University</p>
              <p>Pune, Maharashtra</p>
              <p className="inline-block mt-4 px-4 py-2 border border-brand-text/20 rounded-full text-sm font-bold tracking-widest uppercase">1st Year</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
