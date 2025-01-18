import './Navbar.css';
import { searchIcon } from '../../assets/images/images';
import { cartIcon } from '../../assets/images/images';
const Navbar = () => {
  return (
    <div className="navbar container">
      <div>
        <span>Influencer Gear</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">
              <img src={searchIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cartIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
