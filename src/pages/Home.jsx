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
import AboutUs from '../components/AboutUs';
import Review from '../components/Review';
import Contact from '../components/Contact';

const Home = () => {

    const groupsData = useLoaderData();


    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }
    window.scrollTo(0, 0);


    return (
        <Fade cascade damping={0.5}>
            <div>
                <ReactReveal></ReactReveal>
                <Banner></Banner>
                <OngoingEvent groupsData={groupsData}></OngoingEvent>
                <UpcomingEvents></UpcomingEvents>
                <ChatSection></ChatSection>
                <AboutUs></AboutUs>
                <Review></Review>
                <Contact></Contact>
            </div>
        </Fade>

    );
};

export default Home;