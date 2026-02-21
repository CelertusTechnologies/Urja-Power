const products = [
  { title: "UPVC Pipe", desc: "High-strength durable UPVC pipes for electrical systems." },
  { title: "Electrical Pipe", desc: "Premium electrical grade conduit pipes." },
  { title: "Modular Pipe", desc: "Flexible modular piping solutions." },
  { title: "Fan Box", desc: "Durable fan mounting electrical boxes." },
  { title: "Concealed Box", desc: "Safe and secure concealed wiring boxes." },
];

const Products = () => {
  return (
    <section id="products" className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-electric mb-12">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="bg-gray-800 h-40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;