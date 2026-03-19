import { motion, useSpring } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

export default function CursorGlow() {
    const { x, y } = useMousePosition();

    // Spring physics for smooth following
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);

    // Update spring values when mouse moves
    if (x !== null && y !== null) {
        springX.set(x - 150); // Center the 300px circle
        springY.set(y - 150);
    }

    // Hide cursor on touch devices or before mouse move
    if (x === null) return null;
    // Use a media query in reality, but for now just basic render check

    return (
        <motion.div
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 hidden md:block"
            style={{
                x: springX,
                y: springY,
                background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0) 70%)',
            }}
        />
    );
}
