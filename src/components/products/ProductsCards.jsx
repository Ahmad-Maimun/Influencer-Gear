import { tripod } from '../../assets/images/images';
import { IoMdStar } from 'react-icons/io';
import './ProductsCards.css';

const ProductsCards = () => {
  return (
    <div className="products container">
      <h3 className="products-title">Popular Collection</h3>
      <div className="products-cards">
        <div className="product-card">
          <img src={tripod} alt="" />
          <div className="product-info">
            <h4>Flex Tripod</h4>
            <span>$50.48</span>
            <strong>
              <IoMdStar />
              <span>4.5</span>
            </strong>
            <p className="product-desc">
              Wordwide shifting available Buyers protection possible!
            </p>
          </div>
        </div>
        <div className="product-card">
          <img src={tripod} alt="" />
          <div className="product-info">
            <h4>Flex Tripod</h4>
            <span>$50.48</span>
            <strong>
              <IoMdStar />
            </strong>
            <p className="product-desc">
              Wordwide shifting available Buyers protection possible!
            </p>
          </div>
        </div>
        <div className="product-card">
          <img src={tripod} alt="" />
          <div className="product-info">
            <h4>Flex Tripod</h4>
            <span>$50.48</span>
            <strong>
              <IoMdStar />
            </strong>
            <p className="product-desc">
              Wordwide shifting available Buyers protection possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;

// {
//   [...Array(book.rating)].map((_, index) => <MdStar key={index} />);
// }
