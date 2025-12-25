import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-red-600/20 py-12 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Buy Now Button */}
          <div className="flex items-center">
            <Link 
              to="/order" 
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/50"
            >
              Buy Now
            </Link>
          </div>

          {/* Center - Menu Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-bold mb-4">Menu</h3>
            <div className="flex flex-col gap-2 text-center">
              <Link to="/#sushi" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Sushi
              </Link>
              <Link to="/#rolls" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Rolls
              </Link>
              <Link to="/#wok" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Wok
              </Link>
              <Link to="/#drinks" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                Drinks
              </Link>
            </div>
          </div>

          {/* Right - Logo & Contact */}
          <div className="flex flex-col items-end">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-white text-2xl font-bold tracking-wider">K</span>
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">%</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-wider">H</span>
            </Link>
            <div className="text-right">
              <h3 className="text-white text-xl font-bold mb-2">Contact</h3>
              <a 
                href="tel:+99999999" 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 block mb-1"
              >
                +999999999
              </a>
              <a 
                href="mailtO:K%H@MAIL.COM" 
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                mailtO:K%H@MAIL.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

