import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Preloader from '../Pages/Preloader';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#F5F5F5]'>
            <Preloader>
            <NavBar />
            <div className='flex-1'>
            <Outlet />
            </div>
            <Footer />
            </Preloader>
        </div>
    );
};

export default MainLayout;