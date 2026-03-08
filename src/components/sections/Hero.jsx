import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    style={{ transform: 'translateZ(0)' }}
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for text readability - reduced for video visibility */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-industrial-50/50" />
            </div>

            {/* Electric Glow Orbs - subtle so video shows through */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-[1]" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-[1]" />

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-electric-blue/20 shadow-[0_0_8px_rgba(27,209,255,0.08)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                        <span className="text-sm font-medium tracking-wide text-gray-200">
                            NEXT-GEN PVC SOLUTIONS
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        Powering Infrastructure with{' '}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-400">
                            Premium
                            {/* Highlight underline animation */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-purple-400 origin-left rounded-full"
                            />
                        </span>{' '}
                        Electrical Solutions
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light"
                    >
                        Engineered for durability, designed for the future. URJA POWER delivers industry-leading PVC pipes and accessories for complex infrastructure projects.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a
                            href="#products"
                            className="group relative px-8 py-4 bg-white text-industrial-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-white to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[length:200%_auto] animate-[shimmer_2s_linear_infinite]" />
                            <span className="relative flex items-center gap-2">
                                Explore Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 glass border-white/20 text-white font-semibold rounded-full flex items-center justify-center transition-all hover:scale-105 hover:bg-white/10"
                        >
                            Get a Quote
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest text-gray-300 uppercase">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-electric-blue/70" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
