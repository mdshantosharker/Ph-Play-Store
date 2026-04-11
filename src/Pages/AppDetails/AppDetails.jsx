import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

// import useApps from "../../hooks/useApps";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  //   const { apps } = useApps();

  const expectedApp = apps.find((app) => String(app.id) === id);
  // console.log(expectedApp);

  const { installed, setInstalled } = useContext(AppContext);
  const handleInstall = () => {
    const exitedInstallApp = installed.find(
      (install) => install.id == expectedApp.id,
    );
    if (exitedInstallApp) {
      toast.warn("This app already added");
      return;
    } else {
      setInstalled([...installed, expectedApp]);
      toast.success(`${expectedApp.title}`);
    }
  };
  // console.log(installed);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-6">
        <div className="container mx-auto max-w-md">
        
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-center hover:scale-[1.02] transition duration-300">
          
            <div className="flex justify-center">
              <img
                src={expectedApp.image}
                alt=""
                className="h-40 w-40 object-cover rounded-2xl shadow-lg"
              />
            </div>

           
            <h2 className="font-bold text-3xl text-gray-800">
              {expectedApp.title}
            </h2>

            
            <p className="text-gray-500">
              Developed by{" "}
              <span className="font-semibold text-purple-600">
                {expectedApp.companyName}
              </span>
            </p>

           
            <div className="flex justify-center gap-3 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Free</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">App</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">2026</span>
            </div>

          
            <button
              onClick={() => handleInstall()}
              className="w-full py-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              Install Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
