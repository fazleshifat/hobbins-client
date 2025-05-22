import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import DemoCards from '../components/DemoCards';
import Faq from '../components/Faq';
import Chat from '../components/Chat';
import AllGroups from './AllGroups';
import { useLoaderData } from 'react-router';

const Home = () => {

    const groupsData = useLoaderData();
    // console.log(groupsData)

    const [localLoading, setLocalLoading] = useState(true);

    useEffect(() => {
        if (groupsData) {
            setLocalLoading(false);
        }
    }, [groupsData]);


    if (localLoading) {
        return (
            <div className="h-screen bg-base-100  flex justify-center items-center text-xl font-semibold">
                <span className="loading loading-circle text-black w-12"></span>
            </div>
        );
    }

    return (
        <div>
            <Banner></Banner>
            <AllGroups groupsData={groupsData}></AllGroups>
            <Chat></Chat>
            {/* <CountDown></CountDown> */}
            {/* <Review></Review> */}
            <Faq></Faq>
        </div>
    );
};

export default Home;