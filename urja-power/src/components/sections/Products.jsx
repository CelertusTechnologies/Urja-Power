import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Zap, Shield, Factory, Hexagon } from 'lucide-react';
import { cn } from '../../utils/utils';

const products = [
    {
        id: 1,
        title: "Premium UPVC Pipe",
        category: "Piping Solutions",
        description: "High-grade unplasticized PVC pipes engineered for maximum durability and chemical resistance in industrial environments.",
        icon: <Factory className="w-8 h-8" />,
        color: "from-blue-500 to-electric-blue",
        path: "/products/upvc-pipe"
    },
    {
        id: 2,
        title: "Electrical Conduit",
        category: "Wiring Protection",
        description: "Heavy-duty electrical pipes designed to safeguard critical wiring infrastructure against physical and environmental damage.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500",
        path: "/products/electrical-pipe"
    },
    {
        id: 3,
        title: "Modular Pipe System",
        category: "Advanced Fitting",
        description: "Interlocking modular piping solutions offering rapid installation and scalable adaptability for complex layouts.",
        icon: <Hexagon className="w-8 h-8" />,
        color: "from-emerald-400 to-teal-500",
        path: "/products/modular-pipe"
    },
    {
        id: 4,
        title: "Industrial Fan Box",
        category: "Accessories",
        description: "Reinforced fan boxes cast to withstand extreme industrial vibrations and ensure secure ceiling fan mounting.",
        icon: <Package className="w-8 h-8" />,
        color: "from-orange-400 to-red-500",
        path: "/products/fan-box"
    },
    {
        id: 5,
        title: "Concealed Box",
        category: "Accessories",
        description: "Flush-mount concealed wiring boxes featuring exact knockout dimensions and robust screw mounts.",
        icon: <Shield className="w-8 h-8" />,
        color: "from-indigo-400 to-blue-600",
        path: "/products/concealed-box"
    }
];

import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full"
        >
            <Link to={product.path} className="block h-full">
                {/* Glow effect behind card */}
                <div
                    className={cn(
                        "absolute -inset-0.5 rounded-2xl blur-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br",
                        product.color
                    )}
                />

                <div className="relative h-full glass rounded-2xl p-8 flex flex-col items-start overflow-hidden bg-white/90 border border-industrial-100 group-hover:border-electric-blue/30 transition-colors">

                    {/* Animated Background Mesh */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {product.icon}
                    </div>

                    <div className={cn(
                        "p-4 rounded-xl mb-6 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110",
                        product.color
                    )}>
                        {React.cloneElement(product.icon, { className: 'w-6 h-6 text-white' })}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-electric-blue mb-2 block">
                        {product.category}
                    </span>

                    <h4 className="text-2xl font-heading font-bold text-industrial-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-industrial-900 group-hover:to-industrial-600 transition-colors">
                        {product.title}
                    </h4>

                    <p className="text-industrial-600 leading-relaxed mb-8 flex-grow">
                        {product.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-industrial-100 w-full flex items-center justify-between">
                        <span className="text-sm text-industrial-600 group-hover:text-industrial-900 transition-colors">View Specifications</span>
                        <motion.div
                            animate={{ x: isHovered ? 5 : 0 }}
                            className="w-8 h-8 rounded-full border border-industrial-200 flex items-center justify-center group-hover:border-electric-blue group-hover:bg-electric-blue/10 transition-colors"
                        >
                            <Zap className="w-4 h-4 text-electric-blue" />
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const Products = () => {
    return (
        <section id="products" className="py-24 relative bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-electric-blue/30 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-electric-blue" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-electric-blue">Our Catalog</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold text-industrial-900 mb-6"
                    >
                        Engineered For <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-600">Excellence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-industrial-600 font-light"
                    >
                        Explore our comprehensive range of high-performance PVC piping and electrical accessories, built to exceed industry standards and withstand the toughest conditions.
                    </motion.p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <div key={product.id} className={cn(
                            "h-full",
                            // Make the last two cards span columns nicely if needed, or just let them wrap
                            idx === 3 ? "md:col-span-2 lg:col-span-1" : "",
                            idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                        )}>
                            <ProductCard product={product} index={idx} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
