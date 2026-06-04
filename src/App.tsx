import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-stone-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Menu />} />
              <Route path="/a-boleira" element={<About />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <CartDrawer />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
