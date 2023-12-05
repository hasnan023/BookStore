import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Products from "./pages/Products";
import Navbar from "./components/navBar";
import AddProduct from "./pages/AddProduct";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "./redux/UserSlice";

function App() {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route
          path="/cart/checkout/payment/:firstName/:lastName/:email/:address"
          element={<Payment />}
        />
      </Routes>
    </div>
  );
}

export default App;
