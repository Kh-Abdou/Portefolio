import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="py-24 w-full relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-24 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
                        Projets Sélectionnés
                    </h2>
                    <p className="text-accent font-medium tracking-widest uppercase text-sm">
                        5 réalisations · Production-ready
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isEven={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
