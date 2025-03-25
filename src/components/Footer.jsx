import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>DeFood</h3>
          <p>Fresh food delivered to your doorstep</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/category/fruits">Fruits</a></li>
            <li><a href="/category/vegetables">Vegetables</a></li>
            <li><a href="/category/dairy">Dairy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@defood.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DeFood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;