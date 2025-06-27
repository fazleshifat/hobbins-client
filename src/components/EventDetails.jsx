import React from 'react';
import { Link } from 'react-router';

const EventDetails = () => {
    return (
        <div className='flex items-center p-5'>
            <div className="w-11/12 min-h-[90vh] mx-auto flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 text-center rounded-lg shadow-lg">

                {/* Logo - replace src with your logo */}
                <img
                    src="/assets/logo.png"
                    alt="Site Logo"
                    className="w-24 h-24 mb-6 animate-pulse"
                />

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-700 animate-pulse">
                    Ongoing Event Alert!
                </h1>

                {/* Message */}
                <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-700">
                    👀 Keep your eyes on our website! An exciting event is currently happening. Don’t miss out on the latest updates, activities, and special surprises.
                </p>

                {/* Some bullet points with emojis */}
                <ul className="list-none space-y-4 text-left max-w-md text-purple-800 font-semibold text-lg">
                    <li>🎉 Exclusive giveaways during the event</li>
                    <li>🕒 Live updates every hour</li>
                    <li>🤝 Connect with fellow community members</li>
                    <li>📅 Event lasts until the end of this week</li>
                </ul>
                <Link to='/' className='btn bg-sky-500 text-white my-2'>Back to homepage</Link>
            </div>
        </div>
    );
};

export default EventDetails;
