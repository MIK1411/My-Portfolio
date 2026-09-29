import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "PROGRAMMING",
    skills: ["Python"]
  },
  {
    name: "BACKEND",
    skills: ["Firebase", "Firestore", "Express.js"]
  },
  {
    name: "TOOLS",
    skills: ["Git", "GitHub", "VS Code", "Vite", "MS Excel"]
  },
  {
    name: "AI",
    skills: ["ChatGPT", "Google Gemini", "Claude", "GitHub Copilot"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-brand-text text-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10vw] md:text-[8vw] leading-[0.9] font-display font-bold tracking-tighter mb-24 md:mb-32"
        >
          TOOLS
          <br />
          I WORK
          <br />
          WITH
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-8 border-b border-brand-bg/20 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map(skill => (
                  <div 
                    key={skill}
                    className="text-2xl md:text-4xl font-display font-bold tracking-tight hover:text-brand-accent transition-colors hover:translate-x-2 duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
