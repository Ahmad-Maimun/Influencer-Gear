import { IoMdStar } from 'react-icons/io';
import './ProductsCards.css';

const ProductCard = ({ product }) => {
  const { image, name, price, rating, shipping } = product;
  return (
    <div className="product-card">
      <img src={image} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <span>{price}</span>
        <strong>
          {[...Array(Math.min(rating, 5))].map((_, index) => (
            <IoMdStar key={index} />
          ))}
        </strong>
        <p className="product-desc">{shipping}</p>
      </div>
    </div>
  );
};

export default ProductCard;
