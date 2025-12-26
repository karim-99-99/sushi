import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-red-600/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Left Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 text-white hover:text-red-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Center Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            <span className="text-white text-2xl font-bold tracking-wider">KY</span>
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">O</span>
          </Link>

          {/* Desktop Right Contact & Cart */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+999999999" 
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

          {/* Mobile Cart Icon */}
          {cartCount > 0 && (
            <Link 
              to="/order" 
              className="md:hidden relative p-2"
              onClick={closeMobileMenu}
            >
              <svg 
                className="w-6 h-6 text-white" 
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
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        <nav 
          className={`absolute top-20 left-0 right-0 bg-[#0a0a0a] border-t border-red-600/20 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="px-6 py-4 text-white hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 font-medium border-b border-red-600/10"
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="px-6 py-4 text-white hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 font-medium border-b border-red-600/10"
            >
              Contact
            </Link>
            <a 
              href="tel:+999999999" 
              onClick={closeMobileMenu}
              className="px-6 py-4 text-white hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 font-medium border-b border-red-600/10"
            >
              Phone: +999999999
            </a>
            {cartCount > 0 && (
              <Link 
                to="/order" 
                onClick={closeMobileMenu}
                className="px-6 py-4 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-medium flex items-center justify-between"
              >
                <span>Cart</span>
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {cartCount}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

