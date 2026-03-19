import { motion } from 'framer-motion';

export default function LoadingScreen() {
    const containerVariants = {
        hidden: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            exit="exit"
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-serif text-[80px] font-bold text-accent tracking-widest flex"
            >
                <motion.span variants={letterVariants}>K</motion.span>
                <motion.span variants={letterVariants}>A</motion.span>
            </motion.div>
        </motion.div>
    );
}
