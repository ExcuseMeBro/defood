import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHistory, faBars } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../contexts/CartContext';
import './Header.css';

const Header = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>DeFood</h1>
        </Link>
        
        <nav className="main-nav">
          <button className="mobile-menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/fruits">Fruits</Link></li>
            <li><Link to="/category/vegetables">Vegetables</Link></li>
            <li><Link to="/category/dairy">Dairy</Link></li>
            <li><Link to="/category/bakery">Bakery</Link></li>
            <li><Link to="/category/meat">Meat</Link></li>
            <li><Link to="/order-history"><FontAwesomeIcon icon={faHistory} /> Orders</Link></li>
          </ul>
        </nav>
        
        <button className="cart-btn" onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItemsCount > 0 && (
            <span className="cart-count">{cartItemsCount}</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;