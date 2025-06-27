import React from 'react';
import { Fade } from 'react-awesome-reveal';

const sections = [
    {
        emoji: '🚀',
        image: 'https://i.ibb.co/cXph3KRq/mission.png',
        title: 'Our Mission',
        text: "We're on a journey to empower people through connected communities and events that matter.",
        points: ['Build with passion ❤️', 'Connect meaningfully 🤝', 'Grow together 🌱'],
        bg: 'bg-gradient-to-r from-indigo-300 to-purple-100'
    },
    {
        emoji: '🎁',
        image: 'https://i.ibb.co/3yNyjWPT/offer.png',
        title: 'What We Offer',
        text: "GroupVerse lets you create, explore, and engage in a vibrant ecosystem of like-minded people.",
        points: ['Create and join groups 👥', 'Real-time event updates 📅', 'Instant interaction 💬'],
        bg: 'bg-gradient-to-r from-pink-300 to-red-200'
    },
    {
        emoji: '💡',
        image: 'https://i.ibb.co/qFJKTJS3/why.png',
        title: 'Why Choose Us',
        text: "We combine elegant design with powerful tools to create a platform that feels like home.",
        points: ['Clean UI 🧼', 'Blazing fast ⚡', 'Continuously evolving 🔧'],
        bg: 'bg-gradient-to-r from-purple-300 to-orange-100'
    }
];

const WhyChooseUS = () => {
    return (

        <section className='max-w-[1300px] mx-auto px-4'>
            <div className="py-10 overflow-hidden">
                <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-12">
                    Why Choose Us
                </h2>

                {sections.map((section, index) => (
                    <Fade key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                        <div className={`${section.bg} w-8/12 mx-auto m-3 shadow-2xl rounded-4xl transition-all`}>
                            <div className={`flex flex-col md:flex-row justify-center items-center md:px-8 py-5 gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className=''><img className='w-96' src={section?.image} alt="image" /></div>
                                <div className="md:w-6/12 px-5">
                                    <h3 className="text-3xl font-bold text-gray-800 mb-3">{section.title}</h3>
                                    <p className="text-gray-600 text-lg mb-4">{section.text}</p>
                                    <ul className="space-y-1 text-gray-700 text-base list-disc list-inside">
                                        {section.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUS;
