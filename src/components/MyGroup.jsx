import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { FaCalendarAlt, FaTag, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { MdAttachEmail } from "react-icons/md";

const MyGroup = () => {

    const { user } = use(AuthContext);

    const groups = useLoaderData();
    const remainingGroup = groups.filter(group => group.userEmail === user.email)
    // console.log(remainingGroup)

    return (
        <div className="max-w-11/12 mx-auto p-4">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                My Groups
            </h1>

            {/* Table Layout */}
            <div className="overflow-x-auto bg-base-100 rounded-lg shadow-lg">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            <th></th>
                            <th className="p-4">Group Info</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remainingGroup.map((myGroup, index) => (

                                <tr key={myGroup._id} className="hover:bg-base-200">
                                    {/* Index */}
                                    <td className="p-2 align-top text-xs">
                                        <p>{index + 1}</p>
                                    </td>

                                    {/* Group Info Section */}
                                    <td className="p-2 w-full">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:items-start">
                                            {/* Image */}
                                            <img
                                                src={myGroup?.image}
                                                alt="Group"
                                                className="w-12 h-12 rounded object-cover"
                                            />

                                            {/* Group Info */}
                                            <div className="flex-1">
                                                {/* Group Name */}
                                                <h2 className="text-sm font-semibold text-gray-700">{myGroup?.name}</h2>

                                                {/* Info Items */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-1 text-xs text-gray-600">
                                                    {/* Host Name */}
                                                    <p className="flex items-center gap-1">
                                                        <FaUser className="text-purple-500 text-xs" />
                                                        {user?.displayName}
                                                    </p>

                                                    {/* Host Email */}
                                                    <p className="flex items-center gap-1">
                                                        <MdAttachEmail className="text-purple-500 text-xs" />
                                                        {user?.email}
                                                    </p>

                                                    {/* Category */}
                                                    <p className="flex items-center gap-1">
                                                        <FaTag className="text-pink-500 text-xs" />
                                                        {myGroup?.category}
                                                    </p>

                                                    {/* Start Date */}
                                                    <p className="flex items-center gap-1">
                                                        <FaCalendarAlt className="text-blue-500 text-xs" />
                                                        {myGroup?.startDate}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Buttons Section */}
                                    <td className="p-2 align-top">
                                        <div className="flex flex-col md:flex-row gap-1 md:justify-end">
                                            <button className="btn text-white btn-success btn-xs md:btn-sm">Info</button>
                                            <button className="btn text-white btn-warning btn-xs md:btn-sm">Update</button>
                                            <button className="btn text-white btn-error btn-xs md:btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>


                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroup;