import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'Projets', href: '#projects' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'backdrop-blur-md bg-[#080810]/80 border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-serif text-3xl font-bold text-accent tracking-wider hover:text-accent-light transition-colors"
                >
                    KA
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-primary hover:text-accent transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://github.com/Kh-Abdou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors text-sm font-medium tracking-wide group"
                    >
                        GitHub
                        <span className="transform transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-text-primary p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-surface border-b border-border overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-text-primary text-lg font-medium hover:text-accent"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://github.com/Kh-Abdou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-primary text-lg font-medium hover:text-accent"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
