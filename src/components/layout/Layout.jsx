import React from 'react';
import CustomCursor from '../ui/CustomCursor';
import ScrollProgress from '../ui/ScrollProgress';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, hideNavbar = false, hideFooter = false }) => {
    return (
        <div className="relative min-h-screen bg-industrial-50 text-industrial-900 selection:bg-electric-blue/20 selection:text-industrial-900 overflow-hidden">
            <CustomCursor />
            <ScrollProgress />

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {!hideNavbar && <Navbar />}
                <main className="flex-grow">
                    {children}
                </main>
                {!hideFooter && <Footer />}
            </div>
        </div>
    );
};

export default Layout;
