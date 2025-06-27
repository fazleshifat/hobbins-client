import React from 'react';
import DashboardNavigation from './DashboardNavigation';

const SidePanel = () => {
    return (
        <div className="z-50 drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className=' md:w-3/12 h-screen md:h-fit dark:border-2 rounded-2xl'>
                    <DashboardNavigation></DashboardNavigation>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;