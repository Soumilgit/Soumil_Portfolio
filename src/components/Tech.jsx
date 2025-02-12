import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 p-10 justify-center">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex justify-center items-center">
          {technology.icon ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <p className="text-red-500">Missing Icon</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
