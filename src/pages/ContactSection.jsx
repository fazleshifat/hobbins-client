import React from 'react';

const ContactSection = () => {
    return (
        <main className="font-sans">
            {/* Hero Section */}
            <section className=" text-indigo-600 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Get in Touch with Hobbins</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Have a question, idea, or issue? We're here to listen and help you build better communities.
                    </p>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="max-w-[1300px] mx-auto bg-base-100 py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 border-b-2 border-purple-300">
                {[
                    {
                        icon: "📧",
                        title: "Email Support",
                        info: "support@hobbins.com",
                    },
                    {
                        icon: "📍",
                        title: "Our Office",
                        info: "Dhaka, Bangladesh",
                    },
                    {
                        icon: "💬",
                        title: "Live Chat",
                        info: "Launching soon in your dashboard",
                    },
                ].map(({ icon, title, info }) => (
                    <div
                        key={title}
                        className="text-center bg-white p-8 border border-purple-100 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-4xl mb-3">{icon}</div>
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
                        <p className="text-gray-600">{info}</p>
                    </div>
                ))}
            </section>

            {/* Contact Form */}
            <section className="max-w-[1300px] mx-auto bg-gray-100 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">📝 Send a Message</h2>
                    <form className="bg-white p-8 rounded-xl shadow space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                placeholder="What's this about?"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your message..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-[1300px] mx-auto bg-purple-600 text-white py-20 px-4 text-center rounded-b-full">
                <h2 className="text-3xl font-bold mb-4">Want to Talk to a Real Person?</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto">
                    We're building more than software — we're building relationships. Reach out anytime.
                </p>
                <a
                    href="/aboutUs"
                    className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
                >
                    Learn More About Us
                </a>
            </section>
        </main>
    );
};

export default ContactSection;