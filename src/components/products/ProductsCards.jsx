import products from '../../data/data';
import ProductCard from './ProductCard';

import './ProductsCards.css';

const ProductsCards = () => {
  return (
    <div className="products container">
      <h3 className="products-title">Popular Collection</h3>
      <div className="products-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
