import React from "react";
import BTryItFree from "../common-component/BTryItFree";

const Unleash = () => {
  return (
    <div className="flex flex-col gap-4 px-60 py-12 shadow-xl rounded-lg bg-linear-to-tr from-cyan-50 via-white to-emerald-50 justify-center items-center">
      <p className=" text-slate-700 text-3xl font-semibold">
        Unleash your inner productivity
      </p>
      <p className="text-center text-slate-600 ">
        Sync your tasks and wellness to your unique rhythm.
      </p>
      <BTryItFree />
    </div>
  );
};

export default Unleash;
