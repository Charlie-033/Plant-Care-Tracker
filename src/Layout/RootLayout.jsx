import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import ScrolltoTop from '../Components/Others/ScrolltoTop';

const RootLayout = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <ToastContainer/>
            <ScrolltoTop/>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow dark:bg-gray-900 dark:text-white'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;