import React from "react";

const Support = () => {
    return (
        <main className="font-sans">
            {/* Hero Section */}
            <section className="text-purple-600 py-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Support at Hobbins</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Whether you're stuck, curious, or just need help — we’re here for you.
                    </p>
                </div>
            </section>

            {/* Two-column Info Section */}
            <section className="max-w-[1300px] bg-base-100 rounded-t-4xl border-b-2 border-purple-300 mx-auto grid grid-cols-1 md:grid-cols-2">
                {/* Email Support */}
                <section className="py-16 px-4 border-r-2 border-purple-300 hover:shadow-lg transition">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-purple-600 mb-4">📧 Email Us</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            Have a question or issue? Send us a message anytime at{" "}
                            <span className="text-purple-700 font-medium">support@hobbins.com</span> and we’ll get back to you within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Location or Chat */}
                <section className="py-16 px-4 hover:shadow-lg transition">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">💬 Live Chat</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            We’re soon launching a live chat for instant help directly from your dashboard. Stay tuned!
                        </p>
                    </div>
                </section>
            </section>

            {/* Support Features */}
            <section className="max-w-[1300px] mx-auto bg-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-purple-600 mb-10">🔧 Help Topics We Cover</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: "🔐", title: "Login Issues", desc: "Having trouble signing in? We can help reset or recover your access." },
                            { icon: "👥", title: "Group Setup", desc: "Need help setting up or customizing a group? Let’s walk through it." },
                            { icon: "⚙️", title: "Account Settings", desc: "Manage profile details, notifications, and group roles." },
                            { icon: "📊", title: "Dashboard Bugs", desc: "Found a glitch or bug? Report it so we can fix it quickly." },
                            { icon: "📦", title: "Feature Requests", desc: "Got an idea? We’re always improving with your help." },
                            { icon: "🛡️", title: "Security Concerns", desc: "Your safety matters. Report anything suspicious or unsafe." },
                        ].map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-gray-50 border border-gray-200 rounded-xl shadow hover:shadow-lg p-6 transition"
                            >
                                <div className="text-4xl mb-3">{icon}</div>
                                <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="max-w-[1300px] mx-auto bg-indigo-50 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">📨 Submit a Request</h2>
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
                                placeholder="Describe your issue..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                            >
                                Submit Ticket
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1300px] mx-auto rounded-b-full bg-purple-600 text-white py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Need Help Right Away?</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto">
                    Check our help topics or reach out directly — we’re always here to help.
                </p>
                <a
                    href="/aboutUs"
                    className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
                >
                    Learn About Our Mission
                </a>
            </section>
        </main>
    );
};

export default Support;