import React from 'react';
import ProductDetailTemplate from '../components/layout/ProductDetailTemplate';

const FanBox = () => {
    return (
        <ProductDetailTemplate
            title="Fan Box"
            subtitle="Heavy Duty Accessories"
            intro="Reinforced fan boxes designed to withstand heavy vibration and ensure secure ceiling mounting."
            features={[
                "High load capacity",
                "Strong mounting support",
                "Vibration resistant",
                "Long lasting material",
                "Safe electrical housing"
            ]}
            applications={[
                "Industrial buildings",
                "Warehouses",
                "Commercial spaces",
                "Residential ceilings"
            ]}
            whyChooseUs="Safety and durability combined for reliable installations."
            ctaText="Download Specifications / Get Quote"
            colorCode="from-amber-400 to-orange-600"
            mainImage="/fan-box.png"
            galleryImages={[
                "/Fanbox/Fanbox2.png",
                "/Fanbox/Fanbox3.png",
            ]}
        />
    );
};

export default FanBox;
