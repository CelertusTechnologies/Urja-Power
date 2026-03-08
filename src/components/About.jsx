const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6 text-electric">About URJA POWER</h2>
          <p className="text-gray-300 leading-relaxed">
            URJA POWER is a trusted supplier of premium Electrical PVC Pipes and Accessories.
            We serve both B2B and B2C markets with high-quality, durable, and safety-focused products.
          </p>
          <p className="mt-4 text-gray-400">
            Our strong distribution network ensures timely bulk supply with competitive pricing.
          </p>
        </div>

        <div className="bg-gray-800 h-80 rounded-xl shadow-lg"></div>

      </div>
    </section>
  );
};

export default About;