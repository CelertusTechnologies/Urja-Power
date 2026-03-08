import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '../../utils/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));

            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'bg-white/90 backdrop-blur-lg border-b border-industrial-200/50 py-4 shadow-sm'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group relative z-50">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-industrial-100 border border-industrial-200 group-hover:border-electric-blue/50 transition-colors">
                        <Zap className="w-5 h-5 text-electric-blue" />
                        <div className="absolute inset-0 bg-electric-blue/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-wider text-industrial-900">
                        URJA<span className="text-electric-blue">POWER</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-industrial-900 py-2",
                                activeSection === link.href.substring(1) ? "text-industrial-900" : "text-industrial-600"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue shadow-[0_0_8px_rgba(27,209,255,0.8)]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-industrial-100 border border-industrial-200 hover:border-electric-blue hover:bg-electric-blue/10 text-sm font-medium text-industrial-900 transition-all duration-300 shadow-sm hover:shadow-[0_4px_10px_rgba(14,165,233,0.15)]"
                    >
                        Get Quote
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-industrial-600 hover:text-industrial-900 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-industrial-100 shadow-xl md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col py-4 px-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-industrial-600 hover:text-electric-blue transition-colors py-2 border-b border-industrial-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
