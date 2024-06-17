import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Faq from "./pages/Faq";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Invoice from "./pages/Invoice";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerify from "./pages/OTPVerify";
import ResetPassword from "./pages/ResetPassword";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopButton />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route
          exact
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/product-all/:pageNo" element={<Product />} />
        <Route
          exact
          path="/product-by-categories/:categoriesID/:pageNo"
          element={<Product />}
        />
        <Route
          exact
          path="/product-by-brands/:brandsID/:pageNo"
          element={<Product />}
        />
        <Route
          exact
          path="/product-by-remark/:remark/:pageNo"
          element={<Product />}
        />
        <Route
          exact
          path="/product-by-stock/:stock/:pageNo"
          element={<Product />}
        />
        <Route
          exact
          path="/product-by-color/:color/:pageNo"
          element={<Product />}
        />
        <Route exact path="/product-details/:id" element={<ProductDetails />} />
        <Route
          exact
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/invoice/:id"
          element={
            <PrivateRoute>
              <Invoice />
            </PrivateRoute>
          }
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/otp-verify/:email" element={<OTPVerify />} />
        <Route
          exact
          path="/reset-password/:email/:code"
          element={<ResetPassword />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
