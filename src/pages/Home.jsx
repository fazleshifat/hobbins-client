import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Faq from '../components/Faq';
import { useLoaderData } from 'react-router';
import ChatSection from '../components/ChatSection';
import OngoingEvent from '../components/OngoingEvent';

const Home = () => {

    const groupsData = useLoaderData();
    console.log(groupsData)

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
        <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-12 md:px-6 min-h-screen'>
            <Banner></Banner>
            <OngoingEvent groupsData={groupsData}></OngoingEvent>
            <ChatSection></ChatSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;