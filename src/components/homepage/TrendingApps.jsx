import React, { use } from "react";

const fetchApps = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const appsPromise = fetchApps();
const TrendingApps = () => {
  const apps = use(appsPromise);
  console.log(apps);
  return (
    <div className="my-10">
      <h1 className="font-bold text-4xl text-center"> Trending Apps</h1>
      <p className="text-[#627382] text-center mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>
    </div>
  );
};

export default TrendingApps;
