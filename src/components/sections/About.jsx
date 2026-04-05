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
        <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-industrial-100">
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
                        <div className="relative glass rounded-2xl p-2 h-[500px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)]">
                            <div className="w-full h-full rounded-xl bg-industrial-50 border border-industrial-100 flex items-center justify-center relative overflow-hidden group-hover:border-electric-blue/30 transition-colors duration-500">
                                {/* Placed the image that the user provided (Ensure image is in public folder named 'about-image.png' or similar) */}
                                <img
                                    src="/about-image.png"
                                    alt="Industrial Sci-Fi Pipes"
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 opacity-90"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-industrial-50/80 via-transparent to-transparent z-0"></div>

                                {/* Floating Stat Badge */}
                                <div className="absolute bottom-6 border-l-4 border-[#22c55e] pl-4 backdrop-blur-md bg-black/40 p-4 rounded-r-lg z-10 shadow-2xl">
                                    <p className="text-3xl font-heading font-bold text-industrial-900 mb-1">5+</p>
                                    <p className="text-industrial-600 text-sm tracking-wider uppercase">Years Experience</p>
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
                                <div className="w-3 h-3 rounded-full bg-[#22c55e] animate-ping" />
                                <span className="font-semibold text-sm tracking-wide">ISO 9001:2015</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h2 className="text-sm tracking-widest text-[#22c55e] font-semibold uppercase mb-3 flex items-center gap-4">
                            <span className="w-12 h-px bg-[#22c55e]"></span>
                            About Our Company
                        </h2>

                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-industrial-900 mb-6 leading-tight">
                            Setting the Standard in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#eab308]">
                                Electrical Infrastructure
                            </span>
                        </h3>

                        <p className="text-industrial-600 text-lg leading-relaxed mb-8">
                            At <strong className="text-industrial-900">URJA POWER</strong>, we don't just manufacture pipes; we engineer the arteries of modern infrastructure. With a relentless focus on quality and innovation, we provide premium electrical PVC solutions that power progress.
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
                                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] shrink-0 mt-0.5" />
                                    <span className="text-industrial-700">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div variants={itemVariants}>
                            <a href="#why-us" className="inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#22c55e] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left text-industrial-900 font-medium tracking-wide">
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
