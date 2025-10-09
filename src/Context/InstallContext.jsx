import React, { createContext, useEffect, useState } from 'react';

export const InstallContext = createContext();

  const InstallProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState(() => {
        const saved = localStorage.getItem('installedApps');
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
    }, [installedApps]);

    const installApp = (app) => {
        if (!installedApps.find(a => a.id === app.id)) {
            setInstalledApps([...installedApps, app]);
        }
    };

    const uninstallApp = (id) => {
        setInstalledApps(installedApps.filter(a => a.id !== id));
    }

    return (
        <InstallContext.Provider value={{ installedApps, installApp, uninstallApp }}>
        {children}
        </InstallContext.Provider>
    )
  };

export default InstallProvider;