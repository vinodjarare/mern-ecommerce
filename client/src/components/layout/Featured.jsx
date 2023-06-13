import Card from "./Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/action/productAction";
const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-4 border-primary-700 w-fit mx-auto my-3">
        Featured Products
      </h2>
      <div className="flex items-center justify-center flex-wrap md:max-w-7xl mx-auto gap-3">
        {products?.map((product) => (
          <Card
            key={product._id}
            _id={product._id}
            name={product.name}
            categoty={product.category}
            price={product.price}
            image={product.images[0].url}
            ratings={product.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
