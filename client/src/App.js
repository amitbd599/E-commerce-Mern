
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Faq from './pages/Faq';
import ProductDetails from './pages/ProductDetails';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/product-details/:id' element={<ProductDetails />} />
        <Route exact path='/wishlist' element={<Wishlist />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
