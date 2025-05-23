import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ChatCard = ({ name, time, message, img, position }) => (
    <div className={`chat ${position} bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-lg border-2 border-transparent hover:border-pink-400 transition-all`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={img} alt={name} />
            </div>
        </div>
        <div className="chat-header font-semibold text-sm text-gray-700">
            {name}
            <time className="text-xs opacity-50 ml-2">{time}</time>
        </div>
        <div className="chat-bubble bg-gradient-to-br from-indigo-100 to-pink-100 text-gray-800">{message}</div>
        <div className="chat-footer opacity-50 text-xs">Seen</div>
    </div>
);

const ChatSection = () => {
    return (
        <Fade cascade damping={0.6}>
            <div className="w-full py-12 px-4 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 text-transparent bg-clip-text">
                    💬 Hobbyist Chat Rooms
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 p-1 rounded-2xl">
                        <ChatCard
                            name="Zara 🎨"
                            time="09:34"
                            message="Just finished a digital art piece, anyone wants to see?"
                            img="/assets/doll.jpeg"
                            position="chat-start"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 via-sky-100 to-emerald-100 p-1 rounded-2xl">
                        <ChatCard
                            name="John 📸"
                            time="09:40"
                            message="Photography meetup in the city this weekend 📷 Let's catchup"
                            img="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                            position="chat-end"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-1 rounded-2xl">
                        <ChatCard
                            name="Felix 🎸"
                            time="09:45"
                            message="Anyone recording music today? Let's collab! what you guyz say?"
                            img="/assets/felix.jpeg"
                            position="chat-start"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-teal-100 via-green-100 to-lime-100 p-1 rounded-2xl">
                        <ChatCard
                            name="Justin 🧶"
                            time="09:47"
                            message="Knitting live stream starting in 15 mins! Come on let's hangup"
                            img="/assets/justin).jpeg"
                            position="chat-end"
                        />
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default ChatSection;
