import { motion } from 'framer-motion';

const softSkills = [
  "Communication", "Teamwork", "Leadership", "Problem Solving", 
  "Presentation", "Creativity", "Time Management", "Adaptability", "Quick Learning"
];

export default function SoftSkills() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight"
          >
            BEYOND
            <br />
            CODE.
          </motion.h2>
        </div>
        
        <div className="md:w-2/3">
          <div className="flex flex-wrap gap-4 md:gap-6">
            {softSkills.map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-lg md:text-2xl font-medium px-6 py-3 border border-brand-text/10 rounded-full hover:bg-brand-text hover:text-brand-bg transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
