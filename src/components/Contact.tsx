import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] md:text-[8vw] leading-[0.85] font-display font-bold tracking-tighter mb-8"
        >
          LET'S
          <br />
          BUILD
          <br />
          SOMETHING.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Have an idea, project, collaboration or opportunity? Let's connect.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg md:text-xl font-medium mb-16"
        >
          <a href="mailto:kumarmilind822@gmail.com" className="hover:text-brand-accent transition-colors">
            kumarmilind822@gmail.com
          </a>
          <span>7068019945</span>
          <span className="opacity-60">Kanpur, Uttar Pradesh, India</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl mx-auto"
        >
          <a 
            href="mailto:kumarmilind822@gmail.com"
            className="flex-1 py-6 bg-brand-text text-brand-bg text-center font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 group"
          >
            EMAIL ME <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="https://www.linkedin.com/in/milind-kumar-64817036b/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-6 border border-brand-text/20 text-center font-bold tracking-widest uppercase hover:bg-brand-text hover:text-brand-bg transition-colors flex items-center justify-center gap-2 group"
          >
            LINKEDIN <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="https://github.com/MIK1411"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-6 border border-brand-text/20 text-center font-bold tracking-widest uppercase hover:bg-brand-text hover:text-brand-bg transition-colors flex items-center justify-center gap-2 group"
          >
            GITHUB <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
