import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
const banner = "/banner.jpg";

export const Banner = () => {
  const leftAnimation = useRef();
  const rightAnimation = useRef();

  useEffect(() => {
    gsap.fromTo(leftAnimation.current, { x: -150 }, { x: 0, duration: 3 });
    gsap.fromTo(rightAnimation.current, { x: 150 }, { x: 0, duration: 3 });
  }, []);

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
          <div className="relative p-2 text-center font-sans text-4xl italic font-bold leading-none text-white md:text-7xl lg:text-8xl">
            <p ref={leftAnimation} className="relative">
              Relax in Nature
            </p>
            <p ref={rightAnimation} className="text-red-500 mb-4 ">
              and Stress Less
            </p>            
            <p className="font-sans text-sm italic font-normal text-gray-300 lg:text-4xl lg:text-center">
              Camping LifeStyle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
