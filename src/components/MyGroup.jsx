import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { FaCalendarAlt, FaTag, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const MyGroup = () => {

    const { user } = use(AuthContext);

    const groups = useLoaderData();
    const [remainingGroup] = groups.filter(group => group.userEmail === user.email)
    console.log(remainingGroup)

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
                    <tbody className='border-2'>
                        <tr className="hover:bg-base-200">
                            {/* Checkbox */}
                            <td className="p-4">
                                <p>1</p>
                            </td>

                            {/* Group Info */}
                            <td className="p-4">
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                    {/* Image */}
                                    <img src={remainingGroup?.image} alt="Group" className="w-24 h-24 rounded-md object-cover" />

                                    <div className="space-y-1 flex items-center gap-14 ">
                                        {/* Name */}
                                        {/* <h2 className="text-xl font-bold">{group?.name}</h2> */}
                                        <h2 className="text-xl font-bold">{remainingGroup?.name}</h2>

                                        {/* Host */}
                                        <p className="flex items-center gap-2 text-sm">
                                            <FaUser className="text-purple-500" />
                                            {user?.displayName} ({user?.email})
                                        </p>

                                        {/* Category */}
                                        <p className="flex items-center gap-2 text-sm">
                                            <FaTag className="text-pink-500" />
                                            {remainingGroup?.category}
                                        </p>

                                        {/* Start Date */}
                                        <p className="flex items-center gap-2 text-sm">
                                            <FaCalendarAlt className="text-blue-500" />
                                            {remainingGroup?.startDate}
                                            {/* 11/12/30 */}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            {/* Buttons */}
                            <td className="p-4 flex flex-col md:items-center my-auto sm:flex-row justify-end gap-2">
                                <button className="btn btn-success btn-sm sm:btn-md w-full sm:w-auto">Submit</button>
                                <button className="btn btn-warning btn-sm sm:btn-md w-full sm:w-auto">Reset</button>
                                <button className="btn btn-error btn-sm sm:btn-md w-full sm:w-auto">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroup;