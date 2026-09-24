"use client"

import { TApp } from '@/types/app.type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type TAppContext = {
    instailledApp: TApp[];
    setInstalledApp: Dispatch<SetStateAction<TApp[]>>
}

export const AppContext = createContext<TAppContext>({
    instailledApp: [],
    setInstalledApp: () => {}
});



const AppProvider = ({children}:{children:ReactNode}) => {

    const [instailledApp, setInstalledApp] = useState<TApp[]>([])
    

    const sharedData = {
        instailledApp,
        setInstalledApp
    }
    return (
        <div>
            <AppContext.Provider value={sharedData}>
                {children}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;