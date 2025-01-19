import './App.css';
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
    </>
  );
};

export default App;
