import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { productReducer } from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { orderReducer } from "./reducer/orderReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
