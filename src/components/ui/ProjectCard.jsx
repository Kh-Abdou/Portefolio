import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index, isEven }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"]
    });

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: scrollYProgress,
                y: useTransform(scrollYProgress, [0, 1], [50, 0])
            }}
            className="w-full bg-surface/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 group relative hover:border-accent/40 transition-all duration-500 shadow-xl overflow-hidden"
        >
            {/* Background Watermark Number */}
            <div className="absolute top-10 right-10 font-serif text-[120px] font-bold text-accent/5 select-none pointer-events-none z-0 tracking-tighter mix-blend-screen text-glow leading-none">
                {project.id}
            </div>

            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-accent/80 font-medium">Project {project.id}</span>
                            {project.badge && (
                                <span className="text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full font-bold border border-accent/20">
                                    {project.badge}
                                </span>
                            )}
                        </div>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-primary tracking-tight">
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border text-text-muted hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
                                title="View on GitHub"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-background border border-border text-text-muted hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
                                title="Visit Live Site"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-text-muted leading-relaxed text-lg md:text-xl max-w-4xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                    {project.stack.map(tech => (
                        <span
                            key={tech}
                            className="px-4 py-1.5 bg-background/50 border border-border/50 text-sm text-text-primary rounded-full font-medium backdrop-blur-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
