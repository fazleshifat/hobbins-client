import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {

    const groupsData = useLoaderData();
    const { name, category, startDate, maxMembers, meetingLocation, image, userName, userEmail, description } = groupsData[0];

    return (
        <div className='grid grid-cols-1 min-h-screen md:grid-cols-3 max-w-11/12 p-8 gap-6 mx-auto'>

            {
                groupsData.map(group => (
                    <div className="card bg-base-300 h-fit shadow-lg">
                        <figure className="px-10 pt-10">
                            <img
                                src={group.image}
                                alt="Group"
                                className="rounded-xl h-60 w-full"
                            />
                        </figure>
                        <div className="card-body mx-auto text-center space-y-2 ">
                            <h2 className="card-title text-2xl mx-auto text-center">{group.name}</h2>

                            <div className="grid grid-cols-1 gap-2 mx-auto text-sm">
                                <p><span className="font-semibold">Category:</span> {group.category}</p>
                                <p><span className="font-semibold">Start Date:</span> {group.startDate}</p>
                                <p><span className="font-semibold">Location:</span> {group.meetingLocation}</p>
                                {/* <p><span className="font-semibold">Max Members:</span> {parseInt(group.maxMembers)}</p>
                                <p><span className="font-semibold">Host:</span> {group.userName}</p>
                                <p><span className="font-semibold">Email:</span> {group.userEmail}</p>
                           
                                <p><span className="font-semibold flex">Description:</span>
                                    {group.description}
                                </p> */}
                            </div>

                            <div className="card-actions justify-center mt-4">
                                <Link to={`/group/${group._id}`} className="btn btn-outline btn-primary">See More</Link>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default AllGroups;