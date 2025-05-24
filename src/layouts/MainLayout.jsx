import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

const MainLayout = () => {

    // const Navigation = useNavigation()

    // if (Navigation.state === "loading") {
    //     return <Spinner />;
    // }

    return (
        <div className='dark:bg-gray-800 bg-base-300 min-h-screen'>
            <Navbar></Navbar>
            <div className='min-h-[100vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;