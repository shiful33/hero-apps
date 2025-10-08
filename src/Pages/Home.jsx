import google from '../assets/google.png';
import apple from '../assets/apple.png';
import hero from '../assets/hero.png';
import arrow from '../assets/arrow.png';
import downIcon from '../assets/downIcon.png';
import starIcon from '../assets/starIcon.png';
import playIcon from '../assets/playIcon.png';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useApps';

const Home = () => {
    const products = useLoaderData()
    const data = useProducts()
    const featuredProducts = products.slice(0, 8);
    
    
    return (
        <div>
            {/* Title Section */}
            <div className='mx-[20px] md:mx-[40px] lg:mx-0'>
            <h1 className='text-[38px] md:text-[56px] lg:text-[72px] font-extrabold lg:w-[597px] text-center mx-auto mt-[50px] lg:mt-[80px] lg:leading-[1.2]'>We Build <br/><span className='gradient-text'> Productive</span>{''} Apps </h1>
            <p className='lg:w-[1020px] lg:text-[20px] text-[#627382] text-center mx-auto lg:mt-[16px] mb-[40px]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center items-center gap-4 mb-[80px]'>
                <a className='flex items-center gap-2 btn bg-white text-black text-[20px] font-semibold border-[#e5e5e5]' href="https://play.google.com/store/games?hl=en" target='blank'><img src={google} alt="" />Google Play</a>
                <a className='flex items-center gap-2 btn bg-white text-black text-[20px] font-semibold border-[#e5e5e5]' href="https://www.apple.com/app-store/" target='blank'><img src={apple} alt="" />Apple Store</a>
            </div>
            {/* Hero Section */}
            <div className='flex justify-center'>
                <img src={hero} alt="" />
            </div>
        </div>
            <div className='w-full gradient-bg lg:min-h-[410px] lg:p-[80px] mb-[80px]  py-[60px] lg:py-[80px]'>
                <div>
                   <h1 className='text-[28px] md:text-[40px] lg:text-[45px] text-white font-semibold text-center mb-[40px]'>Trusted By Millions, Built For You</h1>
                </div>
                <div className='lg:flex justify-center items-center text-center gap-18'>
                    <div className='flex justify-center items-center gap-5'>
                        <div>
                        <p className='text-white mb-[16px]'>Total Download</p>
                        <h1 className='text-white text-[36px] md:text-[44px] lg:text-[64px] font-extrabold mb-[16px]'>29.6M</h1>
                        <p className='text-white'>21% more than last month</p>
                        </div>
                        <img className='bg-white rounded-lg w-[40px]' src={downIcon} alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <div>
                        <p className='text-white mb-[16px]'>Total Reviews</p>
                        <h1 className='text-white text-[36px] md:text-[44px] lg:text-[64px] font-extrabold mb-[16px]'>906K</h1>
                        <p className='text-white'>21% more than last month</p>
                        </div>
                        <img className='bg-white rounded-lg w-[40px]' src={starIcon} alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div>
                        <p className='text-white mb-[16px]'>Active Apps</p>
                        <h1 className='text-white text-[36px] md:text-[44px] lg:text-[64px] font-extrabold mb-[16px]'>132+</h1>
                        <p className='text-white'>31 more will Launch</p>
                        </div>
                        <img className='bg-white rounded-lg w-[40px]' src={playIcon} alt="" />
                    </div>
                </div>
            </div>
            {/* Trending Apps Container*/}
            <div>
               <div className='text-center mx-[40px]'>
                <h1 className='text-[36px] lg:text-[48px] font-bold mb-[16px] gradient-text flex justify-center items-center'>Trending Apps <img className='w-[80px]' src={arrow} alt="" /></h1>
                <p className='text-[20px] font-normal mb-[40px]'>Explore All Trending Apps on the Market developed by us</p>
               </div>
               {/* Products Container*/}
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-[42px] md:mx-[140px] lg:mx-[220px]'>
                  {
                    featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                  }
               </div>
               <div className='flex justify-center mt-[40px] mb-[80px]'>
                <Link to='/apps' className=' gradient-btn text-white py-[10px] px-[32px] rounded-[4px]'>Show All</Link>
               </div>
            </div>
        </div>
    );
};

export default Home;