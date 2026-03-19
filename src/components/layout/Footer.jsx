import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-surface py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-sm text-center md:text-left">
                    Conçu & développé par Khobzi Abderrahmane Amine · {currentYear}
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Kh-Abdou" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/kh-abdou" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:khobzi.abderrahmaneamine@esst-sup.com" className="text-text-muted hover:text-accent transition-colors">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
