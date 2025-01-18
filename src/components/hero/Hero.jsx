import { circle, mainCamera } from '../../assets/images/images';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-content">
          <h1>Start your Journey as Influencer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
            vestibulum sed scelerisque eros. Lectus faucibus.
          </p>
          <a href="#">Preebook now</a>
        </div>
        <div className="hero-img">
          <img className="circle-img" src={circle} alt="" />
          <img className="main-img" src={mainCamera} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
