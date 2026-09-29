import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "CENSUS MANAGEMENT SYSTEM",
    tech: "React / TypeScript / Firebase / Express / Recharts / Google Gemini API",
    desc: "Developed a full-stack platform for digitizing household surveys and managing demographic data. The system supports structured data collection, regional management, administrative analytics and interactive visualization.",
    features: ["Household survey management", "Demographic data collection", "Regional data management", "Administrative analytics", "Interactive visualizations", "Firebase / Firestore", "Google Gemini API"],
    github: "https://github.com/MIK1411/DATA-BOOK",
    color: "bg-zinc-200"
  },
  {
    id: "02",
    title: "HACKATHON 01",
    tech: "React / TypeScript / Firebase / Express / Three.js / Tailwind CSS / Recharts",
    desc: "Built a hackathon prototype that transformed a problem statement into an interactive web application.",
    features: ["Responsive interface", "Authentication", "Routing", "Data visualization", "Interactive 3D elements", "Firebase integration", "React architecture"],
    github: "https://github.com/MIK1411/HACKATHON-1",
    live: "#",
    color: "bg-zinc-300"
  },
  {
    id: "03",
    title: "LUXE STUDIO",
    tech: "React / TypeScript / Tailwind CSS / Vite / Motion / Lucide React",
    desc: "Created a responsive luxury salon platform featuring service discovery, stylist selection, appointment booking and digital experiences.",
    features: ["Service catalogue", "Stylist selection", "Appointment workflow", "Digital gift vouchers", "Before/after comparison", "Responsive layouts", "Animated interactions", "Reusable components"],
    github: "https://github.com/MIK1411/luxes",
    color: "bg-zinc-200"
  }
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10vw] md:text-[6vw] leading-[0.9] font-display font-bold tracking-tighter mb-24"
        >
          SELECTED
          <br />
          PROJECTS
        </motion.h2>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer flex flex-col md:flex-row gap-8 md:gap-16 items-center"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`w-full md:w-3/5 aspect-[4/3] ${project.color} overflow-hidden relative rounded-sm flex items-center justify-center`}>
                {/* Abstract placeholder for project image */}
                <motion.div 
                  className="absolute inset-0 bg-brand-text/5 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="text-brand-text/20 font-display font-bold text-6xl group-hover:scale-110 transition-transform duration-700">
                  {project.title.split(' ')[0]}
                </div>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col">
                <span className="text-5xl md:text-7xl font-display font-light opacity-30 tracking-tighter mb-4 transition-colors group-hover:text-brand-accent group-hover:opacity-100">
                  {project.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                
                <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 mb-6">
                  <p className="text-brand-muted text-lg leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mt-auto font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  VIEW PROJECT <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-brand-bg/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:w-[600px] bg-brand-text text-brand-bg h-full overflow-y-auto shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-bg/10 hover:bg-brand-bg/20 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 pt-24">
                <span className="text-6xl font-display font-light opacity-30 mb-4 block">
                  {selectedProject.id}
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
                  {selectedProject.title}
                </h3>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4">Overview</h4>
                    <p className="text-xl leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4">Technologies</h4>
                    <p className="text-lg text-brand-accent">
                      {selectedProject.tech}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase opacity-50 mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.features.map(f => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="text-brand-accent mt-1">▹</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-brand-bg/20">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-4 bg-brand-bg text-brand-text font-medium text-center hover:bg-brand-accent hover:text-brand-bg transition-colors flex items-center justify-center gap-2"
                    >
                      GITHUB REPOSITORY <ArrowUpRight size={18} />
                    </a>
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-4 border border-brand-bg/30 text-center hover:bg-brand-bg hover:text-brand-text transition-colors flex items-center justify-center gap-2"
                      >
                        VIEW LIVE PROJECT <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
