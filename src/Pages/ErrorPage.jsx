import React from 'react';
import { Link, useRouteError } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import error404 from '../assets/error404.png';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
        <NavBar />
        <div className='flex flex-col justify-center items-center text-center px-[16px] min-h-[80vh] bg-[#e6e6e6]'>
            <div className='flex flex-col items-center mb-[30px]'>
                <img src={error404} alt="" className='w-[280px] md:w-[330px] lg:w-[450px]' />
                
            </div>

            <div>
                <h2 className='text-[36px] font-bold mb-[8px]'>Oops, page not found!</h2>
                <p className='mb-[30px]'>The page you are looking for is not available.</p>
                <Link to='/' className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md'>Go Back Home</Link>

                {/* {process.env.NODE_ENV === "development" && (
                    <p className='text-[14px] text-[#627382] mt-[16px]'>{error?.message}</p>
                )} */}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ErrorPage;