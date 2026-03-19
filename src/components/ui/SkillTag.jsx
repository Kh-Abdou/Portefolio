import { motion } from 'framer-motion';

export default function SkillTag({ tech }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#1E1E2E] border border-accent/30 text-text-primary text-sm font-medium rounded-full cursor-default transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
        >
            {tech}
        </motion.div>
    );
}
