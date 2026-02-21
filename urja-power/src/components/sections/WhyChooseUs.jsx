import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, Clock, Truck, TrendingDown } from 'lucide-react';

const features = [
    {
        title: "High Quality Material",
        description: "Manufactured using virgin PVC resin and strict quality control protocols.",
        icon: <ShieldAlert className="w-8 h-8" />
    },
    {
        title: "Fire Resistant",
        description: "Self-extinguishing properties that prevent fire propagation in critical areas.",
        icon: <Flame className="w-8 h-8" />
    },
    {
        title: "Long Lasting",
        description: "Exceptional durability guaranteed to withstand decades of harsh conditions.",
        icon: <Clock className="w-8 h-8" />
    },
    {
        title: "Bulk Supply",
        description: "Massive inventory capacity ensuring uninterrupted supply for mega-projects.",
        icon: <Truck className="w-8 h-8" />
    },
    {
        title: "Competitive Pricing",
        description: "Direct manufacturing efficiency translates to unbeatable market value.",
        icon: <TrendingDown className="w-8 h-8" />
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-24 relative bg-industrial-900 border-t border-white/5 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Text Content Area */}
                    <div className="lg:w-1/3 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-sm tracking-widest text-electric-blue font-semibold uppercase mb-3 flex items-center gap-4">
                                <span className="w-12 h-px bg-electric-blue"></span>
                                The URJA Advantage
                            </h2>

                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                Why Industry Leaders <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-white">
                                    Trust Us
                                </span>
                            </h3>

                            <p className="text-gray-400 font-light leading-relaxed mb-8">
                                We don't just supply products; we partner in building reliable, future-proof infrastructure. Our commitment to excellence is engineered into every pipe and fitting we produce.
                            </p>

                            <div className="flex gap-4">
                                <div className="border border-white/10 rounded-xl p-4 glass w-32 text-center">
                                    <div className="text-3xl font-heading font-bold text-electric-blue mb-1">10k+</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                                </div>
                                <div className="border border-white/10 rounded-xl p-4 glass w-32 text-center">
                                    <div className="text-3xl font-heading font-bold text-electric-blue mb-1">0%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Failure Rate</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-electric-blue/0 group-hover:from-electric-blue/10 group-hover:to-transparent rounded-2xl transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />

                                    <div className="relative h-full glass rounded-2xl p-6 border border-white/5 hover:border-electric-blue/30 transition-all duration-300 transform group-hover:-translate-y-1">
                                        <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-blue/10 group-hover:shadow-[0_0_20px_rgba(27,209,255,0.2)] transition-all duration-300">
                                            <div className="text-gray-400 group-hover:text-electric-blue transition-colors">
                                                {feature.icon}
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-heading font-bold text-white mb-3 tracking-wide">
                                            {feature.title}
                                        </h4>

                                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
