import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('hover-trigger')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: 'rgba(27, 209, 255, 0.1)',
            border: '1px solid rgba(27, 209, 255, 0.5)',
        },
    };

    return (
        <>
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-blue/30 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
                variants={variants}
                animate={isHovering ? 'hover' : 'default'}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-electric-blue rounded-full pointer-events-none z-[10000] mix-blend-screen hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
