import React from "react";
import landing from "../../assets/images/Landing.png";

import Products from "../../components/Products/Products";

function index() {
  return (
    <section>
      {/* landing */}
      <div className="relative w-full">
        <div className="img h-[490px] md:h-[600px] lg:h-[710px] overflow-hidden">
          <img
            src={landing}
            alt="landing image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 md:top-20 md:right-6 md:left-auto md:translate-x-0 bg-primary w-[90%] md:w-[640px] h-auto md:h-[443px] p-6 md:p-10 flex flex-col gap-y-4 justify-center">
          <p className="font-bold text-sm md:text-base">New Arrivals!</p>
          <p className="text-3xl md:text-5xl text-amber-600 font-bold leading-tight">
            Discover Our Exclusive Furniture <br />
            and Home Decor Collection
          </p>
          <p className="font-medium text-sm md:text-base text-gray-800">
            Upgrade your living space with our premium collection of furniture
            and home accessories. Comfortable, stylish, and affordable for every
            home.
          </p>
          <button className="bg-amber-600 text-primary font-bold py-2 px-4 rounded-md w-fit">
            Shop Now
          </button>
        </div>
      </div>

      {/* landing end */}
      {/* Products */}
      <Products />
      {/* Products end */}
      {/* category */}
      <section className="container mt-16 ">
        <div className="   py-8 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-green-sofa-three-rectangular-mirrors_115919-80430.jpg?ga=GA1.1.2974258.1730238639&semt=ais_hybrid&w=740"
                className="rounded"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Discover Our Latest Furniture and Home Decor Collection
                </h2>

                <p className="mt-4 text-gray-700 hidden md:block">
                  Explore a wide range of furniture and home decor designed to
                  meet your home needs. From sofas, beds, tables, and more, we
                  offer comfort and style in every piece. Experience quality and
                  modern design in every product we provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* category end */}
    </section>
  );
}

export default index;
