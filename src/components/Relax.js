import React from "react";

const relaxImage = "/7-relax.jpg"

export const Relax = () => {
  return (
    <div id="traitsandspecies" className="bg-gray-800">
      <div className="flex flex-wrap-reverse items-center justify-center py-12 lg:py-22">
        <div className="max-w-lg p-6 max-h-md md:max-w-3xl">
          <img
            className="mx-auto rounded shadow-md"
            src={relaxImage}
            alt="7-foto-relax"
          />
        </div>
        <div className="max-w-lg p-6 space-y-6 md:p-6 md:max-w-2xl">
          <h2 className="text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter">
            Relax
          </h2>
          <p className="text-lg leading-tight text-left text-indigo-200 md:text-2xl font-inter">
            Modern life is a stress factory, and hitting the trail is one of the
            best cures. But sometimes you need a little extra push to let go of
            the week.
            <br /> <br />
            The way you spend time out in nature can affect how much your
            physical, emotional and mental health will benefit from it. Let's
            get outside to relax, relieve stress or anxiety, focus your mind and
            improve your well-being.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
