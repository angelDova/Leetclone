"use client";

import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center bg-dark-layer-2">
      <MoonLoader size={100} color="orange" />
    </div>
  );
};

export default Loader;
