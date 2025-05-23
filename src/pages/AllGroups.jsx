import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {

    const groupsData = useLoaderData();
    // console.log(groupsData)


    return (
        <>
            <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                All Group
            </h1>
            <div className='grid grid-cols-1 min-h-screen md:grid-cols-3 max-w-11/12 p-2 md:p-8 gap-6 mx-auto'>


                {
                    groupsData.map(group => (
                        <div key={group._id} className="card bg-base-300 shadow-lg h-fit w-full max-w-md mx-auto md:max-w-lg">
                            <figure className="px-4 pt-6 md:px-10 md:pt-10">
                                <img
                                    src={group.image}
                                    alt="Group"
                                    className="rounded-xl w-full h-40 object-cover md:h-60"
                                />
                            </figure>
                            <div className="card-body text-center space-y-2 px-4 md:px-6">
                                <h2 className="card-title mx-auto text-lg md:text-2xl">{group.name}</h2>

                                <div className="grid grid-cols-1 gap-2 text-sm md:text-base">
                                    <p><span className="font-semibold">Category:</span> {group.category}</p>
                                    <p><span className="font-semibold">Start Date:</span> {group.startDate}</p>
                                    <p><span className="font-semibold">Location:</span> {group.meetingLocation}</p>
                                    {/* Uncomment for full display */}
                                    {/* <p><span className="font-semibold">Max Members:</span> {parseInt(group.maxMembers)}</p>
                            <p><span className="font-semibold">Host:</span> {group.userName}</p>
                            <p><span className="font-semibold">Email:</span> {group.userEmail}</p>
                            <p><span className="font-semibold">Description:</span> {group.description}</p> */}
                                </div>

                                <div className="card-actions justify-center mt-4">
                                    <Link to={`/groups/${group._id}`} className="btn btn-outline btn-primary btn-sm md:btn-md">See More</Link>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    );
};

export default AllGroups;