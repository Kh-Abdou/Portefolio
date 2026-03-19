import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import CursorGlow from './components/ui/CursorGlow';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <LoadingScreen />}

            {!loading && (
                <div className="relative min-h-screen">
                    {/* Global UI Elements */}
                    <CursorGlow />
                    <ScrollProgress />

                    {/* Noise Texture */}
                    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <filter id="noise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noise)" />
                        </svg>
                    </div>

                    <Navbar />

                    <main className="relative z-10 flex flex-col pt-20">
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Timeline />
                        <Contact />
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
