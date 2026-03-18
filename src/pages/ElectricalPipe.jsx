import React from 'react';
import ProductDetailTemplate from '../components/layout/ProductDetailTemplate';

const ElectricalPipe = () => {
    return (
        <ProductDetailTemplate
            title="Electrical Conduit Pipes"
            subtitle="Wiring Protection"
            intro="Heavy-duty electrical conduit pipes designed to protect electrical wiring from damage and environmental impact."
            features={[
                "Fire resistant",
                "High impact strength",
                "Smooth inner surface",
                "UV resistant",
                "Easy wiring installation"
            ]}
            applications={[
                "Residential wiring",
                "Commercial buildings",
                "Industrial infrastructure",
                "Underground cabling"
            ]}
            whyChooseUs="Ensures safe and reliable electrical installations for modern infrastructure."
            ctaText="Download Specifications / Get Quote"
            colorCode="from-pink-500 to-rose-600"
            mainImage="/electrical-pipe.png"
            galleryImages={[
                "/ElectricalPipe/electrical1.png",
                "/ElectricalPipe/electrical2.png",
                "/ElectricalPipe/electrical3.png",
            ]}
        />
    );
};

export default ElectricalPipe;
