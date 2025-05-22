import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    const [isDark, setIsDark] = useState(() => {
            return localStorage.getItem('theme') === 'dark' ? true : false;
        })
        useEffect(() => {
            if(isDark){
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }, [isDark])
    return (
        <div className=' min-h-screen flex flex-col dark:bg-darkBg'>
            <ToastContainer/>
            <header>
                <Navbar isDark={isDark} setIsDark={setIsDark}></Navbar>
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