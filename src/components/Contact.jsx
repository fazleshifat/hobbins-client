import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <div className="min-h-screen overflow-hidden py-20 px-6 items-center">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text & Contact Info */}
                <Fade direction="left" triggerOnce>
                    <div>
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-gray-700 mb-6 text-lg">
                            Have a question or want to collaborate? Reach out and let’s talk.
                        </p>

                        <div className="space-y-4 text-gray-800">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-purple-500 text-xl" />
                                <span>hello@example.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-purple-500 text-xl" />
                                <span>+123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-purple-500 text-xl" />
                                <span>123 Main Street, Cityville</span>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* Form */}
                <Fade direction="right" triggerOnce>
                    <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </Fade>

            </div>
        </div>
    );
};

export default Contact;
