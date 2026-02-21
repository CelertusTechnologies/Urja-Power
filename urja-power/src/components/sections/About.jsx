import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-industrial-900 border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom">
                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Column - Image/Visuals */}
                    <motion.div variants={itemVariants} className="relative group">
                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border border-white/10 rounded-2xl transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-0" />
                        <div className="absolute -inset-4 border border-electric-blue/20 rounded-2xl transform -rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-0" />

                        {/* Main Image Card (Glassmorphism) */}
                        <div className="relative glass rounded-2xl p-2 h-[500px] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                            {/* Animated Gradient Backdrop acting as a placeholder image for now, later user can add real image */}
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-industrial-700 to-industrial-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>

                                {/* Simulated industrial pipes graphic using CSS shapes */}
                                <div className="absolute flex gap-4 -rotate-12 translate-y-10">
                                    <div className="w-16 h-full bg-gradient-to-r from-gray-700 via-gray-400 to-gray-800 rounded-full shadow-2xl relative">
                                        <div className="absolute top-1/4 w-full h-4 bg-gray-900/50"></div>
                                    </div>
                                    <div className="w-24 h-full bg-gradient-to-r from-electric-blue via-blue-400 to-blue-900 rounded-full shadow-2xl relative translate-y-20">
                                        <div className="absolute top-1/3 w-full h-4 bg-gray-900/50"></div>
                                    </div>
                                    <div className="w-12 h-[150%] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-800 rounded-full shadow-2xl relative -translate-y-20">
                                        <div className="absolute top-1/2 w-full h-4 bg-gray-900/50"></div>
                                    </div>
                                </div>

                                <div className="absolute bottom-6 border-l-4 border-electric-blue pl-4 backdrop-blur-md bg-black/40 p-4 rounded-r-lg">
                                    <p className="text-3xl font-heading font-bold text-white mb-1">20+</p>
                                    <p className="text-gray-300 text-sm tracking-wider uppercase">Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-8 top-12 glass p-4 rounded-xl shadow-2xl border-electric-blue/30 lg:block hidden"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-electric-blue animate-ping" />
                                <span className="font-semibold text-sm tracking-wide">ISO 9001:2015</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h2 className="text-sm tracking-widest text-electric-blue font-semibold uppercase mb-3 flex items-center gap-4">
                            <span className="w-12 h-px bg-electric-blue"></span>
                            About Our Company
                        </h2>

                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            Setting the Standard in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-400">
                                Electrical Infrastructure
                            </span>
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            At <strong className="text-white">URJA POWER</strong>, we don't just manufacture pipes; we engineer the arteries of modern infrastructure. With a relentless focus on quality and innovation, we provide premium electrical PVC solutions that power progress.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Precision-engineered UPVC and Modular pipes",
                                "Advanced fire propagation resistance",
                                "Unmatched durability for critical installations",
                                "Dedicated B2B delivery network",
                            ].map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={itemVariants}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-electric-blue shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div variants={itemVariants}>
                            <a href="#why-us" className="inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-electric-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left text-white font-medium tracking-wide">
                                Discover Our Capabilities →
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
