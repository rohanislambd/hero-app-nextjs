"use client"

import { AppContext } from '@/context/AppProvider';
import { TApp } from '@/types/app.type';
import React, { useContext } from 'react';

const InstallAppButton = ({app}:{app:TApp}) => {
    const {instailledApp, setInstalledApp} = useContext(AppContext);
    console.log(instailledApp, setInstalledApp);

    const handleInstall = () => {
        console.log("Install button trigger",app);
        setInstalledApp([...instailledApp, app])
    }
    return (
        <div>
            <button 
                onClick={() => handleInstall()}
            className="flex flex-1 items-center justify-center gap-2 rounded bg-blue-600 px-10 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]">Install</button>
        </div>
    );
};

export default InstallAppButton;