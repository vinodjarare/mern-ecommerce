"use client";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const Card = ({ ratings, _id, name, category, image, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-sm">
      <Link
        to={`/products/${_id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <div className="mt-1 flex items-center justify-between w-full font-medium text-gray-900">
          <p className="mt-1">₹{price}</p>
          <div className="mt-1 py-1 px-3 rounded-3xl bg-primary-700 text-white flex items-center justify-center">
            <span>{ratings} </span>
            <AiOutlineStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
