import React from 'react';
import { Phone, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-industrial-100 relative overflow-hidden">
            {/* Footer Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/50 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center mb-6 inline-block">
                            <img src={logo} alt="URJA POWER" className="h-14 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
                        </a>
                        <p className="text-industrial-600 text-sm leading-relaxed mb-6">
                            Engineering the future of electrical infrastructure with premium, industrial-grade PVC solutions built for extreme durability.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Phone Call */}
                            <a
                                href="tel:+919876543210"
                                title="Call Us"
                                className="w-10 h-10 rounded-full bg-industrial-100 border border-industrial-200 flex items-center justify-center text-industrial-600 hover:text-[#22c55e] hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            {/* Instagram */}
                            <a
                                href="https://instagram.com/urjapower"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                className="w-10 h-10 rounded-full bg-industrial-100 border border-industrial-200 flex items-center justify-center text-industrial-600 hover:text-[#22c55e] hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                                className="w-10 h-10 rounded-full bg-industrial-100 border border-industrial-200 flex items-center justify-center text-industrial-600 hover:text-[#22c55e] hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/company/urjapower"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="w-10 h-10 rounded-full bg-industrial-100 border border-industrial-200 flex items-center justify-center text-industrial-600 hover:text-[#22c55e] hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 transition-all duration-300 shadow-sm hover:-translate-y-1"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-industrial-900 font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Products Catalog', 'Manufacturing', 'Why Choose Us'].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-industrial-600 text-sm hover:text-[#22c55e] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-industrial-300 rounded-full group-hover:bg-[#22c55e] transition-colors" />
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
                            {['UPVC Pipes', 'Electrical Conduit Pipe', 'Modular Box', 'Concealed Boxes', 'Fan Boxes'].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-industrial-600 text-sm hover:text-[#22c55e] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-industrial-300 rounded-full group-hover:bg-[#22c55e] transition-colors" />
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
                                    <span className="text-xs font-bold text-[#22c55e]">ISO</span>
                                </div>
                                <div>
                                    <h5 className="text-sm text-industrial-900 font-medium">ISO 9001:2015</h5>
                                    <p className="text-xs text-industrial-500">Certified Company</p>
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
