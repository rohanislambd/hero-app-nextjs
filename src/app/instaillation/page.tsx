'use client'
import AppCard from '@/components/shared/AppCard';
import { AppContext } from '@/context/AppProvider';
import { TApp } from '@/types/app.type';
import React, { useContext } from 'react';

const InstallationPage = () => {
    const {instailledApp, setInstalledApp} = useContext(AppContext);

    console.log(instailledApp, setInstalledApp);
    return (
        <div>
                <div className="container mx-auto">
      <div className="space-y-4">
        <h2 className="text-center font-bold text-4xl">Installed Apps</h2>
        <p className="text-center">
          Explore all exiting installed apps on the market developed by top developers.
        </p>
      </div>

      {/* Data display via card */}
    
            {instailledApp.length > 0 ?
                instailledApp.map((app:TApp ,ind: number) => {
                    return <AppCard key={ind} app={app}></AppCard>
                }): <p className='text-center text-blue-700 text-4xl py-20'>No installe apps found .</p>
            }
    
    </div>
        </div>
    );
};

export default InstallationPage;