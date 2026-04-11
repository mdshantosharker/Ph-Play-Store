import React from "react";

const Stats = () => {
  return (
    <div className="w-full bg-linear-to-r from-purple-600 to-violet-600 py-12 px-6  text-white">
      <div className="max-w-5xl mx-auto">
       
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Trusted By Millions, Built For You
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
          <div>
            <div className="text-sm font-medium opacity-80 mb-1">
              Total Downloads
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-2">29.6M</div>
            <div className=" text-sm font-medium flex items-center justify-center gap-1">
              ↑ 21% More Than Last Month
            </div>
          </div>

         
          <div>
            <div className="text-sm font-medium opacity-80 mb-1">
              Total Reviews
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-2">906K</div>
            <div className=" text-sm font-medium flex items-center justify-center gap-1">
              ↑ 48% More Than Last Month
            </div>
          </div>

          
          <div>
            <div className="text-sm font-medium opacity-80 mb-1">
              Active Apps
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-2">132+</div>
            <div className=" text-sm font-medium flex items-center justify-center gap-1">
              31 More Will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
