const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-primary via-black to-primary flex items-center text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Powering Infrastructure with <span className="text-electric">Premium Electrical PVC Solutions</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Supplying High-Quality Electrical PVC Pipes & Accessories for B2B and B2C Markets
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a href="#products" className="px-6 py-3 bg-electric text-white rounded-lg hover:opacity-80 transition">
            Explore Products
          </a>

          <a href="#contact" className="px-6 py-3 border border-electric rounded-lg hover:bg-electric transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;