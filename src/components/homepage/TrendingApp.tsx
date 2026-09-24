import { TApp } from "@/types/app.type";
import React from "react";
import AppCard from "../shared/AppCard";
import { getAllApps } from "@/lib/dataFetch";



const TrendingApp = async () => {
  const data = await getAllApps();
  console.log(data);
  return (
    <div className="container mx-auto my-15">
      <div className="space-y-4">
        <h2 className="text-center font-bold text-4xl">Trending app</h2>
        <p className="text-center">
          Explore all trending apps on the market developed by top developers.
        </p>
      </div>

      {/* Data display via card */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 my-5">
            {
                data.slice(0, 9).map((app:TApp ,ind: number) => {
                    return <AppCard key={ind} app={app}></AppCard>
                })
            }
      </div>
    </div>
  );
};

export default TrendingApp;
