import React from 'react';
import { Fade } from 'react-awesome-reveal';

const reviews = [
    {
        image: 'https://i.ibb.co/5hfqQ4s4/client1.png',
        name: 'Junaid',
        role: 'Event Organizer',
        feedback: 'This platform made it super easy to manage my community. Love the experience!',
        bg: 'from-pink-200 to-purple-200'
    },
    {
        image: 'https://i.ibb.co/wNz3rRsk/client2.png',
        name: 'Ariana',
        role: 'Developer & Member',
        feedback: 'Sleek UI and real-time events? I’m sold. It’s better than other platforms I’ve tried.',
        bg: 'from-indigo-200 to-orange-300'
    },
    {
        image: 'https://i.ibb.co/7tzSb6NW/client3.png',
        name: 'Jack',
        role: 'Group Leader',
        feedback: 'The live chat and group features helped me grow my audience fast. So smooth!',
        bg: 'from-indigo-200 to-blue-200'
    },
    {
        image: 'https://i.ibb.co/ycdqfmKY/client4.png',
        name: 'Moriyom',
        role: 'Entrepreneur',
        feedback: 'The live chat and group features helped me grow my audience fast. So smooth!',
        bg: 'from-indigo-200 to-blue-200'
    }
];

const Review = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 min-h-screen overflow-hidden py-20 px-6">
            <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-16">
                What Our Users Say
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
                {reviews.map((review, index) => (
                    <Fade key={index} direction="up" triggerOnce={false}>
                        <div className={`rounded-full w-72 h-72 flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br ${review.bg} shadow-xl transition-transform hover:scale-105`}>
                            <img src={review?.image} className='w-30' alt="client" />
                            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                            <span className="text-sm text-gray-600 italic mb-2">{review.role}</span>
                            <p className="text-gray-700 text-sm leading-relaxed">{review.feedback}</p>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default Review;
