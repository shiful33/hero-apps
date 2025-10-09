import React from 'react';
import { Link } from 'react-router';
import errorPage from '../assets/errorPage.png';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center px-[16px] min-h-[80vh] bg-[#e6e6e6]'>
            <div className='flex flex-col items-center mb-[30px] animate-float hover:animate-wiggle transition-all'>
                <img src={errorPage} alt="Ghost 404" className='w-[200px] md:w-[280px] lg:w-[350px]' />
                
            </div>

            <div>
                <h2 className='text-[36px] font-bold mb-[8px]'>Oops, Page Is Not Found!</h2>
                <p className='mb-[30px]'>The page you are looking for is not available.</p>
                <Link to='/' className='gradient-bg hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md'>Go Back Home</Link>

                {/* {process.env.NODE_ENV === "development" && (
                    <p className='text-[14px] text-[#627382] mt-[16px]'>{error?.message}</p>
                )} */}
            </div>
        </div>
    );
};

export default NotFound;