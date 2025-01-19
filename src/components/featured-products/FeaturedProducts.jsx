import { gear } from '../../assets/images/images';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <div className="featured-products container">
      <div className="featured-img">
        <img src={gear} alt="" />
      </div>
      <div className="featured-content">
        <h2>Featured products at one place</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a href="#">Join Now</a>
      </div>
    </div>
  );
};

export default FeaturedProducts;
