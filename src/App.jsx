// src/App.jsx
import CategorySection from './Component/CategorySection';
import GallerySection from './Component/GallerySection';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import ProductSection from './Component/ProductSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <Hero/>
      <CategorySection/>
      <ProductSection/>
      <GallerySection/>
    </div>
  );
}

export default App;
