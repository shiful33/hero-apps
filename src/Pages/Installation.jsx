import React, { useContext, useState } from 'react';
import { InstallContext } from '../Context/InstallContext';
import download from '../assets/download.png';
import star from '../assets/star.png';

const Installation = () => {
    const { installedApps, uninstallApp } = useContext(InstallContext);

    const [ sortOrder, setSortOrder ] = useState('');

    const sortedApp = [...installedApps].sort((a, b) => {
        const sizeA = parseFloat(a.size);
        const sizeB = parseFloat(b.size);

        if (sortOrder === 'low') return sizeA - sizeB;
        if (sortOrder === 'high') return sizeB - sizeA;
        return 0;
    })


    return (
        <div className='p-[20px] lg:p-[80px]'>
            <h1 className='gradient-text text-[28px] md:text-[38px] lg:text-[48px] font-bold mb-[16px] text-center'>Your Installed Apps</h1>
            <p className='text-[#627382] mb-[40px] text-center'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between items-center mb-[16px]'>
                <div>
                    <h2 className='text-[24px] font-semibold'>{installedApps.length} Apps Found</h2>
                </div>
                <div>
                       <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                       <option value="" className='text-[16px] font-normal'>Sort By Size</option>
                       <option value="low" className='text-[15px] font-normal'>Low → High (MB)</option>
                       <option value="high" className='text-[15px] font-normal'>High → Low (MB)</option>
                        </select>
                </div>
            </div>

            {installedApps.length === 0 ? (
                <p className='text-center text-[24px] font-medium'>No Apps Installed</p>
            ) : (
                <div className='flex flex-col gap-5'>
                 {
                    sortedApp.map(app => (
                        <div key={app.id} className='flex justify-between items-center p-5 shadow-sm rounded-lg bg-white'>
                        <div className='flex items-center gap-5'>
                        <img src={app.image} className='w-[80px] h-[80] rounded-md' alt={app.title} />
                        <div className=''>
                            <h2 className='text-[20px] font-medium mb-[16px]'>{app.title}</h2>
                            <div className='flex gap-4 items-center'>
                            <p className='text-[#00b97f] flex gap-1 font-medium'><img src={download} alt="" />{app.downloads}</p>
                            <p className='flex gap-1 items-center text-[#ff8811] font-medium'><img className='w-[16px] h-[17px]' src={star} alt="" />{app.ratingAvg}</p>
                            <p className='text-[#627382] font-medium'>{app.size}</p>
                            </div>
                        </div>
                        </div>
                        <button onClick={() => uninstallApp(app.id)} className='bg-[#00d390] text-white py-2 px-4 rounded-md hover:bg-[#00b57a]'>Uninstall</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;