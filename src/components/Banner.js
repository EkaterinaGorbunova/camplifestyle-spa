import React from "react";
const banner = "/banner.jpg";

export const Banner = () => {
  return (
    <>
      <div className="relative w-full h-full bg-black">
        <img
          className="relative object-cover object-center w-screen h-screen bg-black"
          src={banner}
          alt="banner"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-50"></div>
      </div>
      <div
        data-aos="flip-down"
        className="container absolute inset-0 z-30 flex flex-col items-center justify-center h-full pl-0 mx-auto max-w-7xl sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
      >
        <div className="flex flex-col items-center justify-center mx-auto uppercase">
          <div className="relative p-2 text-center">
            <h1 className="relative mb-4 font-sans text-4xl italic font-bold leading-none text-center text-white md:text-7xl lg:text-8xl">
              {" "}
              Relax in Nature
              <br />
              <span className="text-red-500">and Stress Less</span>
            </h1>
            <p className="font-sans text-sm italic text-gray-300 lg:text-4xl lg:text-center">
              Camping LifeStyle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
