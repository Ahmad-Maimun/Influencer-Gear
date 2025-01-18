import {
  alibaba,
  amazon,
  daraz,
  ebay,
  rakuten,
  target,
  walmart,
} from '../../assets/images/images';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <div className="sponsors container">
        <div className="sponsors-img">
          <img src={alibaba} alt="" />
          <img src={amazon} alt="" />
          <img src={daraz} alt="" />
          <img src={ebay} alt="" />
          <img src={rakuten} alt="" />
          <img src={walmart} alt="" />
          <img src={target} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
