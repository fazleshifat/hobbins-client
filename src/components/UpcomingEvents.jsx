import React, { use } from 'react';

const eventDataPromise = fetch('/upcomingevent.json').then(res => res.json());

const UpcomingEvents = () => {

    const events = use(eventDataPromise);
    console.log(events)

    return (
        <div className="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-300 py-12 px-6 min-h-screen">
            <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-10">
                Upcoming Events
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {events.map(event => (
                    <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src={event.image} alt={event.title} className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">{event.title}</h3>
                            <p className="text-sm font-medium text-gray-500 mb-2">📅 {event.date}</p>
                            <p className="text-gray-700 mb-4">{event.description}</p>
                            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;
