import React, { useState } from 'react';
import useProducts from '../Hooks/useApps';
import ProductCard from '../Components/ProductCard';
import searchBox from '../assets/searchBox.png';
import visual from '../assets/visual.png';
import application from '../assets/application.png';


const Apps = () => {
    const { products, loading, error } = useProducts();
    const [ search, setSearch ] = useState('');

    const term = (search || '').trim().toLocaleLowerCase()
    
    const searchedProducts = term && Array.isArray(products) ? products.filter(product => product.title?.toLocaleLowerCase().includes(term)) : products || [];
    
    const handleShowAll = () => {
        setSearch('');
    }

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error Loading apps: {error.message}</p>
    
    return (
        <div className='mb-[100px]'>
               <div>
                <div className='text-center mt-[80px]'>
                    <h1 className='gradient-text text-[48px] font-bold flex justify-center items-center gap-4'><img className='mr-[-18px]' src={application} alt="" />ur All Applications <img src={visual} alt="" /></h1>
                    <p className='mb-[40px] text-[20px]'><small>Explore All Apps on the Market developed by us. We code for Millions</small></p>
                </div>
                <div className='text-center mx-[40px] flex justify-between items-center md:mx-[90px] lg:mx-[220px] mt-[50px]'>
                    <h1 className='text-[18px] lg:text-[22px] font-semibold mb-[16px]'><span>({searchedProducts.length})</span> Apps Found</h1>
                    <label className="input mb-[16px]">
                    <img src={searchBox} alt="" />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
                    </label>
                </div>
                
               </div>
               {/* Products Container*/}
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-[42px] md:mx-[140px] lg:mx-[220px]'>
                  {searchedProducts.length > 0 ? (
                    searchedProducts.map(product => (
                    <ProductCard key={product.id} product={product}/>
                    
                    ))
                ) : (
                    <div className='text-center w-full mx-auto ml-[570px] mt-[100px]'>
                        <h2 className='gradient-text text-[40px] font-bold'>No Apps Found</h2>
                            <button onClick={handleShowAll} className=' gradient-btn text-white py-[10px] px-[32px] rounded-[4px] mt-[16px] font-medium'>
                                Show All Apps
                            </button>
                    </div>
                  )}
               </div>
            </div>
    );
};

export default Apps;