import { tripod } from '../../assets/images/images';
import { IoMdStar } from 'react-icons/io';
import './ProductsCards.css';

const ProductsCards = () => {
  return (
    <div className="products container">
      <h3>Popular Collection</h3>
      <div>
        <div className="product-card">
          <img src={tripod} alt="" />
          <div className="product-info">
            <h4>Flex Tripod</h4>
            <span>$50.48</span>
            <strong>
              <IoMdStar />
            </strong>
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
