import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const AppsCard = ({ app }) => {
  return (
    <div className="card bg-base-100  shadow-2xl ">
      <figure>
        <img className=" w-52 mt-10 rounded-2xl" src={app.image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center">
          <div className="bg-[#F1F5E8] text-green-500 p-2 font-bold  rounded-lg flex items-center gap-2">
            <IoMdDownload />
            {app.downloads}
          </div>
          <button className="bg-[#FFF0E1] text-orange-400 p-2 font-bold rounded-lg flex items-center gap-2">
            <FaStar />
            {app.ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
