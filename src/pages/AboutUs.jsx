import React from "react";

const AboutUs = () => {
    return (
        <main className="font-sans">
            {/* Hero Section */}
            <section className="text-indigo-500 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to Hobbins</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Empowering communities to build, manage, and grow — all in one platform.
                    </p>
                </div>
            </section>

            <section className="max-w-[1300px] bg-base-100 rounded-t-4xl border-b-2 border-indigo-300 mx-auto grid grid-cols-1 md:grid-cols-2">
                {/* Mission */}
                <section className="py-16 px-4 border-r-2 border-indigo-300 hover:shadow-lg">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">🚀 Our Mission</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            Our mission is to empower hobbyists, creators, and learners with simple but powerful tools
                            to build and manage communities that thrive. Whether you're starting a tech team or a book club,
                            Hobbins makes it easy to connect and collaborate.
                        </p>
                    </div>
                </section>

                {/* Vision */}
                <section className="py-16 px-4 hover:shadow-lg">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">🌍 Our Vision</h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            We envision a future where technology makes community-building effortless — where people from
                            all over the world can come together around shared interests and grow something meaningful.
                        </p>
                    </div>
                </section>
            </section>

            {/* Features */}
            <section className="max-w-[1300px] mx-auto bg-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-indigo-600 mb-10">💡 What Hobbins Offers</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: "🔐", title: "Secure Access", desc: "Protected login and role-based group permissions." },
                            { icon: "👥", title: "Group Management", desc: "Create, edit, and monitor community groups easily." },
                            { icon: "📦", title: "Organized Dashboards", desc: "Keep your members informed and engaged." },
                            { icon: "📊", title: "Insights & Analytics", desc: "Understand your group's performance." },
                            { icon: "⚙️", title: "Integrations", desc: "Connect with tools you already use." },
                            { icon: "💬", title: "Communication", desc: "Enable smooth interaction between members." },
                        ].map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-gray-50 border border-gray-200 rounded-xl shadow hover:shadow-lg p-6 transition"
                            >
                                <div className="text-4xl mb-3">{icon}</div>
                                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Info */}
            <section className="max-w-[1300px] mx-auto bg-blue-50 py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">👨‍💻 The Creator</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                        Hobbins is built by <span className="font-bold text-blue-800">Felix Tavio</span> — a
                        passionate full-stack developer with a strong foundation in React, Node.js, MongoDB, and
                        Firebase. Driven by community, UI/UX excellence, and clean architecture, Felix designed Hobbins to be flexible, accessible, and scalable.
                    </p>
                </div>
            </section>

            {/* Our Values */}
            <section className="max-w-[1300px] mx-auto bg-white py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-indigo-600 text-center mb-10">🌟 Our Core Values</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Community First</h3>
                            <p className="text-gray-700">We prioritize people, conversations, and shared growth.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Simplicity in Design</h3>
                            <p className="text-gray-700">Everything should feel intuitive and joyful to use.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Security & Trust</h3>
                            <p className="text-gray-700">Your data and communities are safe with us.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Open Innovation</h3>
                            <p className="text-gray-700">We listen to feedback and evolve with your needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-[1300px] mx-auto rounded-b-full bg-indigo-600 text-white py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Group?</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto">
                    Join Hobbins today and take the first step toward creating a vibrant, organized, and thriving community.
                </p>
                <a
                    href="/all-groups"
                    className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
                >
                    Get Started
                </a>
            </section>
        </main>
    );
};

export default AboutUs;