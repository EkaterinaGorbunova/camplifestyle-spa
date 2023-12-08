import React from "react";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "/team/1.jpg",
  },
  {
    name: "Michael Foste",
    role: "Co-Founder / CTO",
    imageUrl:
    "/team/2.jpg",  },
  {
    name: "Dries Vincent",
    role: "Content Specialist",
    imageUrl:
    "/team/3.jpg",  },
  {
    name: "Tom Cook",
    role: "Studio Artist",
    imageUrl:
    "/team/4.jpg",  },
  {
    name: "Floyd Miles",
    role: "Principal Designer",
    imageUrl:
    "/team/5.jpg",  },
  {
    name: "Ah Kum",
    role: "VP, Marketing",
    imageUrl:
    "/team/6.jpg",  },
  {
    name: "Courtney Henry",
    role: "Front-end Developer",
    imageUrl:
    "/team/7.jpg",  },
  {
    name: "Lindsay Walton",
    role: "Copywriter",
    imageUrl:
    "/team/8.jpg",  },
  {
    name: "Whitney Francis",
    role: "Senior Designer",
    imageUrl:
    "/team/9.jpg",  },
  {
    name: "Emily Selman",
    role: "VP, User Experience",
    imageUrl:
    "/team/10.jpg",  },
  {
    name: "Benjamin Russel",
    role: "Software Developer",
    imageUrl:
    "/team/11.jpg",  },
  {
    name: "Michael Foster11",
    role: "Back-end Developer",
    imageUrl:
    "/team/12.jpg",  },
];

export const Team = () => {
  return (
    <div id="team" className="bg-gray-800">
      <div className="px-4 mx-auto text-center py-14 max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:space-y-4 sm:max-w-xl lg:max-w-5xl">
            <h2 className="text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter">
              Meet the team
            </h2>
            <p className="px-4 text-xl leading-normal text-center text-gray-300">
              We are unstoppable adventures who love nature and sitting around a
              campfire late at hight
            </p>
          </div>
          <ul className="grid grid-cols-2 mx-auto gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 lg:max-w-5xl xl:grid-cols-6">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="w-20 h-20 mx-auto rounded-full lg:w-24 lg:h-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs leading-normal text-center lg:text-sm font-inter">
                      <h3 className="text-gray-100">{person.name}</h3>
                      <p className="text-gray-400">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
