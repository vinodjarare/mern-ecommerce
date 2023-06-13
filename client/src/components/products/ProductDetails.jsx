import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ProductDetailsCarousel from "../layout/products/ProductDetailsCarousel.jsx";
import ReactMarkdown from "react-markdown";
import Wrapper from "../layout/Wrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../../redux/action/productAction.js";
import { addItemsToCart } from "../../redux/action/cartAction.js";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const { id } = params;
  const { product } = useSelector((state) => state.products);

  const cartHandler = () => {
    dispatch(addItemsToCart(id));
  };

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel
              images={product?.images}
              name={product?.name}
            />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product?.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            {/* <div className="text-lg font-semibold mb-5">{p.subtitle}</div> */}

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{product?.price}
              </p>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}

              {/* SIZE END */}

              {/* SHOW ERROR START */}

              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-primary-700
             text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={cartHandler}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{product?.description}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
