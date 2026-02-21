import React from 'react';
import CustomCursor from '../ui/CustomCursor';
import ScrollProgress from '../ui/ScrollProgress';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-industrial-900 text-white selection:bg-electric-blue/30 selection:text-white overflow-hidden">
            <CustomCursor />
            <ScrollProgress />

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
