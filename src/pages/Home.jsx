import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Faq from '../components/Faq';
import { useLoaderData, useNavigation } from 'react-router';
import ChatSection from '../components/ChatSection';
import OngoingEvent from '../components/OngoingEvent';
import UpcomingEvents from '../components/UpcomingEvents';
import ReactReveal from '../components/ReactReveal';
import { Fade } from 'react-awesome-reveal';
import Spinner from '../components/Spinner';

const Home = () => {

    const groupsData = useLoaderData();

    // console.log(groupsData)

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }


    return (
        <Fade cascade damping={0.5}>
            <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-12 md:px-6 min-h-screen'>
                <ReactReveal></ReactReveal>
                <Banner></Banner>
                <OngoingEvent groupsData={groupsData}></OngoingEvent>
                <UpcomingEvents></UpcomingEvents>
                <ChatSection></ChatSection>
                <Faq></Faq>
            </div>
        </Fade>

    );
};

export default Home;