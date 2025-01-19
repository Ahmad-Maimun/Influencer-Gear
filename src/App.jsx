import './App.css';
import FeaturedProducts from './components/featured-products/FeaturedProducts';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import ProductsCards from './components/products/ProductsCards';
import Sponsors from './components/sponsors/Sponsors';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <ProductsCards />
      <FeaturedProducts />
    </>
  );
};

export default App;
