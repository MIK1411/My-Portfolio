import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

export default function OpenSource() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/MIK1411/repos?sort=updated&per_page=4')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 md:py-48 px-6 md:px-12 border-t border-brand-text/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[10vw] md:text-[8vw] leading-[0.9] font-display font-bold tracking-tighter"
          >
            OPEN
            <br />
            SOURCE.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-xl md:text-2xl text-brand-muted mb-8 max-w-md leading-relaxed">
              Explore the code, experiments and projects behind my work.
            </p>
            
            <a 
              href="https://github.com/MIK1411" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 group text-lg font-medium tracking-wide border-b border-brand-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
            >
              VISIT GITHUB
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
        
        <div className="md:w-1/2">
          {!loading && repos.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col border-t border-brand-text/10"
            >
              {repos.map(repo => (
                <a 
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-6 border-b border-brand-text/10 group block"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl md:text-2xl font-bold font-display tracking-tight group-hover:text-brand-accent transition-colors">
                      {repo.name}
                    </h4>
                    {repo.language && (
                      <span className="text-xs font-bold tracking-widest uppercase text-brand-muted group-hover:text-brand-accent/70 transition-colors">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  {repo.description && (
                    <p className="text-brand-muted line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
