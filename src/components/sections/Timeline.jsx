import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline';

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 w-full relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
                        Parcours
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-border transform -translate-x-1/2 hidden md:block"
                    />
                    {/* Mobile Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-border md:hidden"
                    />

                    <div className="flex flex-col gap-10">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    } flex-row`}
                            >
                                {/* Node Center */}
                                <div className="absolute left-[20px] md:left-1/2 md:transform md:-translate-x-1/2 w-[12px] h-[12px] rounded-full bg-background border-2 border-accent z-10 box-content shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                                {/* Empty Container for responsive alternating */}
                                <div className="w-1/2 hidden md:block"></div>

                                {/* Content */}
                                <div className={`w-full md:w-5/12 ml-[50px] md:ml-0 bg-surface p-6 rounded-xl border border-border shadow-md transition-colors hover:border-accent/40 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <span className={`text-sm font-mono font-medium ${item.active ? 'text-accent' : 'text-text-muted'}`}>
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-medium text-text-primary mt-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
