import React from "react";
import { motion } from "framer-motion";

function App() {

 const products = [
  {
    name: "Instant Rasam Mix",
    desc: "Serves 8-10 people",
    price: "₹140",
    img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
  },
  {
    name: "Foxtail Millet Pongal",
    desc: "Serves 2-3 people",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
  },
  {
    name: "Instant Lemon Poha",
    desc: "Ready in minutes",
    price: "₹100",
    img: "https://images.unsplash.com/photo-1589308078054-832c3a3a1b3c"
  },
];


  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-red-700">Asvada Foods</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#products" className="hover:text-red-600">Products</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#distribution" className="hover:text-red-600">Distribution</a>
            <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-full">Contact</a>
          </div>
        </div>
      </nav>

     {/* HERO */}
<section className="relative h-screen flex items-center justify-center text-white text-center px-6">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1604908177225-d0e89e1c6f57"
      alt="South Indian Food"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>

  {/* Content */}
  <motion.div 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="relative z-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Traditional Taste.<br/>Ready in Minutes.
    </h1>
    <p className="text-lg mb-8 max-w-2xl mx-auto">
      Preservative-free millet-based ready-to-cook products crafted with authentic South Indian recipes.
    </p>
    <a href="https://wa.me/7349205528">
      <button className="bg-red-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-red-700 transition">
        Order on WhatsApp
      </button>
    </a>
  </motion.div>
</section>
{/* BRAND IMAGE SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
    
    <img 
      src="https://images.unsplash.com/photo-1625944239422-fc3d0e7a0e92"
      alt="Healthy Food"
      className="rounded-2xl shadow-lg"
    />

    <div>
      <h2 className="text-4xl font-bold mb-6">Crafted with Tradition</h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Every Asvada product is inspired by traditional recipes passed down generations.
        We combine authenticity with convenience to suit modern lifestyles.
      </p>
    </div>

  </div>
</section>


      {/* PRODUCTS */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Best Sellers</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.img} alt={item.name} className="h-56 w-full object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.desc}</p>
                <p className="text-red-600 font-bold mt-2">{item.price}</p>
                <a href="https://wa.me/7349205528">
                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                    Order Now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Asvada</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Asvada Foods blends traditional South Indian culinary heritage with modern convenience. 
            Our millet-based ready-to-cook mixes are crafted without preservatives, ensuring authentic taste, 
            nutrition, and ease for modern households.
          </p>
        </div>
      </section>

      {/* DISTRIBUTION */}
      <section id="distribution" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Distribution & Retail Partnerships</h2>
        <p className="mb-8 text-gray-600">
          We are expanding across regions. Interested in retail, wholesale, or distribution partnership?
        </p>
        <a href="https://wa.me/7349205528">
          <button className="bg-red-600 text-white px-10 py-3 rounded-full shadow-lg hover:bg-red-700 transition">
            Become a Partner
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="font-semibold mb-3">Asvada Foods</h3>
            <p className="text-gray-400">Authentic. Healthy. Convenient.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">WhatsApp: +91 99999 99999</p>
            <p className="text-gray-400">Email: info@asvadafoods.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <p className="text-gray-400">Instagram | Facebook</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2026 Asvada Foods. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
