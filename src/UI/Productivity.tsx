import React from "react";
import BTryItFree from "../common-component/BTryItFree";

const Productivity = () => {
  return (
    <div className="flex flex-col p-14 gap-8 justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-7xl font-bold text-center text-slate-700 ">
          Productivity that flows
        </p>
        <p className="text-7xl font-bold text-center text-slate-700 ">
          with your life.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-2xl text-center text-gray-600">
          Unleash your potential by harmonizing
        </p>
        <p className="text-2xl text-center text-gray-600">
          your daily tasks and habits with your
        </p>
        <p className="text-2xl text-center text-gray-600">
          unique energy rhythms.
        </p>
      </div>
      <BTryItFree />
      <img className="w-4xl" src="./productivityPng.avif" alt="" />
    </div>
  );
};

export default Productivity;
