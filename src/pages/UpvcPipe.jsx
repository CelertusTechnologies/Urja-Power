import React from 'react';
import ProductDetailTemplate from '../components/layout/ProductDetailTemplate';

const UpvcPipe = () => {
    return (
        <ProductDetailTemplate
            title="Premium UPVC Pipes"
            subtitle="Piping Solutions"
            intro="High-grade unplasticized PVC pipes designed for durability, corrosion resistance, and long-term industrial performance."
            features={[
                "High chemical resistance",
                "Corrosion-free material",
                "Lightweight & easy installation",
                "Long service life",
                "Leak-proof performance"
            ]}
            applications={[
                "Industrial piping systems",
                "Water supply systems",
                "Agricultural irrigation",
                "Chemical plants"
            ]}
            whyChooseUs="Our UPVC pipes are engineered to meet strict industry standards and ensure long-term reliability."
            ctaText="Download Specifications / Get Quote"
            colorCode="from-cyan-400 to-blue-600"
            mainImage="/upvc-pipe.png"
            galleryImages={[
                "/Upvc pipe/upvc1.png",
                "/Upvc pipe/upvc2.png",
                "/Upvc pipe/upvc3.png",
            ]}
        />
    );
};

export default UpvcPipe;
