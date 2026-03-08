import React from 'react';
import { Zap, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-industrial-100 relative overflow-hidden">
            {/* Footer Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center gap-2 mb-6 inline-block">
                            <span className="font-heading font-bold text-2xl tracking-wider text-industrial-900 flex items-center gap-1">
                                <Zap className="w-6 h-6 text-electric-blue fill-electric-blue/10" />
                                URJA<span className="text-electric-blue">POWER</span>
                            </span>
                        </a>
                        <p className="text-industrial-600 text-sm leading-relaxed mb-6">
                            Engineering the future of electrical infrastructure with premium, industrial-grade PVC solutions built for extreme durability.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-industrial-100 border border-industrial-200 flex items-center justify-center text-industrial-600 hover:text-electric-blue hover:border-electric-blue/50 hover:bg-electric-blue/5 transition-all duration-300 shadow-sm hover:-translate-y-1">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-industrial-900 font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Products Catalog', 'Manufacturing', 'Why Choose Us'].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-industrial-600 text-sm hover:text-electric-blue transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-industrial-300 rounded-full group-hover:bg-electric-blue transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-industrial-900 font-semibold mb-6">Our Products</h4>
                        <ul className="space-y-4">
                            {['UPVC Pipes', 'Electrical Conduits', 'Modular Piping', 'Concealed Boxes', 'Industrial Fan Boxes'].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-industrial-600 text-sm hover:text-electric-blue transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-industrial-300 rounded-full group-hover:bg-electric-blue transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications & Trust */}
                    <div>
                        <h4 className="text-industrial-900 font-semibold mb-6">Quality Assurance</h4>
                        <div className="space-y-4">
                            <div className="glass p-4 rounded-lg border-industrial-200 flex items-center gap-3">
                                <div className="w-8 h-8 bg-industrial-100 rounded flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-electric-blue">ISO</span>
                                </div>
                                <div>
                                    <h5 className="text-sm text-industrial-900 font-medium">ISO 9001:2015</h5>
                                    <p className="text-xs text-industrial-500">Certified Company</p>
                                </div>
                            </div>
                            <div className="glass p-4 rounded-lg border-industrial-200 flex items-center gap-3">
                                <div className="w-8 h-8 bg-industrial-100 rounded flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-electric-blue">ISI</span>
                                </div>
                                <div>
                                    <h5 className="text-sm text-industrial-900 font-medium">ISI Marked</h5>
                                    <p className="text-xs text-industrial-500">Standard Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-industrial-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-industrial-500 text-xs text-center md:text-left">
                        &copy; 2026 URJA POWER. All rights reserved. Designed for excellence.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-industrial-500 text-xs hover:text-industrial-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-industrial-500 text-xs hover:text-industrial-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
