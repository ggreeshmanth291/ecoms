
import images from "../../assets/heroimages/dooms.jpg";
import Loki from "../../assets/cardimages/loki.jpg";
import spiderman from "../../assets/cardimages/spider.jpg";
import blackspider from "../../assets/cardimages/blackspider.jpg";
import groot from "../../assets/cardimages/groot.jpg";

const hero = () => {
  return (
    <>
      <main className="relative w-full h-full object-cover pt-16">
        <img
          className="object-center object-cover"
          src={images}
          alt="Dooms"
        />

        <div className="items-center shrink-0 w-full min-w-0 gap-1 sm:gap-1 md:gap-2 lg:gap-4 xl:px-8 2xl:px-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="md:text-2xl font-bold text-white sm:text-4xl">
            Dooms
          </h1>

          <p className="text-white sm:text-base md:text-lg lg:text-xl">
            Experience the thrill of the ultimate adventure!
          </p>

          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition duration-300 ease-in-out">
            Shop Now
          </button>
        </div>
      </main>

      <section>
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
                Discover amazing toys with premium quality and
                exciting designs. Perfect for kids and collectors.
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
                Discover amazing toys with premium quality and
                exciting designs. Perfect for kids and collectors.
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
                Discover amazing toys with premium quality and
                exciting designs. Perfect for kids and collectors.
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
                Discover amazing toys with premium quality and
                exciting designs. Perfect for kids and collectors.
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
    </>
  );
};

export default hero;
