"use client";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import useCart from "../../hooks/useCart";
const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Products",
    href: "/products",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const { onOpen } = useCart();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md w-full ">
      <h1 className="text-2xl font-bold text-primary-700">Ecommerce</h1>
      <ul className=" items-center space-x-4 font-medium hidden md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.href} className={`font-medium text-lg`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-3">
        <button className="p-2 text-2xl rounded-md">
          <FcSearch />
        </button>
        <button
          className="relative inline-flex items-center p-3  font-medium text-center text-2xl"
          onClick={onOpen}
        >
          <IoBagHandleOutline />
          <span className="sr-only">cart</span>
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-700 hover:bg-primary-800 rounded-full top-0 right-1">
            {cartItems?.length}
          </div>
        </button>

        <NavLink to="/profile" className="text-2xl ">
          <RxAvatar />
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
