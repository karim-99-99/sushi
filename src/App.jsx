import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Order from './pages/Order';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(2); // Example cart count

  return (
    <Router>
      <div className="App min-h-screen bg-[#0a0a0a]">
        <Header cartCount={cartCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
