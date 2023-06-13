import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <footer className="bg-white rounded-lg shadow  mx-auto  border-t  mt-4">
      {pathname !== "/products" && (
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              Ecommerce {"   "}
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a to="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a to="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
