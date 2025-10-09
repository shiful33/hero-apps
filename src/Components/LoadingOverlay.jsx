import React from 'react';
import { useLoading } from '../Contexts/LoadingContext';


function LoadingOverlay() {
  const { isRouteLoading } = useLoading();
  
  const overlayClasses = `
    fixed inset-0 
    bg-gray-100/90  
    z-[9999] 
    flex justify-center items-center 
    transition-opacity duration-500 ease-in-out 
    ${isRouteLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
  `;

  if (!isRouteLoading) return null;

  return (
    <div className={overlayClasses}>
      <div className="flex items-center space-x-3 text-gray-700">
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full border-t-indigo-600 animate-spin">
        </div>
        <p className="text-xl font-medium tracking-widest">L O A D I N G</p>
      </div>
    </div>
  );
}

export default LoadingOverlay;