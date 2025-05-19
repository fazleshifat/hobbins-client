import React from 'react';
import Banner from '../components/Banner';
import DemoCards from '../components/DemoCards';
import Faq from '../components/Faq';
import Chat from '../components/Chat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DemoCards></DemoCards>
            <Chat></Chat>
            {/* <CountDown></CountDown> */}
            {/* <Review></Review> */}
            <Faq></Faq>
        </div>
    );
};

export default Home;