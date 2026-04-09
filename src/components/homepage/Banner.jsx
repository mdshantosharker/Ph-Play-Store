import React from "react";
import Buttons from "../Shared/buttons";
import playStore from "../../assets/playStore.png";
import appleStore from "../../assets/appleStore.png";
import hero from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="font-bold text-6xl mb-5">
          We Build <br /> <span className="text-purple-500">Productive </span>
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>

      {/* buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <Buttons>
          <img className="w-5" src={playStore} alt="" />
          Google Play
        </Buttons>
        <Buttons>
          <img className="w-5" src={appleStore} alt="" />
          App Store
        </Buttons>
      </div>

      <div className="flex justify-center mt-10">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
