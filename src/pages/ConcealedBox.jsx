import React from 'react';
import ProductDetailTemplate from '../components/layout/ProductDetailTemplate';

const ConcealedBox = () => {
    return (
        <ProductDetailTemplate
            title="Concealed Wiring Boxes"
            subtitle="Premium Flush Mounts"
            intro="Flush-mount concealed boxes designed for modern electrical installations and safety."
            features={[
                "Perfect knockout dimensions",
                "Heat resistant material",
                "Strong screw mounting",
                "Neat wiring management",
                "Long life durability"
            ]}
            applications={[
                "Residential wiring",
                "Office buildings",
                "Commercial installations",
                "Modern interiors"
            ]}
            whyChooseUs="Ensuring neat, invisible, and permanent electrical frameworks."
            ctaText="Download Specifications / Get Quote"
            colorCode="from-purple-500 to-indigo-600"
            mainImage="/concealed-box.png"
            galleryImages={[
                "/Concealed box/Concealed Box1.png",
                "/Concealed box/Concealed Box2.png",
                "/Concealed box/Concealed Box3.png",
            ]}
        />
    );
};

export default ConcealedBox;
