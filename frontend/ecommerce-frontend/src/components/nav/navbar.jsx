
import assets from "../../assets/logo/spiderman.png";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* upper */}

      {/* Fixed Navbar */}
      <div className="bg-black flex justify-between items-center fixed top-0 left-0 w-full z-50 h-16 sm:h-20 md:h-24 px-2">

        <div className="flex flex-row justify-between items-center w-full min-w-0 gap-1 sm:gap-3 md:gap-4 lg:gap-6 xl:px-8 2xl:px-10 relative">

          <div className="flex shrink-0 justify-start items-center space-x-1 p-1 sm:space-x-4 sm:p-2">
            <Link to="/">
              <img
                src={assets}
                alt="logo"
                className="w-8 h-8 object-contain min-[360px]:w-9 min-[360px]:h-9 min-[400px]:w-10 min-[400px]:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center shrink-0 gap-0 sm:gap-1 p-1 sm:p-2">
            <h1 className="text-white font-bold whitespace-nowrap">
              CharToys
            </h1>
          </div>

          <div className="flex flex-row flex-1 min-w-0 justify-end items-center bg-transparent p-1 sm:p-2 gap-1 sm:gap-3 md:gap-4 lg:gap-6">

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex flex-row flex-nowrap min-w-0 justify-center items-center gap-x-1 min-[360px]:gap-x-2 min-[400px]:gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 text-[10px] min-[360px]:text-xs sm:text-sm md:text-base text-white font-bold p-1 sm:p-2 whitespace-nowrap">

              <li className="cursor-pointer">
                <Link to="/home">Home</Link>
              </li>

              <li className="cursor-pointer">
                <Link to="/products">Products</Link>
              </li>

              <li className="cursor-pointer">
                <Link to="/about">About</Link>
              </li>

              <li className="cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

            {/* Mobile and Tablet Hamburger Menu */}
            <div className="relative flex lg:hidden shrink-0 items-center">

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-xl sm:text-2xl p-2 cursor-pointer hover:text-red-500 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <FaBars />
              </button>

              {/* Navigation Links */}
              {menuOpen && (
                <ul className="absolute top-full right-0 mt-3 flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-6 bg-black border border-gray-700 rounded-lg shadow-xl px-4 py-4 text-white text-xs sm:text-sm font-bold whitespace-nowrap z-50">

                  <li className="cursor-pointer hover:text-red-500">
                    <Link to="/home" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:text-red-500">
                    <Link to="/products" onClick={() => setMenuOpen(false)}>
                      Products
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:text-red-500">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About
                    </Link>
                  </li>

                  <li className="cursor-pointer hover:text-red-500">
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>

                </ul>
              )}

            </div>

            {/* User Profile and Cart */}
            <div className="flex shrink-0 flex-row justify-center items-center gap-1 min-[360px]:gap-2 sm:gap-3 p-1 sm:p-2">

              {/* User Profile */}
              <Link
                to="/profile"
                className="text-white text-xl sm:text-2xl cursor-pointer hover:text-red-500 transition-colors"
                title="User Profile"
              >
                
                <FaUserCircle />
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="text-white text-xl sm:text-2xl cursor-pointer hover:text-red-500 transition-colors"
                title="Shopping Cart"
              >
                <FaShoppingCart />
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Navbar Bottom Space */}
      <div className="h-16 sm:h-20 md:h-24 w-full shrink-0"></div>

    </>
  );
};

export default Navbar;
