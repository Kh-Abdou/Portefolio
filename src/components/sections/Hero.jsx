import { motion } from 'framer-motion';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="home" className="relative min-h-[calc(100vh-80px)] w-full flex items-center pt-10 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">

                {/* Left Content */}
                <motion.div
                    className="w-full md:w-[60%] flex flex-col items-start justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-xl text-text-primary mb-4 font-medium">
                        Bonjour, je suis
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-serif font-bold text-text-primary leading-tight tracking-tight mb-2"
                    >
                        KHOBZI<br className="hidden md:block" /> ABDERRAHMANE AMINE
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-accent font-medium mb-6">
                        Développeur Full-Stack & Mobile
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg text-text-muted mb-10 tracking-wide font-light">
                        IA · Interfaces Premium · Algérie
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-accent text-white font-medium rounded-sm border-none cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-1 block"
                        >
                            Voir mes projets
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-accent text-accent font-medium rounded-sm cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 block"
                        >
                            Me contacter
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content - Grid Pattern Background */}
                <div className="absolute inset-0 hero-grid pointer-events-none z-[-1]" />

            </div>

            {/* Hero Footer Indications */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-text-muted select-none"
            >
                <span className="tracking-wider">Disponible pour missions freelance · Alger, Algérie</span>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[30px] h-[50px] border-2 border-text-muted/50 rounded-full flex justify-center p-2 hidden md:flex"
                >
                    <div className="w-1 h-3 bg-accent rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
