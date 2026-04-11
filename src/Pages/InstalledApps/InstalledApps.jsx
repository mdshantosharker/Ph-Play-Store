import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const InstalledApps = () => {
  const { installed, setInstalled } = useContext(AppContext);
  const handleRemove = (app) => {
    const removeApps = installed.filter((r) => r.id !== app.id);
    setInstalled(removeApps);
    toast.error(`${app.title}`);
  };
  console.log(installed);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl container mx-auto font-bold text-center mb-8">
        Installed Apps
      </h1>

      <div className="max-w-4xl mx-auto grid gap-5">
        {installed.map((app) => (
          <div
            key={app.id}
            className="flex items-center gap-5 bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition"
          >
            <img
              className="h-16 w-16 rounded-xl object-cover"
              src={app.image}
              alt=""
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold">{app.title}</h2>
              <p className="text-gray-500 text-sm">Tap to open or manage app</p>
            </div>

            <button
              onClick={() => handleRemove(app)}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 hover:scale-105 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
