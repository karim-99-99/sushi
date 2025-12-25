import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sushi1 from '../assets/sushi1.jpg';
import sushi3 from '../assets/sushi3.webp';

const Order = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Beef and mushrooms in spicy sauce with noodles',
      description: 'Beef vegetables with mushrooms, egg, sweet chili sauce, egg noodles',
      price: 3.99,
      quantity: 1,
      image: sushi1
    },
    {
      id: 2,
      name: 'Fusion Rolls',
      description: 'Rice, salmon, cottage cheese, red caviar, nori leaf',
      price: 2.99,
      quantity: 1,
      image: sushi3
    }
  ]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 0.99;
  const total = subtotal + delivery;

  const steps = [1, 2, 3];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Hero Title Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tight">
              MAKE AN ORDER
            </h1>
            <h1 
              className="text-8xl md:text-9xl font-black text-white/20 mb-4 tracking-tight absolute top-2 left-2"
              style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)` }}
            >
              MAKE AN ORDER
            </h1>
            <h1 
              className="text-8xl md:text-9xl font-black text-white/10 mb-4 tracking-tight absolute top-4 left-4"
              style={{ transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.15}px)` }}
            >
              MAKE AN ORDER
            </h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-12">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0 ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400'
                } transition-all duration-300`}>
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-1 bg-gray-800 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Red Circle Decoration */}
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.2}px)` }}
        ></div>
      </section>

      {/* Order Items Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-[#1a1a1a] border border-red-600/30 rounded-lg p-6 hover:border-red-600 transition-all duration-300 flex gap-6 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg border border-red-600/30">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-4 py-2 text-red-600 hover:bg-red-600/20 transition-colors duration-300"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-4 py-2 text-red-600 hover:bg-red-600/20 transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    {/* Price Button */}
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300">
                      {(item.price * item.quantity).toFixed(2)} $
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a1a] border border-red-600/30 rounded-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Order amount</span>
                    <span className="text-white font-bold">{subtotal.toFixed(2)} $</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery</span>
                    <span className="text-white font-bold">{delivery.toFixed(2)} $</span>
                  </div>
                  <div className="border-t border-red-600/30 pt-4 flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-xl font-bold text-red-600">{total.toFixed(2)} $</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert('Order placed successfully!');
                    navigate('/');
                  }}
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/50"
                >
                  Place an order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;

