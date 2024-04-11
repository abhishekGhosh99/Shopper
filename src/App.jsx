import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer";
import { banner_mens, banner_womens, banner_kids } from "./assets";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/Shopper/">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} category={"men"} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_womens} category={"women"} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category={"kid"} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
