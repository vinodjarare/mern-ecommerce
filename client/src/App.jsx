import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import MyProfile from "./components/profile/MyProfile";
import Cart from "./components/layout/Cart";
import Checkout from "./components/layout/checkout/Checkout";
import Payment from "./components/layout/checkout/payment/Payment";
import Auth from "./components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "./redux/action/userAction";
import ProtectedRoute from "./ProtectedRoute";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const dispatch = useDispatch();

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  const { isAuthenticated, userUpdated } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, [isAuthenticated, dispatch, userUpdated]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/checkout" element={<Checkout />} />

          {stripeApiKey && (
            <Route
              path="/checkout/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
      <Cart />
    </Router>
  );
};

export default App;
