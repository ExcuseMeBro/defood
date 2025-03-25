import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { mockProducts, mockCategories } from '../data/mockData';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const foundCategory = mockCategories.find(cat => cat.id === categoryId);
    setCategory(foundCategory);
    
    const filteredProducts = mockProducts.filter(product => product.categoryId === categoryId);
    setProducts(filteredProducts);
  }, [categoryId]);

  if (!category) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">{category.name}</h1>
          <p className="category-description">{category.description}</p>
        </div>
        
        {products.length === 0 ? (
          <p className="no-products">No products found in this category.</p>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;