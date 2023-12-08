import React from "react";

const deStressImage = "/8-de-stress.jpg";

export const DeStress = () => {
  return (
    <div id="community" className="bg-gray-800">
      <div className="flex flex-wrap items-center justify-center h-full py-12 lg:py-24">
        <div className="max-w-lg p-6 space-y-6 md:p-6 md:max-w-2xl">
          <h2 className="text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter">
            De-stress
          </h2>
          <div className="text-lg leading-tight text-left text-indigo-200 md:text-2xl font-inter">
            <ul>
              <li>
                <span className="font-bold text-gray-300">
                  Head to the beach{" "}
                </span>
                <br /> There’s nothing like hearing the waves lapping on the
                shore to relax your body and mind.
                <br />
                <br />
              </li>
              <li>
                <span className="font-bold text-gray-300">
                  Venture to the mountains or a lake
                </span>{" "}
                <br />
                Kick back and relax in the mountains or at a lake, where the air
                feels fresh and clean and you can enjoy scenic views.
                <br />
                <br />
              </li>
              <li>
                <span className="font-bold text-gray-300">Go camping </span>{" "}
                <br />
                Disconnect and make nature your home. Pitch a tent and sit by a
                campfire at night.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-lg p-6 text-gray-100 max-h-md md:max-w-3xl">
          <img
            className="mx-auto rounded shadow-md"
            src={deStressImage}
            alt="8-foto-de-stress"
          />
        </div>
      </div>
    </div>
  );
};
