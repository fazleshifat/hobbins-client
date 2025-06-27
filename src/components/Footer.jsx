import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <Fade cascade damping={0.5}>

            <footer className="footer footer-horizontal footer-center dark:bg-none dark:border border-t-indigo-500  dark:bg-till-900 bg-gradient-to-b from-purple-100 via-indigo-100 to-indigo-200 text-black p-10">
                <aside className='dark:text-gray-400'>
                    <img src="/assets/logo.png" className='w-20' alt="logo" />
                    <p className="font-bold">
                        hobbins
                        <br />
                        Providing peace since 2020
                    </p>
                    <p>Copyright © 2027 - All right reserved</p>
                </aside>
                <nav>
                    <div className="flex flex-wrap gap-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        <Link className="hover:underline">Home</Link>
                        <Link className="hover:underline">Events</Link>
                        <Link className="hover:underline">Reviews</Link>
                        <Link className="hover:underline">About Us</Link>
                        <Link className="hover:underline">Contact</Link>
                    </div>
                </nav>
                <nav>
                    <div className="flex flex-wrap gap-4">
                        <a href='https://github.com/fazleshifat' target='_blank'><FaGithub className='text-2xl' /></a>
                        <a href='https://web.facebook.com/al.fazle.shifat/' target='_blank'><FaFacebookSquare className='text-2xl' /></a>
                        <a href='https://www.linkedin.com/in/fazle-shifat-5490a8270/' target='_blank'><FaLinkedin className='text-2xl' /></a>
                    </div>
                </nav>
            </footer>
        </Fade>
    );
};

export default Footer;
