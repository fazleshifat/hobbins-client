import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider/AuthContexts';
import DashboardNavigation from './DashboardNavigation';
import { Outlet } from 'react-router';
import SidePanel from './SidePanel';

const Dashboard = () => {

    const { user, userSignOut } = use(AuthContext);



    return (
        <>
            {user && <>
                <div className='block md:hidden'>
                    <Navbar></Navbar>
                </div>
                <section className="max-w-full h-[100vh] mx-auto p-2 md:p-5 flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className='hidden md:block md:w-3/12'>
                        <DashboardNavigation></DashboardNavigation>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-9/12 md:pl-4 overflow-y-auto">
                        <Outlet />
                    </div>
                </section>
                <SidePanel></SidePanel>
            </>}
        </>
    );
};

export default Dashboard;