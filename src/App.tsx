import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Shopping Cart App 🛒</h1>
      {/* Navigation Links */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
