import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./index.css";
import Header from "./components/home/Header";
import Auth from "./components/auth/Auth";
import Footer from "./components/pages/Footer";
import Cart from "./components/cart/Cart";
import Payment from "./components/payment/Payment";
import Product from "./components/product/Product";
import Details from "./components/product/components/Details";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from "./components/account/Account";
import { useMemo } from "react";

function App() {
  const header = useMemo(() => {
    return <Header></Header>
  }, [])
  return (
    <div className="pt-124px">
      <Router>
        {header}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth></Auth>}></Route>
          <Route path="/register" element={<Auth></Auth>}></Route>
          <Route path="/account/*" element={<Account></Account>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/product--details/:id" element={<Details></Details>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      <ToastContainer
        position="top-right"
        zIndex={300}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
