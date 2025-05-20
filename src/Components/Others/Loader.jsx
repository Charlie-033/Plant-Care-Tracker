import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-fit mx-auto my-10">
      <Oval
        visible={true}
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Loader;
