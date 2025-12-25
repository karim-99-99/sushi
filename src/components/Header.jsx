import { Link } from 'react-router-dom';

const Header = ({ cartCount = 0 }) => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-red-600/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-white hover:text-red-500 transition-colors duration-300 font-medium"
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-red-500 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-white text-2xl font-bold tracking-wider">K</span>
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">%</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">H</span>
          </Link>

          {/* Right Contact & Cart */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+79994445511" 
              className="text-white hover:text-red-500 transition-colors duration-300 font-medium"
            >
              +999999999
            </a>
            {cartCount > 0 && (
              <Link 
                to="/order" 
                className="relative flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 group transform hover:scale-105"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
                <span className="text-white font-medium">{cartCount} item</span>
                <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                  {cartCount}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

