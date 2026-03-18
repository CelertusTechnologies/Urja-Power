import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/utils';
import logo from '../../assets/Logo.png';

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
                    <img
                        src={logo}
                        alt="URJA POWER"
                        className="h-16 w-auto object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-[#22c55e] py-2",
                                isScrolled 
                                    ? (activeSection === link.href.substring(1) ? "text-industrial-900" : "text-industrial-600")
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-[#22c55e] border border-[#16a34a] hover:bg-[#16a34a] text-sm font-medium text-white transition-all duration-300 shadow-sm hover:shadow-[0_4px_10px_rgba(34,197,94,0.3)]"
                    >
                        Get Quote
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden relative z-50 p-2 transition-colors",
                        isScrolled ? "text-industrial-600 hover:text-industrial-900" : "text-white/90 hover:text-white"
                    )}
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
