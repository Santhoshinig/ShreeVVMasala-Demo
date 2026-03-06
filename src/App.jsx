import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Loader from './components/Loader';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import useAOS from './hooks/useAOS';

// Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  useAOS();

  return (
    <Router>
      <Loader />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}
