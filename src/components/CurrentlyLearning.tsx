import { motion } from 'framer-motion';

const exploring = [
  "Advanced Frontend Development",
  "React",
  "TypeScript",
  "AI-powered web applications",
  "Modern UI/UX",
  "Software Development",
  "Hackathon Projects"
];

export default function CurrentlyLearning() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-text text-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-bold tracking-tight"
          >
            CURRENTLY
            <br />
            EXPLORING
          </motion.h2>
        </div>
        
        <div className="md:w-2/3">
          <ul className="space-y-6">
            {exploring.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-xl md:text-3xl font-medium opacity-80 hover:opacity-100 hover:text-brand-accent transition-all hover:translate-x-2"
              >
                — {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
