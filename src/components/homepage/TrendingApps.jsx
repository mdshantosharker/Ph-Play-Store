import React from "react";
import AppsCard from "../../ui/AppsCard/AppsCard";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router";
import useApps from "../../hooks/useApps";

// const fetchApps = async () => {
//   const res = await fetch("/data.json");
//   return res.json();
// };

// const appsPromise = fetchApps();
const TrendingApps = () => {
  // const apps = use(appsPromise);
  // console.log(apps);
  // const [button, setButton] = useState(false);extra implement part
  const { apps, loading } = useApps();

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
            {/* extra implement part */}
            {/* {
              button && apps.map((app) => {
              return (
                <AppsCard key={app.id} app={app}>
                  {app.title}
                </AppsCard>
              );
            })} */}

            {apps.slice(0, 8).map((app) => {
              return (
                <AppsCard key={app.id} app={app}>
                  {app.title}
                </AppsCard>
              );
            })}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Link to={"/apps"}>
            <button className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white">
              View All
            </button>
          </Link>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* extra implement part */}

        {/* <div className="flex justify-center mt-10">
        
         <button
            onClick={() => setButton(true)}
            className={`btn bg-linear-to-l from-[#9F62F2] to-[#632EE3] text-white ${button && "hidden"}`}
          >
            View All
          </button> 
          
        </div> */}

        {/* --------------------------------------------- */}
      </div>
    </div>
  );
};

export default TrendingApps;
