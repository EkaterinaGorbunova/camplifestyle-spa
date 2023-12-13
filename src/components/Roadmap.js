import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const currentYear = new Date().getFullYear();
const steps = [
  {
    name: "Parc national du Mont-Orford, QC",
    description: "02-04 Jul " + currentYear,
    href: "https://www.sepaq.com/en/reservation/camping/parc-national-du-mont-orford",
    target: "_blank",
    status: "complete",
  },
  {
    name: "Centre touristique du Lac-Simon, QC",
    description: "21-26 Jul " + currentYear,
    href: "https://www.sepaq.com/en/reservation/camping/centre-touristique-du-lac-simon",
    target: "_blank",
    status: "complete",
  },
  {
    name: "Sandbanks Provincial Park, ON",
    description: "08-14 Aug " + currentYear,
    target: "_blank",
    href: "#",
    status: "complete",
  },
  {
    name: "Parc national du Mont-Tremblant, QC",
    description: "03-06 Sep " + currentYear,
    href: "https://www.sepaq.com/en/reservation/camping/parc-national-du-mont-tremblant",
    target: "_blank",
    status: "complete",
  },
  {
    name: "Parc national de la Yamaska, QC",
    description: "08-11 Oct " + currentYear,
    href: "https://www.sepaq.com/en/reservation/camping/parc-national-de-la-yamaska",
    target: "_blank",
    status: "current",
  },
  {
    name: "Parc national de Frontenac, QC",
    description: "21-23 May " + (currentYear + 1),
    href: "https://www.sepaq.com/pq/fro/",
    target: "_blank",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Roadmap = () => {
  return (
    <div id="roadmap" className="bg-black">
      <div className="px-4 mx-auto py-14 max-w-7xl sm:px-8 lg:py-24 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:space-y-4 sm:max-w-xl lg:max-w-5xl">
            <h2 className="text-2xl font-extrabold text-center text-gray-100 uppercase md:text-4xl font-inter">
              Join our camp roadtrip
            </h2>
          </div>
          <div
            aria-label="Progress"
            className="flex flex-wrap items-center justify-center h-full px-4"
          >
            <ol className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.description}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-10" : "",
                    "relative"
                  )}
                >
                  {step.status === "complete" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-indigo-600"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        target={step.target}
                        className="relative flex items-start group"
                      >
                        <span className="flex items-center h-9">
                          <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                            <CheckIcon
                              className="w-5 h-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                        <span className="flex flex-col min-w-0 ml-4">
                          <span className="m-1 font-semibold tracking-wide text-indigo-500 uppercase md:text-lg text-md">
                            {step.name}
                          </span>
                          <span className="m-1 text-lg text-gray-400">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : step.status === "current" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        target={step.target}
                        className="relative flex items-start group"
                        aria-current="step"
                      >
                        <span
                          className="flex items-center h-9"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full">
                            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full duration-500 animate-pulse" />
                          </span>
                        </span>
                        <span className="flex flex-col min-w-0 ml-4">
                          <span className="m-1 font-semibold tracking-wide text-indigo-500 uppercase md:text-lg text-md">
                            {step.name}
                          </span>
                          <span className="m-1 text-lg text-gray-300">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute top-4 left-4 mt-0.5 -ml-px w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        target={step.target}
                        className="relative flex items-start group"
                      >
                        <span
                          className="flex items-center h-9"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                            <span className="w-2.5 h-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                          </span>
                        </span>
                        <span className="flex flex-col min-w-0 ml-4">
                          <span className="m-1 font-semibold tracking-wide text-gray-500 uppercase md:text-lg text-md">
                            {step.name}
                          </span>
                          <span className="m-1 text-lg text-gray-400">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
