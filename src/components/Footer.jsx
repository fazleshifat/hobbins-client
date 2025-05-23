import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-purple-200 via-pink-300 to-yellow-100 text-black p-10">
            <aside>
                <img src="/assets/logo.png" className='w-20' alt="logo" />
                <p className="font-bold">
                    hobbins
                    <br />
                    Providing peace since 2020
                </p>
                <p>Copyright © 2027 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link className="hover:underline">Home</Link>
                    <Link className="hover:underline">Events</Link>
                    <Link className="hover:underline">Reviews</Link>
                    <Link className="hover:underline">About Us</Link>
                    <Link className="hover:underline">Contact</Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
