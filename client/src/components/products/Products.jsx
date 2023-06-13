import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FilterProduct from "../layout/products/FilterProduct";
import Card from "../layout/Card";
import { fetchAllProducts } from "../../redux/action/productAction";
import { load } from "dotenv";

const Products = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 250000]);
  const [ratings, setRatings] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  const handleFilterClick = () => {
    // Perform filtering logic using the selected values
    setPrice([minPrice, maxPrice]);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(fetchAllProducts(currentPage, price, category, ratings));
  }, [dispatch, currentPage, price, category, ratings, alert, error]);

  return (
    <div className="w-full min-h-screen h-full flex items-center box-border px-8 flex-col md:flex-row relative">
      <div className=" w-1/5 min-h-[calc(100vh-64px)] box-border fixed top-[100px] left-8 min-w-1/5 hidden md:block">
        <FilterProduct
          category={category}
          price={price}
          setOpenFilter={setOpenFilter}
          setCategory={setCategory}
          setPrice={setPrice}
          openFilter={openFilter}
          ratings={ratings}
          setRatings={setRatings}
          handleFilterClick={handleFilterClick}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      <div className="md:ml-[20%] w-full md:w-4/5 h-full box-border">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {loading ? (
              <div>Loading</div>
            ) : (
              <div className="flex flex-wrap -m-4 gap-4 justify-center  items-center">
                {products?.map((item, index) => (
                  <Card
                    _id={item._id}
                    category={item.category}
                    price={item.price}
                    image={item.images[0].url}
                    name={item.name}
                    ratings={item.ratings}
                    key={item._id}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
