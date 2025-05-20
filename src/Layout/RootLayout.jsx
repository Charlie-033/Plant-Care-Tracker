import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <ToastContainer/>
            <header>
                <Navbar/>
            </header>
            <main className='flex-grow'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;