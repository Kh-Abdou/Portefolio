import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Replace these with actual EmailJS credentials
        // You'll need to sign up for EmailJS and define: Service ID, Template ID, Public Key
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(() => {
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                setStatus('error');
                setErrorMessage(error.text || "Une erreur est survenue.");
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 w-full relative border-t border-border bg-surface/30">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row gap-16">

                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-5/12 flex flex-col"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-2">
                            Vous avez un projet ?
                        </h2>
                        <p className="text-2xl text-text-muted font-light mb-10">
                            Discutons-en.
                        </p>

                        <p className="text-text-primary mb-8 text-lg font-medium">
                            Quel que soit le défi technique ou la vision créative, je serais ravi d'en savoir plus. Réponse assurée sous 24h.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:khobzi.abderrahmaneamine@esst-sup.com" className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-surface group-hover:border-accent">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg font-medium">Email Direct</span>
                            </a>

                            <a href="https://wa.me/213792402847" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-surface group-hover:border-accent">
                                    <MessageCircle size={20} />
                                </div>
                                <span className="text-lg font-medium">WhatsApp</span>
                            </a>

                            <a href="https://github.com/Kh-Abdou" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-surface group-hover:border-accent">
                                    <Github size={20} />
                                </div>
                                <span className="text-lg font-medium">GitHub</span>
                            </a>
                        </div>

                        <div className="mt-12 inline-block px-5 py-3 border border-border text-sm text-text-muted rounded-full w-fit bg-surface">
                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2 animate-pulse"></span>
                            Disponible pour missions freelance
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-7/12"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Nom"
                                    required
                                    className="w-full bg-[#0F0F1A] border border-border rounded-sm px-5 py-4 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-[#0F0F1A] border border-border rounded-sm px-5 py-4 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    required
                                    rows={6}
                                    className="w-full bg-[#0F0F1A] border border-border rounded-sm px-5 py-4 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="group w-fit bg-accent text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed mt-2"
                            >
                                {status === 'idle' || status === 'error' ? (
                                    <>
                                        Envoyer <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </>
                                ) : status === 'loading' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 size={18} /> Message envoyé
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm mt-2 font-medium">
                                    Merci ! Votre message a bien été envoyé. Je vous répondrai au plus vite.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-sm mt-2 font-medium">
                                    {errorMessage}
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
