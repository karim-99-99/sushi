import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sushi1 from '../assets/sushi1.jpg';
import sushi2 from '../assets/sushi2.avif';
import sushi3 from '../assets/sushi3.webp';
import sushi4 from '../assets/sushi4.jpg';
import sushi5 from '../assets/sushi5.jpg';
import sushi6 from '../assets/sushi6.jpg';
import sushi7 from '../assets/sushi7.webp';
import sushi9 from '../assets/sushi9.jpg';
import sushi10 from '../assets/sushi10.webp';
import sushi11 from '../assets/sushi11.jpg';
import sushiVideo from '../assets/sushi.mp4';
const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const discountItems = [
    { id: 1, image: sushi1, discount: 10, price: 6.99, name: 'Sushi Platter' },
    { id: 2, image: sushi2, discount: 15, price: 2.99, name: 'White Rolls' },
    { id: 3, image: sushi3, discount: 15, price: 3.99, name: 'Spicy Rolls' },
    { id: 4, image: sushi4, discount: 15, price: 3.99, name: 'Premium Rolls' },
    { id: 5, image: sushi5, discount: 15, price: 2.99, name: 'Wok Noodles' },
    { id: 6, image: sushi6, discount: 15, price: 2.99, name: 'Wok Special' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`,
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-600 rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="relative">
                {/* Animated Gradient Text */}
                <h1 
                  className="text-8xl md:text-9xl font-black mb-4 tracking-tight relative inline-block"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #dc2626 50%, #ffffff 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 3s ease infinite'
                  }}
                >
                  SUSHI
                </h1>
                {/* Glowing Effect */}
                <div 
                  className="absolute inset-0 text-8xl md:text-9xl font-black mb-4 tracking-tight blur-xl opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, #dc2626 0%, #ffffff 50%, #dc2626 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 3s ease infinite',
                    zIndex: -1
                  }}
                >
                  SUSHI
                </div>
              </div>
              
              {/* Animated Subtitle */}
              <p className="text-xl text-gray-300 animate-slideInRight" style={{ animationDelay: '0.3s' }}>
                Premium Japanese Cuisine
              </p>

              <div className="flex gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <Link 
                  to="/order" 
                  className="relative bg-red-600 text-white px-8 py-4 rounded-lg font-bold overflow-hidden group"
                  style={{
                    boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(220, 38, 38, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(220, 38, 38, 0.5)';
                  }}
                >
                  <span className="relative z-10">BUY</span>
                  <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link 
                  to="/#menu" 
                  className="relative border-2 border-white text-white px-8 py-4 rounded-lg font-bold overflow-hidden group"
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View the menu
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <div className="relative group">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <img 
                  src={sushi7} 
                  alt="Sushi" 
                  className="relative w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.3))'
                  }}
                />
                
                {/* Animated Discount Badge */}
                <div 
                  className="absolute top-4 right-4 bg-red-600 rounded-full w-24 h-24 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300"
                  style={{
                    animation: 'bounce 2s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(220, 38, 38, 0.8)'
                  }}
                >
                  <span className="text-white text-2xl font-bold">-30%</span>
                  <span className="text-white text-xs">until Oct 30</span>
                </div>

                {/* Floating Sushi Icons */}
                <div className="absolute -top-6 -left-6 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍣</div>
                <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🍱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto object-cover"
          style={{ maxHeight: '80vh' }}
        >
          <source src={sushiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none"></div>
      </section>

      {/* Discounts Section */}
      <section id="discounts" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-black mb-12 text-center animate-fadeInUp">
            Discounts <span className="text-red-600">%</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discountItems.map((item, index) => (
              <div 
                key={item.id}
                className="bg-[#1a1a1a] border border-red-600/30 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300 transform hover:scale-105 group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 rounded-full w-16 h-16 flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">-{item.discount}%</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold text-white mb-4">{item.price} $</p>
                  <div className="flex gap-3">
                    <button className="flex-1 border-2 border-white text-white py-2 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                      Structure
                    </button>
                    <Link 
                      to="/order"
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 text-center"
                    >
                      BUY
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section id="menu" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 animate-fadeIn" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {/* Drinks - Left Large Vertical Panel */}
            <div className="lg:col-span-1 relative group overflow-hidden" style={{ 
              minHeight: '600px',
              borderRight: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src={sushi11} 
                alt="Drinks" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-6xl font-black my-14 text-white transform -rotate-90 origin-center whitespace-nowrap" style={{ letterSpacing: '0.1em' }}>
                  DRINKS
                </h3>
              </div>
            </div>

            {/* Right Section - Grid Layout */}
            <div className="lg:col-span-2 grid grid-cols-2 relative">
              {/* Top Row */}
              <div className="relative group overflow-hidden" style={{ 
                minHeight: '300px',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img 
                  src={sushi9} 
                  alt="Sushi" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-5xl font-black text-white" style={{ letterSpacing: '0.1em' }}>SUSHI</h3>
                </div>
              </div>

              {/* Menu Title - Top Right, spans across */}
              <div className="relative flex items-center justify-center" style={{ 
                minHeight: '300px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h2 className="text-7xl md:text-8xl font-black text-white" style={{ letterSpacing: '0.05em' }}>
                  Menu
                </h2>
              </div>

              {/* Bottom Row */}
              <div className="relative group overflow-hidden" style={{ 
                minHeight: '300px',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img 
                  src={sushi5} 
                  alt="Wok" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-5xl font-black text-white" style={{ letterSpacing: '0.1em' }}>WOK</h3>
                </div>
              </div>

              <div className="relative group overflow-hidden" style={{ 
                minHeight: '300px'
              }}>
                <img 
                  src={sushi10} 
                  alt="Rolls" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-5xl font-black text-white" style={{ letterSpacing: '0.1em' }}>ROLLS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <h2 className="text-6xl font-black mb-8 transform  origin-left text-white">
                CONTACTS
              </h2>
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] border border-red-600/30 p-6 rounded-lg hover:border-red-600 transition-all duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">Phone</h3>
                  <a 
                    href="tel:+999999999" 
                    className="text-white hover:text-red-500 transition-colors duration-300"
                  >
                    +999999999
                  </a>
                </div>
                <div className="bg-[#1a1a1a] border border-red-600/30 p-6 rounded-lg hover:border-red-600 transition-all duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">Time</h3>
                  <p className="text-white">From 8 am to 10 pm</p>
                </div>
                <div className="bg-[#1a1a1a] border border-red-600/30 p-6 rounded-lg hover:border-red-600 transition-all duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">Address</h3>
                  <p className="text-white">cairo, St. cairo</p>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div className="relative">
              <div className="bg-[#1a1a1a] border border-red-600/30 rounded-lg overflow-hidden h-96 relative">
                {/* Placeholder for map - you can integrate Google Maps or similar */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <p className="text-gray-400">Map Integration</p>
                    <p className="text-sm text-gray-500 mt-2">Lesnaya str., 5 sq. 108</p>
                  </div>
                </div>
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

