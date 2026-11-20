import Toys from "../assets/heroimages/toys.jpg";

import Loki from "../assets/cardimages/loki.jpg";
import spiderman from "../assets/cardimages/spider.jpg";
import blackspider from "../assets/cardimages/blackspider.jpg";
import groot from "../assets/cardimages/groot.jpg";

import { useRef } from "react";

const Home = () => {
  const scrollRef = useRef(null);

  return (
    <div className="mx-auto flex-col w-full max-w-full h-auto">
      <main className="relative w-full h-full object-cover pt-0">
        <img className="object-center  object-cover" src={Toys} alt="Dooms" />

        <div className="items-center shrink-0 w-full min-w-0 gap-1 sm:gap-1 md:gap-2 lg:gap-4 xl:px-8 2xl:px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="md:text-6xl lg:text-6xl xl:text-6xl xs:text-6xl font-extrabold text-red-500 sm:text-6xl drop-shadow-2xl">Toys</h1>

          <p className="text-white sm:text-base md:text-lg lg:text-xl drop-shadow-2xl font-extrabold">
            Experience the thrill of the ultimate adventure!
          </p>

          <button
            onClick={() =>
              scrollRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition duration-300 ease-in-out"
          >
            Shop Now
          </button>
        </div>
      </main>

      <section
        ref={scrollRef}
        className="bg-gray-100 py-8 sm:py-10 md:py-12 lg:py-16"
      >
        <h1 className="text-3xl font-bold text-red-800 font-serif text-center p-4">
          shop by category
        </h1>

        {/* Responsive Card Container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 p-4 sm:p-5 md:p-6 lg:p-8 max-w-screen-2xl mx-auto">
          {/* Toy Product Card 1 */}
          <div className="w-full min-w-0 sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
              src={Loki}
              alt="Toy Product"
            />

            <div className="px-4 py-4 sm:px-5">
              <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                Premium Toy Collection
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                Discover amazing toys with premium quality and exciting designs.
                Perfect for kids and collectors.
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  ₹999
                </span>

                <span className="text-xs sm:text-sm text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              <button className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Toy Product Card 2 */}
          <div className="w-full min-w-0 sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
              src={spiderman}
              alt="Toy Product"
            />

            <div className="px-4 py-4 sm:px-5">
              <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                Premium Toy Collection
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                Discover amazing toys with premium quality and exciting designs.
                Perfect for kids and collectors.
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  ₹999
                </span>

                <span className="text-xs sm:text-sm text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              <button className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Toy Product Card 3 */}
          <div className="w-full min-w-0 sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
              src={blackspider}
              alt="Toy Product"
            />

            <div className="px-4 py-4 sm:px-5">
              <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                Premium Toy Collection
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                Discover amazing toys with premium quality and exciting designs.
                Perfect for kids and collectors.
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  ₹999
                </span>

                <span className="text-xs sm:text-sm text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              <button className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Toy Product Card 4 */}
          <div className="w-full min-w-0 sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
              src={groot}
              alt="Toy Product"
            />

            <div className="px-4 py-4 sm:px-5">
              <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                Premium Toy Collection
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                Discover amazing toys with premium quality and exciting designs.
                Perfect for kids and collectors.
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  ₹999
                </span>

                <span className="text-xs sm:text-sm text-green-600 font-semibold">
                  In Stock
                </span>
              </div>

              <button className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-4xl mx-auto px-4 py-8 mb-12 pb-12">
          <figure className="max-w-3xl">
            <div className="flex items-center space-x-1 mb-4">
              <svg
                className="w-5 h-5 text-fg-yellow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-5 h-5 text-fg-yellow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-5 h-5 text-fg-yellow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-5 h-5 text-fg-yellow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-5 h-5 text-fg-disabled"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <blockquote>
              <p className="text-2xl font-semibold text-heading tracking-tight">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
                <cite className="pe-3 font-medium text-heading">
                  Bonnie Green
                </cite>
                <cite className="ps-3 text-sm text-body">CTO at Flowbite</cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Home;
