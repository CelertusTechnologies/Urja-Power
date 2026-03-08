import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="URJA POWER" className="h-10" />

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-electric">Home</a>
          <a href="#about" className="hover:text-electric">About</a>
          <a href="#products" className="hover:text-electric">Products</a>
          <a href="#contact" className="hover:text-electric">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-4">
          <a href="#home" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#products" className="block">Products</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;