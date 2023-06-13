import { useState } from "react";
const FilterProduct = ({
  category,
  setCategory,
  price,
  setPrice,
  ratings,
  setRatings,
  openFilter,
  setOpenFilter,
  handleFilterClick,
  minPrice,
  setMaxPrice,
  maxPrice,
  setMinPrice,
}) => {
  const Category = [
    "Electronics",
    "Clothes",
    "Food",
    "Books",
    "Sports",
    "Toys",
    "Others",
  ];

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText);
  };

  const handleRatingChange = (event) => {
    setRatings(parseInt(event.target.value));
  };

  return (
    <div className="h-full w-full bg-white shadow-lg rounded-md p-6">
      <div className="mb-4">
        <h2 className="font-medium text-xl text-primary-700 mb-2">Category</h2>
        <ul className="list-none">
          {Category.map((item, index) => (
            <li
              className="font-medium text-base hover:text-slate-900 cursor-pointer py-1 transition-all duration-200"
              key={index + `-` + item}
              onClick={handleCategoryChange}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="font-medium text-xl text-primary-700 mb-2">Price</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Min"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-1/2 rounded-md border-gray-400 border-2 py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Max"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-1/2 rounded-md border-gray-400 border-2 py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
          />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-medium text-xl text-primary-700 mb-2">Rating</h2>
        <ul className="list-none space-y-1">
          <li>
            <input
              type="radio"
              id="1-star"
              name="rating"
              value={1}
              onChange={handleRatingChange}
              className="hidden"
            />
            <label htmlFor="1-star" className="text-sm cursor-pointer">
              1 star+
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="2-star"
              name="rating"
              value={2}
              onChange={handleRatingChange}
              className="hidden"
            />
            <label htmlFor="2-star" className="text-sm cursor-pointer">
              2 star+
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="3-star"
              name="rating"
              value={3}
              onChange={handleRatingChange}
              className="hidden"
            />
            <label htmlFor="3-star" className="text-sm cursor-pointer">
              3 star+
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="4-star"
              name="rating"
              value={4}
              onChange={handleRatingChange}
              className="hidden"
            />
            <label htmlFor="4-star" className="text-sm cursor-pointer">
              4 star+
            </label>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="py-2 px-6 font-medium bg-primary-700 text-white rounded-md w-full mr-2 transition-all duration-200 ease-in-out hover:bg-primary-800"
          onClick={handleFilterClick}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterProduct;
