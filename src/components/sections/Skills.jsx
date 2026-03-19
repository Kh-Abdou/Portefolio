import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SkillTag from '../ui/SkillTag';

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="skills" className="py-24 w-full relative">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary text-center">
                        Stack & Compétences
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((categoryGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface rounded-xl p-8 border border-border flex flex-col items-center text-center shadow-xl hover:border-accent/30 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-serif font-medium text-text-primary mb-6">
                                {categoryGroup.category}
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap items-center justify-center gap-3"
                            >
                                {categoryGroup.technologies.map((tech, i) => (
                                    <motion.div key={i} variants={itemVariants}>
                                        <SkillTag tech={tech} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
