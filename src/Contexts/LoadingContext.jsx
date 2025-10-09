import React, { useState } from 'react';
import React, { createContext, useState, useContext, useCallback } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({children}) => {
    const [ isGlobalLoading, setIsGlobalLoading ] = useState(false);
    const MIN_DISPLAY_TIME = 2000;
    // let startTime = 0;

    const startLoading = useCallback(() => {
        if (!isGlobalLoading) {
            setIsGlobalLoading(true);
            window.loadingStartTime = Date.now();
        }
        // setIsRouteLoading(true);
        // startTime = Date.now();
    }, [isGlobalLoading]);

    const stopLoading = useCallback(() => {
        const elapsedTime = Date.now() - window.loadingStartTime;
        const timeToWait = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);

        setTimeout(() => {
            setIsGlobalLoading(false);
        }, timeToWait);
    }, []);

    const value = {
        isGlobalLoading,
        startLoading,
        stopLoading,
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
};

export default LoadingContext;