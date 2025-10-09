import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#F5F5F5]'>
            <NavBar />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;