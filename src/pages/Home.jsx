import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { mockProducts, mockCategories } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    setFeaturedProducts(mockProducts.filter(product => product.featured));
    setCategories(mockCategories);
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Fresh Food Delivered to Your Door</h1>
            <p>Order fresh groceries online with DeFood</p>
            <Link to="/category/fruits" className="btn">Shop Now</Link>
          </div>
        </section>
        
        <section className="categories-section">
          <h2 className="section-title">Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        <section className="featured-section">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;