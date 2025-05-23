import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
    return (
        <Fade cascade damping={0.5}>
            <div className="w-full py-12 px-6 md:px-16 bg-gradient-to-br">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 text-transparent bg-clip-text">
                    💡 Frequently Asked Questions
                </h2>

                <div className="join join-vertical w-full mx-auto shadow-xl bg-white/30 backdrop-blur-md rounded-xl overflow-hidden border border-purple-200">
                    <div className="collapse collapse-arrow join-item border-b border-purple-100">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title font-semibold text-lg">
                            How do I create an account?
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            Click the <strong>“Sign Up”</strong> button at the top right and follow the steps. You can add your photo and hobbies right during sign-up!
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-b border-purple-100">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            Can I join hobby groups?
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            Absolutely! Visit the "Communities" page, browse available hobby groups, and join the ones you're interested in.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-b border-purple-100">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            How do I share my hobbies or creations?
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            Once logged in, click on "Post a Hobby" from your dashboard. You can upload images, videos, and descriptions to showcase your passion!
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border-b border-purple-100">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            I forgot my password. What should I do?
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            Click <strong>“Forgot Password”</strong> on the login page and check your email to reset it.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            Is this platform free to use?
                        </div>
                        <div className="collapse-content text-sm text-gray-700">
                            Yes! Our platform is completely free for hobbyists to share, connect, and collaborate. Some premium features may be introduced in the future.
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default Faq;
