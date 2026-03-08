const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-electric text-center mb-10">Contact Us</h2>

        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800 rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 rounded-lg" />
          <input type="tel" placeholder="Phone" className="w-full p-3 bg-gray-800 rounded-lg" />
          <textarea placeholder="Message" rows="4" className="w-full p-3 bg-gray-800 rounded-lg"></textarea>

          <button className="w-full bg-electric py-3 rounded-lg hover:opacity-80 transition">
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-400 text-center">
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Email: info@urjapower.com</p>
          <p>Address: Your Business Address Here</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;