
import assets from "../../assets/logo/spiderman.png";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    // upper
    <>
      {/* upper */}
      <div className="bg-black flex justify-between items-center shrink-0 fixed top-0 left-0 w-full z-50 h-auto p-2 ">
        <div className="flex flex-row justify-between items-center shrink-0 w-full min-w-0 gap-1 sm:gap-3 md:gap-4 lg:gap-6 xl:px-8 2xl:px-10 py-0">
          <div className="flex shrink-0 justify-start items-center space-x-1 p-1 sm:space-x-4 sm:p-2">
            <Link to="/">
              <img src={assets} alt="logo" className="w-8 h-8 object-contain min-[360px]:w-9 min-[360px]:h-9 min-[400px]:w-10 min-[400px]:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </Link>
          </div>
          <div className="flex flex-row flex-1 min-w-0 justify-end items-center bg-transparent p-1 sm:p-2 gap-1 sm:gap-3 md:gap-4 lg:gap-6">
            <ul className="flex flex-row flex-nowrap min-w-0 justify-center items-center gap-x-1 min-[360px]:gap-x-2 min-[400px]:gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8 text-[10px] min-[360px]:text-xs sm:text-sm md:text-base text-white font-bold p-1 sm:p-2 whitespace-nowrap">
              <li className="cursor-pointer">
                <Link to="/">Home</Link>
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

            <div className="flex shrink-0 flex-row justify-center items-center gap-1 min-[360px]:gap-2 sm:gap-3 p-1 sm:p-2">
              <Link to="/login" className="bg-white text-red-500 px-2 py-2 min-[360px]:px-3 sm:px-4 md:px-5 lg:px-6 text-[10px] min-[360px]:text-xs sm:text-sm md:text-base rounded cursor-pointer whitespace-nowrap">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
