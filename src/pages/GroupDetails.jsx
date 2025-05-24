import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaUser, FaEnvelope, FaTag, FaImage } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {

    const groupData = useLoaderData();

    // Jump instantly to top-left
    window.scrollTo(0, 0);


    const {
        name,
        category,
        description,
        meetingLocation,
        maxMembers,
        startDate,
        image,
        userName,
        userEmail
    } = groupData


    const today = new Date();
    const deadLine = new Date(startDate);

    const [joined, setJoined] = useState(false);

    const handleJoin = () => {
        setJoined(!joined);
    };


    return (

        <Fade cascade damping={0.5}>

            <div className='w-11/12 mx-auto min-h-screen py-8 md:py-0 flex items-center'>
                <div className="max-w-5xl mx-auto bg-base-300 shadow-lg rounded-2xl overflow-hidden p-6 border border-primary">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <img
                                src={image}
                                alt={name}
                                className="rounded-lg object-cover md:w-full md:h-72"
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                            <div>
                                <h2 className="text-xl md:text-3xl font-bold text-primary mb-2">{name}</h2>
                                <p className="text-base text-gray-500 mb-4">{description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm dark:text-gray-400 text-gray-800">
                                    <div className="flex items-center gap-2">
                                        <FaTag className="text-primary" />
                                        <span className="font-semibold">Category:</span> {category}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-primary" />
                                        <span className="font-semibold">Start Date:</span> {startDate}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary" />
                                        <span className="font-semibold">Location:</span> {meetingLocation}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUsers className="text-primary" />
                                        <span className="font-semibold">Max Members:</span> {maxMembers}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-primary" />
                                        <span className="font-semibold">Host:</span> {userName}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope className="text-primary" />
                                        <span className="font-semibold">Email:</span> {userEmail}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                {
                                    today < deadLine ?


                                        <div className="text-center mt-4">
                                            {joined ? (

                                                <div className="flex gap-2">
                                                    <button
                                                        disabled
                                                        className="btn btn-disabled w-7/12 py-2 rounded-full font-semibold cursor-not-allowed"
                                                    >
                                                        ✅ Joined
                                                    </button>
                                                    <button
                                                        onClick={handleJoin}
                                                        className="btn w-5/12 py-2 dark:btn-accent light:btn-outline rounded-full font-semibold"
                                                    >
                                                        Cancel Join
                                                    </button>
                                                </div>


                                            ) : (
                                                <button
                                                    onClick={handleJoin}
                                                    className="btn inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                                                >
                                                    Join Now
                                                </button>
                                            )}
                                        </div>
                                        :
                                        <>
                                            <button className="btn btn-disabled btn-accent w-full text-gray-400">Joining Deadline is over</button>
                                            <p className='text-sm text-center text-red-500'>keep in touch to know about further events of this Group!</p>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fade>
    );
};

export default GroupDetails;