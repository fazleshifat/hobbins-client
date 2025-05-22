import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-black px-6 py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
                {/* Logo & Description */}
                <div>
                    <Link to="/" className="flex items-center gap-3 mb-4">
                        <img src='/assets/logo.png' alt="logo" className="w-12 h-12 rounded-full shadow-md" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 via-white to-pink-200 text-transparent bg-clip-text">Hobbins</span>
                    </Link>
                    <p className="text-sm text-pink-100 leading-relaxed max-w-xs">
                        Hobbins is your creative space to explore hobbies, share your skills, and meet fellow enthusiasts worldwide.
                    </p>
                </div>

                {/* Quick Links (Optional) */}
                <div>
                    <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
                    <ul className="space-y-2 text-pink-100 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/events" className="hover:text-white">Events</Link></li>
                        <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                    </ul>
                </div>

                {/* Social Icons */}
                {/* <div>
                    <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
                    <div className="flex gap-6">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 fill-white hover:fill-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828..."></path>
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 fill-white hover:fill-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246..."></path>
                            </svg>
                        </a>
                    </div>
                </div> */}
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm mt-12 text-pink-200 border-t border-pink-300 pt-6">
                © {new Date().getFullYear()} Hobbins. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
