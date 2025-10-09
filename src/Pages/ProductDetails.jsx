import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useApps';
import bigdownload from '../assets/bigdownload.png';
import starrr from '../assets/starrr.png';
import reviewImg from '../assets/reviewImg.png';
import RatingBars from './RatingBars';
import { InstallContext } from '../Context/InstallContext';
import { toast } from 'react-toastify';
import NotFoundApps from "../Pages/NotFoundApps";

const ProductDetails = () => {
    const { id } = useParams();
    const { products, loading, error } = useProducts();
    const { installApp, installedApps } = useContext(InstallContext);

    const product = products.find(p => String(p.id) === id);
    const [ isInstalled, setIsInstalled ] = useState(
        installedApps.some(app => String(app.id) === id)
    );

    if (loading) {
        return <div>Loading Product Details</div>
    }

    if (error) {
        return <div>Error Loading Apps: {error.message}</div>
    }

    if (!product) {
        return (
            <div>
                <NotFoundApps />
            </div>
        )
    }

    const handleInstall = () => {
        if (!isInstalled) {
            installApp(product);
            setIsInstalled(true);
            toast.success(`Yahoo 🔥 !! ${product.title} Installed Successfully`);
        }
    };

    const { image, title, reviews, companyName, ratingAvg, downloads, size, ratings, description } = product;
    
    return (
        <div>
            <div className='lg:flex max-w-full items-center gap-10 pb-[30px] border-b-2 border-[#e0e0e0] p-[80px]'>
            <div>
               <img className='w-[350px] h-[350px] rounded-[18px]' src={image} alt="" />
            </div>
            <div className='mt-6 lg:mt-0'>
               <h1 className='text-[20px] lg:text-[32px] font-bold'>{title}</h1>
               <h4 className='lg:text-[30px] text-[#627382] pb-[20px] border-b-2 border-[#e0e0e0]'>Developed by: <span className='gradient-text'>{companyName}</span></h4>

               <div className='flex items-center my-[30px] gap-10'>
                <div>
                   <img src={bigdownload} alt="" />
                   <p className='my-[8px]'>Downloads</p>
                   <h2 className='text-[40px] font-extrabold'>{downloads}</h2>
                </div>
                <div>
                   <img src={starrr} alt="" />
                   <p className='my-[8px]'>Average Ratings</p>
                   <h2 className='text-[40px] font-extrabold'>{ratingAvg}</h2>
                </div>
                <div>
                   <img src={reviewImg} alt="" />
                   <p className='my-[8px]'>Total Reviews</p>
                   <h2 className='text-[40px] font-extrabold'>{reviews}</h2>
                </div>
               </div>
               <button
               onClick={handleInstall} disabled={isInstalled}
               className={`btn bg-[#00d390] text-white text-[20px] font-semibold py-[24px] px-[20px] ${isInstalled ? 'bg-[#00d390]' : 'bg-[#00d390]'}`}>{isInstalled ? 'Installed' : `Install Now (${size})`}</button>
            </div>
        </div>
        <div>
            <RatingBars ratings={ratings} />
            <div className='w-full p-[80px]'>
                <h2 className='text-[20px] font-semibold mb-[16px]'>Description</h2>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;