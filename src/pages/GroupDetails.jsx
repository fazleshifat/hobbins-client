import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaUser, FaEnvelope, FaTag, FaImage } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {

    const groupData = useLoaderData();
    // Run on every page load

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
    console.log(today)
    console.log(deadLine)


    return (
        <div className='w-11/12 mx-auto min-h-screen flex items-center'>
            <div className="max-w-5xl mx-auto bg-base-300 shadow-lg rounded-2xl overflow-hidden p-6 border border-primary">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                        <img
                            src={image}
                            alt={name}
                            className="rounded-lg object-cover w-full h-72"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-2">{name}</h2>
                            <p className="text-base text-gray-700 mb-4">{description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
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


                                    <button className="btn btn-accent w-full text-white">Join Group</button>
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
    );
};

export default GroupDetails;