import React, { use } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const eventDataPromise = fetch('/upcomingevent.json').then(res => res.json());

const UpcomingEvents = () => {

    const events = use(eventDataPromise);

    return (
        <div className="dark:bg-none dark:bg-indigo-950 rounded-3xl bg-gradient-to-bl from-pink-100 via-indigo-100 to-indigo-100 py-12 px-6 min-h-screen">
            <Fade cascade damping={0.1}>
                <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500  to-purple-300 mb-10">
                    Upcoming Events
                </h2>
            </Fade>

            <Fade cascade damping={0.1}>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {events.map(event => (
                        <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
                            <img src={event.image} alt={event.title} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-purple-700 mb-2">{event.title}</h3>
                                <p className="text-sm font-medium text-gray-500 mb-2">📅 {event.date}</p>
                                <p className="text-gray-700 mb-4">{event.description}</p>
                                <Link to='/eventDetails' className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90">
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default UpcomingEvents;
