import React, { useEffect, useState } from 'react';
import application from '../assets/application.png';
import { useLocation } from 'react-router';

const Preloader = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const MIN_DISPLAY_TIME = 800;
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, MIN_DISPLAY_TIME);

        return () => clearTimeout(timer);
    }, [location.pathname]);


    return (
        <>
             <div className={`fixed inset-0 bg-[#f9f9f9]/95 z-[9999] flex justify-center items-center transition-opacity duration-500 ease-out ${isLoading ? "opacity-100 visible" : "opacity-0 invisible"}`}
              style={{ pointerEvents: "none" }}>
                
                <div className='flex flex-col items-center'
                style={{ pointerEvents: 'auto' }}
                >
                <div className='relative flex items-center justify-center'>
                <div className='h-[60px] w-[60px] border-4 border-t-4 border-gray-300 rounded-full w- border-t-indigo-600 animate-spin'></div>
                 <img src={application} alt="loading" className='absolute w-[30px] h-[30px] ' />
                </div>
                <p className='text-[36px] font-medium tracking-[6px] ml-2'>L O A D I N G</p>
             </div>
             </div>
            {children}
        </>
    );
};

export default Preloader;