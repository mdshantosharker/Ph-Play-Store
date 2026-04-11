import React, { useEffect, useState } from "react";
import AppsCard from "../../ui/AppsCard/AppsCard";
import { FadeLoader } from "react-spinners";

// const fetchApps = async () => {
//   const res = await fetch("/data.json");
//   return res.json();
// };

// const appsPromise = fetchApps();
const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps);

  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  console.log(apps);
  console.log(loading);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto  py-20">
        <div className="mb-10">
          <h1 className="font-bold text-4xl text-center"> Trending Apps</h1>
          <p className="text-[#627382] text-center mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <FadeLoader color="#862fe8" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {apps.map((app) => {
              return (
                <AppsCard key={app.id} app={app}>
                  {app.title}
                </AppsCard>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingApps;
