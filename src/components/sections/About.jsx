import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 w-full relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left Column - Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full md:w-5/12 flex flex-col gap-8"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-light rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-full h-full bg-surface border border-border overflow-hidden rounded-sm">
                                <img
                                    src="/profile.jpg"
                                    alt="Khobzi Abderrahmane Amine"
                                    className="w-full h-full object-cover relative z-10"
                                    onError={(e) => {
                                        e.target.style.opacity = '0';
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted z-0">
                                    <span className="text-4xl font-serif opacity-20 italic">KA</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-center max-w-sm mx-auto w-full">
                            <div className="flex flex-col items-center p-4 bg-surface/50 border border-border rounded-xl">
                                <span className="text-4xl font-serif font-bold text-accent">M1</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider mt-2 group leading-tight">Big Data<br />ESST Alger</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-surface/50 border border-border rounded-xl">
                                <span className="text-4xl font-serif font-bold text-accent">Full</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider mt-2 group leading-tight">Stack &<br />Mobile</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-7/12 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-8">
                            À propos
                        </h2>

                        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                            <p>
                                Passionné par le développement logiciel et l'architecture des systèmes, j'évolue actuellement en <span className="text-text-primary font-medium">Master 1 Big Data</span> à l'ESST Alger. Mon parcours est guidé par une curiosité insatiable pour les technologies émergentes et un engagement constant vers l'excellence technique.
                            </p>
                            <p>
                                Spécialisé dans l'écosystème <span className="text-text-primary font-medium">Full-Stack (React, Node.js)</span> et le <span className="text-text-primary font-medium">développement Mobile</span>, j'aime concevoir des solutions élégantes à des problèmes complexes. Mon approche combine rigueur analytique et créativité visuelle.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-medium">Localisation</h4>
                                    <p className="text-text-muted text-sm">Alger, Algérie</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-medium">Formation</h4>
                                    <p className="text-text-muted text-sm">ESST - Master Big Data</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 md:col-span-2">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-medium">Email</h4>
                                    <p className="text-text-muted text-sm">contact@amina.dev</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
