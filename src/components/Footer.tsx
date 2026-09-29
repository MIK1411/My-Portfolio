export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-brand-text text-brand-bg font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col gap-2">
          <span className="font-display font-bold text-2xl tracking-tight">MILIND KUMAR</span>
          <span className="opacity-70">Frontend Developer / AI Enthusiast</span>
          <span className="opacity-70">Kanpur, India</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="flex flex-col gap-3">
            <a href="#about" className="hover:text-brand-accent transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-brand-accent transition-colors">PROJECTS</a>
            <a href="#process" className="hover:text-brand-accent transition-colors">PROCESS</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">CONTACT</a>
          </div>
          
          <div className="flex flex-col gap-3">
            <a href="https://github.com/MIK1411" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/milind-kumar-64817036b/" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">LinkedIn</a>
            <a href="mailto:kumarmilind822@gmail.com" className="hover:text-brand-accent transition-colors">Email</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-brand-bg/20 flex flex-col sm:flex-row justify-between items-center opacity-50 text-sm">
        <span>© 2026 Milind Kumar</span>
        <span>Built with React, Vite & Tailwind CSS</span>
      </div>
    </footer>
  );
}
