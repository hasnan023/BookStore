import './App.css';
import { Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Products from './pages/Products';
import Navbar from './components/navBar';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/AddToCart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import { useSelector, useDispatch } from "react-redux";



function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/Addproduct" element={<AddProduct />} />
      <Route exact path="/product/:id" element={<SingleProduct />} />
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/Cart/Checkout" element={<Checkout/>} />
      <Route exact path="/Cart/Checkout/Payment/:firstName/:lastName/:email/:address" element={<Payment/>} />
    </Routes>
    </div>
  );
}

export default App;
