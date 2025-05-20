import React from 'react';
import Banner from '../components/Banner';
import DemoCards from '../components/DemoCards';
import Faq from '../components/Faq';
import Chat from '../components/Chat';
import AllGroups from './AllGroups';
import { useLoaderData } from 'react-router';

const Home = () => {

    const groupsData = useLoaderData();
    // console.log(groupsData)

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