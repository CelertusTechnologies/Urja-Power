import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ShieldCheck, Cpu, Leaf, Briefcase, Sparkles, Activity } from 'lucide-react';

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
        <section id="about" className="py-16 md:py-20 relative overflow-hidden bg-white border-t border-industrial-100">
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
                        <div className="relative glass rounded-2xl p-2 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)]">
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
                                    <p className="text-3xl font-heading font-bold text-white mb-1">5+</p>
                                    <p className="text-white/80 text-sm tracking-wider uppercase">Years Experience</p>
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

                {/* Certifications Slider Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 pt-12 border-t border-industrial-100"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-[#22c55e]/30 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-[#22c55e]">Quality Assured</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-industrial-900">
                            Our Certifications & Accreditations
                        </h3>
                        <p className="text-industrial-600 text-sm mt-2 max-w-xl mx-auto font-light">
                            Our manufacturing processes and premium PVC products conform to national and international quality and safety benchmarks.
                        </p>
                    </div>

                    {/* Marquee Wrapper */}
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Fade overlays for smooth scrolling edges */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-marquee items-center py-6">
                            {doubledCertifications.map((cert, idx) => (
                                <div
                                    key={idx}
                                    className="w-56 h-36 shrink-0 mx-8 flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm border border-industrial-100 hover:border-[#22c55e]/30 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-sm hover:shadow-[0_10px_35px_rgba(34,197,94,0.12)] group cursor-pointer p-3"
                                    title={cert.name}
                                >
                                    <ImageWithFallback
                                        src={cert.image}
                                        alt={cert.name}
                                        fallbackIcon={cert.fallbackIcon}
                                        className="max-w-full max-h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.15)] transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Image fallback loader component
const ImageWithFallback = ({ src, alt, fallbackIcon, className }) => {
    const [error, setError] = React.useState(false);

    if (error || !src) {
        return <div className="flex items-center justify-center w-full h-full bg-industrial-50 rounded-xl">{fallbackIcon}</div>;
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};

// Certifications Data list (Only the 5 ISO logos)
const certifications = [
    {
        name: "ISO 9001:2015",
        image: "/certifications/iso-9001.svg",
        fallbackIcon: <Award className="w-10 h-10 text-[#22c55e]" />
    },
    {
        name: "ISO 14001:2015",
        image: "/certifications/iso-14001.jpg",
        fallbackIcon: <Leaf className="w-10 h-10 text-emerald-500" />
    },
    {
        name: "ISO 27001:2022",
        image: "/certifications/iso-27001.png",
        fallbackIcon: <ShieldCheck className="w-10 h-10 text-blue-500" />
    },
    {
        name: "ISO 45001:2018",
        image: "/certifications/iso-45001.jpg",
        fallbackIcon: <Activity className="w-10 h-10 text-[#eab308]" />
    },
    {
        name: "ISO 50001:2018",
        image: "/certifications/iso-50001.jpg",
        fallbackIcon: <Cpu className="w-10 h-10 text-orange-500" />
    },
    {
        name: "Startup India",
        image: "/certifications/startup-india.png",
        fallbackIcon: <Sparkles className="w-10 h-10 text-orange-600" />
    }
];

const doubledCertifications = [...certifications, ...certifications];

export default About;
