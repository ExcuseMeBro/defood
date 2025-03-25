import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="category-card card">
      <div className="category-image">
        <img src={category.image} alt={category.name} />
      </div>
      <h3 className="category-name">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;