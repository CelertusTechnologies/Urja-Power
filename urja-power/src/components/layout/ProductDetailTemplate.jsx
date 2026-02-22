import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Download, Zap, Building2, Leaf, Settings } from 'lucide-react';
import { cn } from '../../utils/utils';

// Helper for generic icons based on text
const getIcon = (text) => {
    const ltext = text.toLowerCase();
    if (ltext.includes('industrial') || ltext.includes('manufacturing')) return <Settings className="w-8 h-8 text-current" />;
    if (ltext.includes('water') || ltext.includes('agriculture') || ltext.includes('chemical')) return <Leaf className="w-8 h-8 text-current" />;
    if (ltext.includes('electrical') || ltext.includes('wiring')) return <Zap className="w-8 h-8 text-current" />;
    if (ltext.includes('building') || ltext.includes('commercial') || ltext.includes('office')) return <Building2 className="w-8 h-8 text-current" />;
    return <ShieldCheck className="w-8 h-8 text-current" />;
};

const ProductDetailTemplate = ({
    title, subtitle, intro,
    features, applications, whyChooseUs, ctaText = "Download Specifications / Get Quote",
    colorCode, mainImage
}) => {
    return (
        <div className="bg-industrial-900 min-h-screen text-white pt-24 pb-24 font-sans relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br ${colorCode} rounded-full blur-[150px] opacity-10`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl ${colorCode} rounded-full blur-[150px] opacity-10`} />

            <div className="container-custom relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/#products" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                        <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                        <span className="tracking-wide uppercase text-sm font-semibold">Back to Products</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={`inline-block px-4 py-1.5 rounded-full border border-white/10 glass mb-6`}
                        >
                            <span className={`text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${colorCode}`}>
                                {subtitle}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-heading font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
                            {title}
                        </h1>
                        <p className="text-gray-300 text-xl lg:text-2xl mb-12 leading-relaxed font-light">
                            {intro}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${colorCode} shadow-lg shadow-black/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300`}
                            >
                                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                {ctaText}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Main Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group rounded-[2rem] overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-tr ${colorCode} opacity-10 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none`}></div>

                        <div className="w-full h-[600px] bg-industrial-800 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors duration-500">
                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-90"
                                />
                            ) : (
                                <>
                                    {/* Grid pattern background for placeholder */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${colorCode} p-[1px] mb-6 shadow-2xl z-10`}
                                    >
                                        <div className="w-full h-full bg-industrial-900 rounded-2xl flex items-center justify-center">
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-br ${colorCode}`}>
                                                <Zap className="w-10 h-10 text-white" />
                                            </span>
                                        </div>
                                    </motion.div>
                                    <p className="text-gray-400 font-medium tracking-widest uppercase text-sm z-10">Premium Image Placeholder</p>
                                    <p className="text-gray-500 text-xs mt-2 z-10">(High-res product photography)</p>
                                </>
                            )}
                            {/* Inner vignette overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
                        </div>

                        {/* Outer Glow */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${colorCode} blur-3xl opacity-20 -z-10`}></div>
                    </motion.div>
                </div>

                {/* Features & Why Choose Us */}
                <div className="grid lg:grid-cols-12 gap-12 mb-32">
                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 bg-industrial-800/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-10 lg:p-14"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-10 flex items-center gap-4">
                            <span className={`w-12 h-1 rounded-full bg-gradient-to-r ${colorCode}`}></span>
                            Key Features
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shrink-0`}>
                                        <CheckCircle2 className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-br ${colorCode} [&>path]:stroke-[url(#gradient)] stroke-white`} />
                                    </div>
                                    <span className="text-gray-300 font-medium leading-tight pt-1">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Choose Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorCode} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        <div className="relative h-full bg-industrial-900 border border-white/10 rounded-[2rem] p-10 lg:p-14 overflow-hidden flex flex-col justify-center">

                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <ShieldCheck className="w-32 h-32" />
                            </div>

                            <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                                Why Choose Us
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                {whyChooseUs}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Applications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Designed For Every Need</h2>
                        <p className="text-xl text-gray-400 font-light">Engineered to deliver exceptional performance across diverse applications and environments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden bg-industrial-800 border border-white/5 hover:border-white/20 transition-colors h-64 flex flex-col justify-end p-8"
                            >
                                {/* Application Image Placeholder */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMjBoMjBNMjAgMHYyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/80 to-transparent z-10"></div>

                                <div className="relative z-20">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 text-white`}>
                                        {getIcon(app)}
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {app}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Gallery Placeholders */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-32"
                >
                    <h2 className="text-3xl font-heading font-bold mb-10 text-center">Product Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className={cn(
                                "rounded-[2rem] overflow-hidden bg-industrial-800 border border-white/5 relative group flex items-center justify-center",
                                idx === 0 ? "md:col-span-2 aspect-[2/1] md:aspect-auto md:h-96" : "aspect-square md:aspect-auto md:h-96"
                            )}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

                                <p className="text-gray-500 font-medium tracking-widest uppercase text-xs z-10 opacity-50 group-hover:opacity-100 transition-opacity">Image Space</p>

                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${colorCode}`}></div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ProductDetailTemplate;
