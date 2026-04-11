import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { AppContext } from "../../context/AppContext";
import { useLoaderData } from "react-router";

const DashBoard = () => {
    const allApps = useLoaderData()
    // console.log(allApps.length);
  const { installed } = useContext(AppContext);
//   console.log(installed);
  const unInstalledApp = allApps.length-installed.length
//   console.log(unInstalledApp);
  const data = [
    { name: "Installed", value: installed.length, fill: "#0088FE" },
    { name: "Uninstalled", value: unInstalledApp, fill: "#00C49F" },
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6">
      <h2 className="font-bold text-3xl mb-10 text-gray-800 text-center">
        📊 Installed vs Uninstalled Apps
      </h2>

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        <div className="w-full h-87.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              />

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-6 text-gray-600 text-sm text-center">
        Total Apps: {allApps.length} | Installed: {installed.length}
      </div>
    </div>
  );
};

export default DashBoard;
