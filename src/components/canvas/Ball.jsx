import React from "react";

const Ball = ({ imgUrl }) => {
  return (
    <div className="relative w-24 h-24 flex justify-center items-center">
      <img
        src={imgUrl}
        alt="tech icon"
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export default Ball;
