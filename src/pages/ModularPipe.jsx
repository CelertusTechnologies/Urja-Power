import React from 'react';
import ProductDetailTemplate from '../components/layout/ProductDetailTemplate';

const ModularPipe = () => {
    return (
        <ProductDetailTemplate
            title="Advanced Modular Pipe Systems"
            subtitle="Flexible Infrastructure"
            intro="Interlocking modular piping solutions built for fast installation and scalable infrastructure."
            features={[
                "Quick installation",
                "Flexible design",
                "Scalable layouts",
                "Durable connectors",
                "Low maintenance"
            ]}
            applications={[
                "Industrial layouts",
                "Commercial piping",
                "Infrastructure projects",
                "Large installations"
            ]}
            whyChooseUs="Perfect for projects that require flexibility and speed."
            ctaText="Download Specifications / Get Quote"
            colorCode="from-emerald-400 to-teal-600"
            mainImage="/modular-pipe.png"
            galleryImages={[
                "/Modularbox/Modularbox1.png",
                "/Modularbox/Modularbox2.png",
                "/Modularbox/Modularbox3.png",
            ]}
        />
    );
};

export default ModularPipe;
