import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import AppsCard from "../../ui/AppsCard/AppsCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      //   setTimeout(() => {
      setApps(data);
      setLoading(false);
      //   },1500);
    };
    fetchData();
  }, []);
  console.log(apps);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto  py-10">
        <div className="text-center">
          <h1 className="font-bold text-6xl">Our All Applications</h1>
          <p className="text-[#627382] mb-20 mt-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-2xl font-bold ">({apps.length})Apps Found</h2>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <FadeLoader color="#862fe8" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {apps.map((app) => (
              <AppsCard key={app.id} app={app}>
                {app.title}
              </AppsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
